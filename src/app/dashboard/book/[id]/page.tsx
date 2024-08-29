"use client"
import { Button } from '@/components/ui/button'; // Adjust the path as necessary
import { Plus } from 'lucide-react'; // Ensure you have the icon package installed
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from 'react';

const dummyBookData = {
  bookId: "randomString1",
  bookTitle: "Topology",
  bookDescription: "Math is very fun and it's so cool, oh my god.",
  bookPurpose: "Education",
  bookPages: [
    {
      pageType: "notes" as PageType,  // pdf, notebook, or video
      pageImg: "", // depends on page type
      pageContent: "" // actual data of what is contained inside the page
    }
  ],
}
type PageType = "notes" | "pdf";

interface Book {
  bookId: string,
  bookTitle: string,
  bookDescription: string,
  bookPurpose: string,
  bookPages: BookPage[]
}
interface BookPage {
  pageType: PageType, // Could be 'video' 'pdf' or 'notes' for now 
  pageImg?: string, // thumbnail img ?
  pageContent?: string // idk 
}
export default function Book() {
  // get the bookPages from current book and save it into state
  // when a page is appended or removed in the db, add or remove the page from the view
  const [selected, setSelected] = useState([]) // state to store selected pages (to be used for deletion )
  const [bookData, setBookData] = useState<Book>(dummyBookData)
  const [bookPagesData, setBookPagesData] = useState<BookPage[]>(dummyBookData.bookPages)


  const handlePageClick = (page:BookPage) => {
    // determine what page it is and reroute them to correct page display
    // pdf page or note page
    console.log(page.pageType)
  
  }
  const handlePdfClick = () => {
    // handle pdf page creation

  }
  const handleNoteClick = () => {
    // handle note creation
    const newPage = {
      pageType: "notes" as PageType,
      pageImg: "", // Set an appropriate image if needed
      pageContent: "" // Add actual notebook content or placeholder
    };
    setBookPagesData([...bookPagesData, newPage]);
  }
  const handleVideoClick = () => {
    
  }
  return (
    <div className="p-4 md:p-10 grow overflow-y-auto">
      <div className='flex justify-between items-center'>
        <h1 className="text-2xl font-semibold mb-4">{dummyBookData.bookTitle}</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              <Plus/>
              Add Page
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='border-0 bg-background'>
            <DropdownMenuItem onClick={handlePdfClick}>
              PDF
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleNoteClick}>
              Notebook
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleVideoClick}>
              Video
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <p>{dummyBookData.bookDescription}</p>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {bookPagesData.map((page, idx) => (
          <div
            key={idx}
            className="max-w-[300px] h-[400px] dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md flex items-center justify-center flex-row-wrap"
            onClick={() => handlePageClick(page)}
          >
            <span className="text-neutral-700 dark:text-neutral-300 text-center">
              Page 
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
