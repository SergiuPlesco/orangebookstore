import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoriteBook = {
  id: string;
  title: string;
  thumbnail: string;
  subtitle: string;
  searchInfo: string;
};
type FavoriteStore = {
  favoriteBooks: FavoriteBook[];
  setFavoriteBooks: (favoriteBooks: FavoriteBook[]) => void;
};

const useFavoriteStore = create(
  persist<FavoriteStore>(
    (set) => ({
      favoriteBooks: [],
      setFavoriteBooks: (favoriteBooks: FavoriteBook[]) =>
        set({ favoriteBooks }),
    }),
    { name: "favoriteBooksStorage" }
  )
);

export default useFavoriteStore;
