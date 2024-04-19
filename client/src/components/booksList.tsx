import { Book } from "@/types/books";
import BookCard from "./bookCard";

const BooksList = ({ list }: { list: Book[] }) => {
  return (
    <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {list.map((book: Book) => {
        return <BookCard key={book.id} book={book} />;
      })}
    </div>
  );
};

export default BooksList;
