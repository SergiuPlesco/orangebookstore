import { Book } from "@/types/books";
import BookCard from "./bookCard";
import { Link } from "@tanstack/react-router";
import FavoriteButton from "./favoriteButton";

const BooksList = ({ list }: { list: Book[] }) => {
  return (
    <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 max-w-[1200px] mx-auto">
      {list.map((book: Book) => {
        return (
          <div className="relative">
            <div className="absolute top-4 right-2">
              <FavoriteButton book={book} />
            </div>
            <div className="h-full">
              <Link to={`/${book.id}`}>
                <BookCard key={book.id} book={book} />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BooksList;
