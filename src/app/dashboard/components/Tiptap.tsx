'use client'

import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Button } from '@/components/ui/button'
import { Bold, Italic, Code, List, Heading1, Heading2 } from 'lucide-react'

import { Editor } from '@tiptap/react'
import { Indent } from '@/lib/extensions/Indent'

interface MenuBarProps {
  editor: Editor | null
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
const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit, Indent],
    content: `
      <p>
        I like lists. Let’s add one:
      </p>
      <ul>
        <li>This is a bullet list.</li>
        <li>And it has three list items.</li>
        <li>Here is the third one.</li>
      </ul>
      <p>
        Do you want to see one more? I bet! Here is another one:
      </p>
      <ol>
        <li>That’s a different list, actually it’s an ordered list.</li>
        <li>It also has three list items.</li>
        <li>And all of them are numbered.</li>
      </ol>
      <p>
        Lists woul be nothing without list items.
      </p>
    `,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl my-5 focus:outline-none',
      },
    },
    immediatelyRender: false,
  })
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
