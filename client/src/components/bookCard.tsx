import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book } from "@/types/books";
import { Link } from "@tanstack/react-router";
import FavoriteButton from "./favoriteButton";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <Card className="h-full w-full">
      <CardHeader className="flex flex-row justify-between items-start">
        <Link to={`/${book.id}`}>
          <div className="flex flex-col">
            <CardTitle>{book.title}</CardTitle>
            <p>{book.subtitle}</p>
          </div>
        </Link>
        <FavoriteButton book={book} />
      </CardHeader>
      <Link to={`/${book.id}`}>
        <CardContent className="flex flex-col gap-4">
          <div className="flex justify-center">
            {book.thumbnail && (
              <img src={book.thumbnail} height={300} alt="Book title" />
            )}
          </div>
          <p>{book.searchInfo}</p>
        </CardContent>
      </Link>
    </Card>
  );
};

export default BookCard;
