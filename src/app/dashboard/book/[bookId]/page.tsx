"use client"
import { Button } from '@/components/ui/button'; 
import { Plus } from 'lucide-react'; 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Book } from '@/types/book';
import { PageType } from '@/types/book';
import { BookPage } from '@/types/book';
import { createPage } from '../../actions';

const dummyBookData = {
  id: "randomString1",
  title: "Topology",
  description: "Math is very fun and it's so cool, oh my god.",
  purpose: "Education",
  pages: [
    {
      id: "someString1",
      type: "notes" as PageType,  // pdf, notebook, or video
      img: "", // depends on page type
      content: "" // actual data of what is contained inside the page
    }
  ],
}
export default function Book({ params }: { params: { bookId: string } }) {
  // get the bookPages from current book and save it into state
  // when a page is appended or removed in the db, add or remove the page from the view
  const [selected, setSelected] = useState([]) // state to store selected pages (to be used for deletion )
  const [bookData, setBookData] = useState<Book>(dummyBookData)
  const [bookPagesData, setBookPagesData] = useState<BookPage[]>(dummyBookData.pages)
  const router = useRouter()


  const handlePageClick = (page:BookPage) => {
    // determine what page it is and reroute them to correct page display
    // pdf page or note page
    if (page.type == "notes") {
      router.push(`/dashboard/book/${params.bookId}/note/${page.id}`)
    } else if (page.type == "pdf") {
      // handle when user clicks on a pdf type page
      router.push(`/dashboard/book/${params.bookId}/pdf/${page.id}`)
    }
  
  }
  const handlePdfClick = () => {
    // handle pdf page creation

  }
  const handleNoteClick = async () => {
    // handle note creation and save to database 
    const tempBookId = "HrM2CFXvqSerivtko0ro"
    const newPage = await createPage(tempBookId, 'notes')
    setBookPagesData([...bookPagesData, newPage]);
  }
  const handleVideoClick = () => {
    
  }
  return (
    <>
      <div className='flex justify-between items-center'>
        <h1 className="text-2xl font-semibold mb-4">{dummyBookData.title}</h1>
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
      <p>{dummyBookData.description}</p>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {bookPagesData.map((page, idx) => (
          <div
          key={idx}
          className="hover:-translate-y-2 transition-translate delay-75 duration-300 ease-in-out max-w-[300px] h-[400px] dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md flex items-center justify-center flex-row-wrap"
          onClick={() => handlePageClick(page)}
          >
            <span className="text-neutral-700 dark:text-neutral-300 text-center">
              Page 
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
