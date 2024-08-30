'use client'
import Tiptap from "@/app/dashboard/components/Tiptap"
import { ArrowBigLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function NotePage({ params }: { params: { pageId: string } }) {
  // This is going to be an editable page
  // done using html contenteditable which allows us to edit the input of html elements
  const router = useRouter()

  const handleBackClick = () => {
    router.back()
  }
  return (
    <>
      <ArrowBigLeft size={48} className="hover:text-primary mb-5" onClick={handleBackClick}/>
      <div className="card">
        <Tiptap/>
      </div>
    </>
  )
}