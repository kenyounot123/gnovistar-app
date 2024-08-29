import { useRouter } from 'next/router';
import { Input } from "@/components/ui/input"
import { GnovistarSidebar } from "../components/Sidebar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function BookDetails() {
  const router = useRouter();
  const { bookName } = router.query;
  console.log(bookName)



  return (
    // <GnovistarSidebar>
      <div className="flex flex-1">
        <div className="p-2 md:p-10 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
          <h1 className="text-2xl font-bold mb-4">{bookName}</h1>
          <div className="mb-4">
            <Input type="text" placeholder="Search your book" className="w-full border-0 dark:bg-neutral-800" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded shadow dark:bg-neutral-800 flex items-center justify-center">
              <Button variant="outline" className="border-0">
                <Plus className="h-8 w-8" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    // </GnovistarSidebar>
  );
}
