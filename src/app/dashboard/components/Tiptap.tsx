'use client'

import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Button } from '@/components/ui/button'
import { Bold, Italic, Code, List, Heading1, Heading2 } from 'lucide-react'
import { useDebounce } from 'use-debounce';

import { Editor } from '@tiptap/react'
import { Indent } from '@/lib/extensions/Indent'
import React, { useEffect } from 'react'
import { createNotes } from '../actions'
import { Book, BookPage } from '@/types/book'

interface MenuBarProps {
  editor: Editor | null
}
interface TipTapProps{
  noteContent: string,
  setNoteContent: React.Dispatch<React.SetStateAction<string>>
  currentBook: Book['id'],
  currentPage: BookPage['id'],
}
const MenuBar = ({ editor }:MenuBarProps) => {
  if (!editor) {
    return null
  }
  return (
    <div className="flex gap-1 mb-4 text-black border-b-2 border-primary">
      <Button
        title='Bold'
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`${editor.isActive('bold') ? 'bg-accent' : 'bg-transparent'} text-primary hover:bg-accent`}
      >
        <Bold />
      </Button>
      <Button
        title='Italic'
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`${editor.isActive('italic') ? 'bg-accent' : 'bg-transparent'} text-primary hover:bg-accent`}
      >
        <Italic />
      </Button>
      <Button
        title='Code'
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={`${editor.isActive('code') ? 'bg-accent' : 'bg-transparent'} text-primary hover:bg-accent`}
      >
        <Code />
      </Button>
      <Button
        title='Bulleted List'
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`${editor.isActive('bulletList') ? 'bg-accent' : 'bg-transparent'} text-primary hover:bg-accent`}
      >
        <List />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`${editor.isActive('heading', { level: 1 }) ? 'bg-accent' : 'bg-transparent'} text-primary hover:bg-accent`}
      >
        <Heading1/>
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`${editor.isActive('heading', { level: 2 }) ? 'bg-accent' : 'bg-transparent'} text-primary hover:bg-accent`}
      >
        <Heading2/>
      </Button>
    </div>
  )

}
const Tiptap = ({currentBook, currentPage, noteContent, setNoteContent}:TipTapProps) => {
  const [debouncedContent] = useDebounce(noteContent, 1000)
  const editor = useEditor({
    extensions: [StarterKit, Indent],
    content: `${noteContent == "" 
      ? 
      `<h1>
        Type here...
      </h1>`
      : noteContent}
    `,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl my-5 focus:outline-none',
      },
    },
    immediatelyRender: false,
    onUpdate: () => {
      const content = editor?.getHTML() as string
      setNoteContent(content)
    }
  })
  useEffect(() => {

    const saveContents = async () => {
      if (debouncedContent) {
        console.log('Saving debounced content:', debouncedContent);
        await createNotes(currentBook, currentPage, debouncedContent)
      }
    }
    saveContents()
    
  }, [debouncedContent]);

  if (!editor) {
    return null
  }
  return (
    <>
      <MenuBar editor={editor}/>
      {editor && <FloatingMenu className="rounded-md bg-white p-1 shadow-md flex gap-1" tippyOptions={{ duration: 100 }} editor={editor}>
        <Button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`${editor.isActive('heading', { level: 1 }) ? 'bg-accent' : ''} bg-slate-500 px-2 py-1 m-0 h-1/2 bg-transparent text-accent`}
        >
          <Heading1 />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`${editor.isActive('heading', { level: 1 }) ? 'bg-accent' : ''} bg-slate-500 px-2 py-1 m-0 h-1/2 bg-transparent text-accent`}
        >
          <Heading2 />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`${editor.isActive('heading', { level: 1 }) ? 'bg-accent' : ''} bg-slate-500 px-2 py-1 m-0 h-1/2 bg-transparent text-accent`}
        >
          <List/>
        </Button>
      </FloatingMenu>}
      <EditorContent editor={editor} />
    </>
  )
}

export default Tiptap
