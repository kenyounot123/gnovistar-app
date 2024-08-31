export interface Book {
  bookId: string,
  bookTitle: string,
  bookDescription: string,
  bookPurpose: string,
  bookPages: BookPage[]
}
export type PageType = "notes" | "pdf";

export interface BookPage {
  pageId: string,
  pageType: PageType, // Could be 'video' 'pdf' or 'notes' for now 
  pageImg?: string, // thumbnail img ?
  pageContent?: string // idk 
}