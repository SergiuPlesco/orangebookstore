import { useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import BookCard from "./bookCard";
import Loader from "./loader";
import FavoriteButton from "./favoriteButton";

const apiURL = import.meta.env.VITE_API_URL;

const Book = () => {
  //@ts-ignore
  const { bookId } = useParams({ strict: false });
  const { isLoading, data } = useQuery({
    queryKey: ["book", bookId],
    queryFn: () => fetch(`${apiURL}/books/${bookId}`).then((res) => res.json()),
    enabled: Boolean(bookId),
  });

  return (
    <div className="flex px-4 max-w-[1200px] mx-auto">
      <div className="flex justify-center mt-10">{isLoading && <Loader />}</div>
      <div>
        {data?.error && (
          <p className="flex justify-center text-[#ff0000]">{data.error}</p>
        )}
      </div>
      <div>
        {data && (
          <div className="relative">
            <div className="absolute top-4 right-2">
              <FavoriteButton book={data} />
            </div>
            <div>
              <BookCard book={data} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Book;
