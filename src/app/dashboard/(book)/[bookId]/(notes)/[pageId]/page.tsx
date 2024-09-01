'use client'
import Tiptap from "@/app/dashboard/components/Tiptap"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { getNotes, createNotes } from "@/app/dashboard/actions"
import { useUser } from "@clerk/nextjs"

export default function NotePage({ params }: { params: { pageId: string } }) {
  const { user } = useUser()
  // This is going to be an editable page
  // Fetches notes from the database and render it out in TipTap editor as content
  // If no notes in the database then just render out a default tip tap editor
  // done using html contenteditable which allows us to edit the input of html elements
  const router = useRouter()
  useEffect(() => {
    // const notes = getNotes()
  }, [])

  const handleBackClick = () => {
    router.back()
  }
  return (
    <>
      <ArrowLeft  size={32} className="hover:text-primary mb-5" onClick={handleBackClick}/>
      <div className="card">
        <Tiptap/>
      </div>
    </>
  )
}