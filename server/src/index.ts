import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { getBooks } from "./utils/getBooks.js";
import { getBookById } from "./utils/getBook.js";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/api/books/search", async (req: Request, res: Response) => {
  const q = req.query.q as string;

  try {
    const searchedBooks = await getBooks(q);
    res.status(200).json(searchedBooks);
  } catch (error) {
    res.status(500).json({ error: "Could not perform search. Try again." });
  }
});

app.use("/api/books/:id", async (req: Request, res: Response) => {
  const id = req.params.id as string;

  try {
    const book = await getBookById(id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: "Could not get the book. Try again." });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
