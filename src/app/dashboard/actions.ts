'use server'

import { Book, BookPage } from "@/types/book"
import { doc, getDocs, collection, addDoc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { auth } from '@clerk/nextjs/server'

const userId = "8m3thR6fquxAqJ8o5v6F"

export const getNotes = async (bookId: Book["id"], pageId: BookPage["id"]) => {
  // const { userId } = auth()
  if (!userId) {
    throw new Error('You must be signed in!')
  }
  try {
    const notesRef = collection(db, `users/${userId}/books/${bookId}/pages/${pageId}/notes`);
    
    const notesSnapshot = await getDocs(notesRef);
    
    const notes = notesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    return notes;
  } catch (error) {
    console.error("Error fetching notes: ", error);
    throw new Error("Error fetching notes");
  }
};
export const createNotes = async (
  bookId: Book["id"],
  pageId: BookPage["id"],
  content: string
) => {
  // const { userId } = auth()
  if (!userId) {
    throw new Error('You must be signed in!')
  }
  try {
    const notesRef = collection(db, `users/${userId}/books/${bookId}/pages/${pageId}/notes`);
    
    const docRef = await addDoc(notesRef, {
      content,
      createdAt: new Date(),
    });
    
    console.log("Note created with ID: ", docRef.id);
  } catch (error) {
    console.error("Error creating note: ", error);
    throw new Error("Error creating note");
  }
};
export const createPage = async (bookId:Book["id"], pageType: BookPage["type"]) => {
  // const { userId } = auth()
  if (!userId) {
    throw new Error('You must be signed in!')
  }
  const bookRef = collection(db, `users/${userId}/books/${bookId}/pages`)

  const newPage = {
    type: pageType
  }
  const docRef = await addDoc(bookRef, {
    type: pageType,
  })
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      type: pageType, 
      ...docSnap.data(), 
    } as BookPage;
  } else {
    throw new Error("Failed to create the page.");
  }
}