import { Book } from "@/types/books";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoriteStore = {
  searchQuery: string;
  favoriteBooks: Book[];
  setFavoriteBooks: (favoriteBooks: Book) => void;
  setRemoveFavoriteBook: (favorite: Book) => void;
  setSearchQuery: (searchQuery: string) => void;
};

const useBooksStore = create(
  persist<FavoriteStore>(
    (set) => ({
      searchQuery: "",
      favoriteBooks: [],
      setFavoriteBooks: (favoriteBook: Book) =>
        set((state) => ({
          favoriteBooks: [...state.favoriteBooks, favoriteBook],
        })),
      setRemoveFavoriteBook: (book: Book) =>
        set((state) => ({
          favoriteBooks: state.favoriteBooks.filter(
            (favoriteBook) => favoriteBook.id !== book.id
          ),
        })),
      setSearchQuery: (searchQuery: string) => set({ searchQuery }),
    }),
    { name: "BooksStorage" }
  )
);

export default useBooksStore;
