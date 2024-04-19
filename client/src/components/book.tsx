import { useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import BookCard from "./bookCard";
import Loader from "./loader";
const Book = () => {
  //@ts-ignore
  const { bookId } = useParams({ strict: false });
  const { isLoading, data } = useQuery({
    queryKey: ["book", bookId],
    queryFn: () =>
      fetch(`http://localhost:3001/api/books/${bookId}`).then((res) =>
        res.json()
      ),
    enabled: Boolean(bookId),
  });

  return (
    <div className="flex px-4">
      <div className="flex justify-center mt-10">{isLoading && <Loader />}</div>
      <div>
        {data?.error && (
          <p className="flex justify-center text-[#ff0000]">{data.error}</p>
        )}
      </div>
      <div>{data && <BookCard book={data} />}</div>
    </div>
  );
};

export default Book;
