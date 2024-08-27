import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, FileText, Plus } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4 shadow-md">
        <h1 className="text-2xl font-bold mb-4">GnoVista</h1>
        <Link href="/dashboard/new-book">
        <Button className="w-full mb-4">
          <Plus className="mr-2 h-4 w-4" /> New Book
        </Button>
        </Link>
        <div className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <BookOpen className="mr-2 h-4 w-4" /> Book 1
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <BookOpen className="mr-2 h-4 w-4" /> Book 2
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="mb-4">
          <Input type="text" placeholder="Search your notes..." className="w-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* PDF Card */}
          <div className="bg-white p-4 rounded shadow">
            <FileText className="h-8 w-8 mb-2" />
            <h3 className="text-lg font-semibold mb-2">Sample PDF</h3>
            <p className="text-sm text-gray-600 mb-4">Last edited: 2 days ago</p>
            <Button variant="outline" className="w-full">Open PDF</Button>
          </div>
          {/* Add more cards for other PDFs or notes */}
        </div>
      </div>
    </div>
  )
}