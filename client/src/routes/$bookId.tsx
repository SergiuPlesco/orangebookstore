import Book from "@/components/book";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$bookId")({
  component: Book,
});
