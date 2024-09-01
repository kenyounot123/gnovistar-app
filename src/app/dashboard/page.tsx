"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react";
import { BookOpen, FileText, Plus } from "lucide-react"
import Link from "next/link"
import { GnovistarSidebar } from "./components/Sidebar"
import { useAuth } from "@clerk/nextjs"; 
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase"; 


type BookData = {
  id: string;
  name: string;
};

export default function Dashboard() {
  const [books, setBooks] = useState<BookData[]>([]);
  const { userId } = useAuth(); 

  useEffect(() => {
    if (userId) {
      const fetchBooks = async () => {
        try {
          const userDocRef = doc(db, "users", userId);
          const userDocSnap = await getDoc(userDocRef);

          const data = userDocSnap.data();
          if (data) {
            const booksArray = data.books || [];
            const booksData = booksArray.map((bookName: string, index: number) => ({
              id: index.toString(),
              name: bookName
            }));
            setBooks(booksData);
          }
        } catch (error) {
          console.error("Error fetching books:", error);
        }
      };

      fetchBooks();
    }
  }, [userId]);

  return (
    <>
      <GnovistarSidebar>
        <div className="flex flex-1">
          <div className="p-2 md:p-10 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
            <div className="mb-4">
              <Input type="text" placeholder="Search your books" className="w-full border-0 dark:bg-neutral-800" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {books.map(book => (
                <div key={book.id} className="p-4 rounded shadow dark:bg-neutral-800">
                  <FileText className="h-8 w-8 mb-2" />
                  <h3 className="text-lg font-semibold mb-2">{book.name}</h3>
                  <Link href={`dashboard/books/${book.name}`}>
                  <Button variant="outline" className="border-0 w-full">Open</Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GnovistarSidebar>
    </>
  );
}