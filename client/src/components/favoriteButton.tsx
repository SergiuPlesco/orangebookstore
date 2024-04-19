import { Button } from "@/components/ui/button";
import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";
import useBooksStore from "@/store/useBooksStore";
import { Book } from "@/types/books";

const FavoriteButton = ({ book }: { book: Book }) => {
  const { setFavoriteBooks, favoriteBooks, setRemoveFavoriteBook } =
    useBooksStore((state) => state);
  const handleAddFavoriteBook = () => {
    setFavoriteBooks(book);
  };

  const handleRemoveFavoriteBook = () => {
    setRemoveFavoriteBook(book);
  };
  const isFavorite = favoriteBooks.find(
    (favoriteBook: Book) => favoriteBook.id === book.id
  );
  return (
    <Button
      variant="ghost"
      onClick={isFavorite ? handleRemoveFavoriteBook : handleAddFavoriteBook}
    >
      {isFavorite ? <HeartFilledIcon /> : <HeartIcon />}
    </Button>
  );
};

export default FavoriteButton;
