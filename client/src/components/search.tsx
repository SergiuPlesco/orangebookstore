import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { useDebouncedCallback } from "use-debounce";
import Loader from "./loader";
import BooksList from "./booksList";
import useBooksStore from "@/store/useBooksStore";

const apiURL = import.meta.env.VITE_API_URL;

const Search = () => {
  const { searchQuery, setSearchQuery } = useBooksStore((state) => state);

  const debounced = useDebouncedCallback((value) => {
    setSearchQuery(value);
  }, 1000);

  const { isLoading, data } = useQuery({
    queryKey: ["repoData", searchQuery],
    queryFn: () =>
      fetch(`${apiURL}/books/search?q=${searchQuery}`).then((res) =>
        res.json()
      ),
    enabled: Boolean(searchQuery),
  });

  return (
    <div className="flex flex-col justify-center px-4">
      <div className="flex justify-center">
        <div className=" min-w-[320px] max-w-[500px] px-2">
          <Input
            placeholder="Search titles..."
            defaultValue={searchQuery}
            onChange={(e) => debounced(e.target.value)}
            type="search"
          />
        </div>
      </div>
      <div className="flex justify-center mt-10">{isLoading && <Loader />}</div>
      <div>
        {data?.error && (
          <p className="flex justify-center text-[#ff0000]">{data.error}</p>
        )}
      </div>
      <div>{data && <BooksList list={data} />}</div>
    </div>
  );
};

export default Search;
