import { BackgroundGradient } from "@/components/ui/background-gradient"
import { BookOpen, FileText, Brain, Folder } from "lucide-react"
import { ReactNode } from "react"
interface bgProps {
  title: string,
  img: string,
  content: string,
}
export default function BgGradientSection({title, img, content}: bgProps) {
  return (
    <>
      <BackgroundGradient className="rounded-[22px] w-full h-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
        {img === 'FileText' && (
          <FileText className="h-12 w-12 mb-4 text-primary" />
        )}
        {img === 'Brain' && (
          <Brain className="h-12 w-12 mb-4 text-primary" />
        )}
        {img === 'Folder' && (
          <Folder className="h-12 w-12 mb-4 text-primary"/>
        )}
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {title}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {content}
        </p>
      </BackgroundGradient>
    </>
  )
}