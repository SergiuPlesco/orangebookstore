import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const [search, setSearch] = useState(null);

  const debounced = useDebouncedCallback((value) => {
    setSearch(value);
  }, 1000);

  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData", search],
    queryFn: () =>
      fetch(`http://localhost:3001/api/books/search?q=${search}`).then((res) =>
        res.json()
      ),
    enabled: Boolean(search),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occured: " + error.message;

  console.log(search, data);
  return (
    <div className="flex justify-center">
      <div className="max-w-[320px]">
        <Input
          placeholder="Search titles..."
          onChange={(e) => debounced(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
