import BooksList from "./booksList";
import useBooksStore from "@/store/useBooksStore";
const Favorites = () => {
  const { favoriteBooks } = useBooksStore((state) => state);
  return <BooksList list={favoriteBooks} />;
};

export default Favorites;
