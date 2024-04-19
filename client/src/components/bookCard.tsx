import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book } from "@/types/books";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <Card className="h-full w-full">
      <CardHeader className="flex flex-row justify-between items-start w-[90%]">
        <div className="flex flex-col">
          <CardTitle>{book.title}</CardTitle>
          <p>{book.subtitle}</p>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="flex justify-center">
          {book.thumbnail && (
            <img src={book.thumbnail} height={300} alt="Book title" />
          )}
        </div>
        <p>{book.searchInfo ? book.searchInfo : book.description}</p>
      </CardContent>
    </Card>
  );
};

export default BookCard;
