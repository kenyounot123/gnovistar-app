"use client";

import * as pdfjsLib from "pdfjs-dist/webpack.mjs";
import { pageLoaded } from "./test";

export default function Test() {
  async function loadPdf() {
    //
    // If absolute URL from the remote server is provided, configure the CORS
    // header on that server.
    //
    const url = "./Kevin_Zhu_8-2024.pdf";

    //
    // The workerSrc property shall be specified.
    //
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "../../node_modules/pdfjs-dist/build/pdf.worker.mjs";

    //
    // Asynchronous download PDF
    //
    const loadingTask = pdfjsLib.getDocument(url);
    const pdf = await loadingTask.promise;

    // Get Metadata
    const data = await pdf.getMetadata();
    console.log(JSON.stringify(data.info, null, 2));
    if (data.metadata) {
      console.log("## Metadata");
      console.log(JSON.stringify(data.metadata.getAll(), null, 2));
      console.log();
    }

    //
    // Fetch the first page
    //
    const page = await pdf.getPage(1);
    const scale = 1.5;
    const viewport = page.getViewport({ scale });

    const text = await page.getTextContent();
    console.log(text);
    function getContent(content) {
      // Content contains lots of information about the text layout and
      // styles, but we need only strings at the moment
      const strings = content.items.map(function (item) {
        return item.str;
      });
      console.log("## Text Content");
      console.log(strings.join(" "));
      // Release page resources.
      page.cleanup();
    }
    // getContent(text);

    // Support HiDPI-screens.
    const outputScale = window.devicePixelRatio || 1;

    //
    // Prepare canvas using PDF page dimensions
    //
    const canvas = document.getElementById("the-canvas");
    const context = canvas.getContext("2d");

    canvas.width = Math.floor(viewport.width * outputScale);
    canvas.height = Math.floor(viewport.height * outputScale);
    canvas.style.width = Math.floor(viewport.width) + "px";
    canvas.style.height = Math.floor(viewport.height) + "px";

    const transform =
      outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;

    //
    // Render PDF page into canvas context
    //
    const renderContext = {
      canvasContext: context,
      transform,
      viewport,
    };
    page.render(renderContext);
  }

  // pageLoaded();

  async function abc() {
    const DEFAULT_URL = "/Kevin_Zhu_8-2024.pdf";
    const PAGE_TO_VIEW = 1;
    const SCALE = 1.0;

    const ENABLE_XFA = true;

    const container = document.getElementById("pageContainer");

    const eventBus = new pdfjsViewer.EventBus();

    // Loading document.
    const loadingTask = pdfjsLib.getDocument({
      url: DEFAULT_URL,
      cMapUrl: CMAP_URL,
      cMapPacked: CMAP_PACKED,
      enableXfa: ENABLE_XFA,
    });

    const pdfDocument = await loadingTask.promise;
    // Document loaded, retrieving the page.
    const pdfPage = await pdfDocument.getPage(PAGE_TO_VIEW);

    // Creating the page view with default parameters.
    const pdfPageView = new pdfjsViewer.PDFPageView({
      container,
      id: PAGE_TO_VIEW,
      scale: SCALE,
      defaultViewport: pdfPage.getViewport({ scale: SCALE }),
      eventBus,
    });
    // Associate the actual page with the view, and draw it.
    pdfPageView.setPdfPage(pdfPage);
    pdfPageView.draw();
  }

  abc()

  return (
    <div>
      <button onClick={() => loadPdf()}>Load PDF</button>
      <canvas id="the-canvas"></canvas>
      <div id="pageContainer"></div>
    </div>
  );
}
