import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import axios from "axios";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/api/books/search", async (req: Request, res: Response) => {
  const q = req.query.q;

  try {
    const result = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${q}`
    );
    const data = result.data;
    res.status(200).json(data);
  } catch {
    res
      .status(404)
      .json({ error: "Could not get any results for your search." });
  }
});

app.use("/api/books/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const result = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );
    const data = result.data;
    res.status(200).json(data);
  } catch (error) {}
  res.status(404).json({ error: "Searched book could not be found." });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
