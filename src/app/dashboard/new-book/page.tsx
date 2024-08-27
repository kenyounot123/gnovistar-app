"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel, TextareaAutosize, FormHelperText } from "@mui/material";
import Link from 'next/link';
const { GoogleGenerativeAI } = require("@google/generative-ai");

export default function NewBookForm() {
  const [bookName, setBookName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [purpose, setPurpose] = useState<string>("");
  const [confirmation, setConfirmation] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    await fetchGeminiData(bookName, description, purpose);

    
    console.log(`Book: ${bookName}, Purpose: ${purpose}, Description: ${description}`);

    setConfirmation(true);
    setLoading(true);
  };

  const generateGeminiPrompt = (bookName: string, description: string, purpose: string) => {
    
    let prompt = `A user has created a study space for a book titled "${bookName}". The description provided is: "${description}". Please find relevant materials from the internet based on the given topic of interest and details, and return as a JSON object with each entry having a name, and a link (no explanations please). Here are the requirements: `;

    switch (purpose) {
      case "research":
        prompt += ` Please suggest 4 relevant scholarly articles and one related YouTube video that contains a professor lecture.`;
        break;
      case "blog_post":
        prompt += ` Please suggest 2 scholarly articles, 4 blog articles, and one related YouTube video.`;
        break;
      case "university_level":
        prompt += ` Please suggest 2 research articles, 2 blog articles or university notes, and one related YouTube video from a professor lecture.`;
        break;
      case "high_school_level":
        prompt += ` Please suggest 2 blog articles and 3 short YouTube videos (5-20 minutes) with clear explanations.`;
        break;
      default:
        prompt += ` Please suggest one research article, one blog article, and 2 YouTube videos.`;
        break;
    }

    return prompt;
  };

  const fetchGeminiData = async (bookName: string, description: string, purpose: string) => {
    const geminiApiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY; // Replace with your actual API key

    // Generate the prompt based on user input
    const prompt = generateGeminiPrompt(bookName, description, purpose);

    const genAI = new GoogleGenerativeAI(geminiApiKey);

    const model = genAI.getGenerativeModel(
      { model: "gemini-1.5-flash",
      generationConfig: { responseMimeType: "application/json" }
      });

    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const starter = response.text();
    console.log(starter);
    
  };

  if (confirmation) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-5xl p-10 bg-white shadow-md rounded">
          <h1 className="text-3xl font-bold mb-2 text-center">Yay! Your <span className="text-blue-500">{bookName}</span> book has been created.</h1>
          <p className="text-center text-gray-600 mb-8">We've filled it with some starter material that you can find useful. Happy learning!</p>
          <Link href="/dashboard">
          <Button className="w-full mt-4">
            Go to Dashboard
          </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-5xl p-10 bg-white shadow-md rounded" style={{ height: "80%" }}>
        <h1 className="text-3xl font-bold mb-2 text-center">Create New Book</h1>
        <p className="text-center text-gray-600 mb-8">A "Book" in GnoVistar is a collection of papers and notes centered on a topic of your choice. Add, interact, scribble and compile all of your study materials within a book with AI by your side. </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <label htmlFor="bookName" className="block text-sm font-medium text-gray-700">
              Book Name
            </label>
            <Input
              type="text"
              id="bookName"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              required
              className="w-full mt-1"
              placeholder="Keep it unique. Keep it understandable for the AI."
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <TextareaAutosize
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              minRows={5}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              placeholder="Enter a detailed description of the topic of your interest. It can greatly help the AI to fetch you the starter kit."
              style={{ resize: "none" }}
            />
          </div>
          <div className="mb-4">
          
            <FormControl fullWidth>
              <InputLabel id="purpose-label">Purpose</InputLabel>
              <Select
                labelId="purpose-label"
                id="purpose"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value as string)}
                required
              >
                <MenuItem value="research">Research</MenuItem>
                <MenuItem value="blogging">Blogging</MenuItem>
                <MenuItem value="university_level">University Level Study/Exam Prep</MenuItem>
                <MenuItem value="high_school_level">High School Level Study/Exam Prep</MenuItem>
                <MenuItem value="nothing">No Intended Purpose</MenuItem>
              </Select>
              <FormHelperText>What purpose does this book serve you?</FormHelperText>
            </FormControl>
          </div>
          <Button type="submit" className="w-full mt-4 flex items-center justify-center relative" disabled={loading}>
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin border-t-blue-500"></div>
              </div>
            ) : (
              "✦ Create"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
