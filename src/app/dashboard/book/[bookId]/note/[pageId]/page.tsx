'use client'
import { ArrowBigLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function NotePage({ params }: { params: { pageId: string } }) {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return (
    <>
      <div>
        <ArrowBigLeft size={48} className="hover:text-primary" onClick={handleBackClick}/>
      </div>
    </>
  )
}