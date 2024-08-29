import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, FileText, Plus } from "lucide-react"
import Link from "next/link"
import { GnovistarSidebar } from "./components/Sidebar"

const dummyBookData = {
  bookTitle: "Topology",
  bookDescription: "math is very fun and its so cool oh my god.",
  bookPurpose:"Education",
}

export default function Dashboard() {
  return (
    <>
      <GnovistarSidebar>
        <div className="flex flex-1">
          <div className="p-2 md:p-10 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
            
            <div className="mb-4">
              <Input type="text" placeholder="Search your notes..." className="w-full border-0 dark:bg-neutral-800" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* PDF Card */}
              <div className="p-4 rounded shadow dark:bg-neutral-800">
                <FileText className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-semibold">{dummyBookData.bookTitle}</h3>
                <p className="text-sm mb-4">{dummyBookData.bookPurpose}</p>
                <p className="text-sm text-gray-400 mb-4">{dummyBookData.bookDescription}</p>
                <Button variant="outline" className="border-0  w-full">Open Book</Button>
              </div>
              {/* Add more cards for other PDFs or notes */}
            </div>
          </div>
        </div>
      </GnovistarSidebar>
    </>
  )
}