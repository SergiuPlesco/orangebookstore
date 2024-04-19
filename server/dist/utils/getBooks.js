import axios from "axios";
import { transformSearchResponse } from "./transformResponse.js";
export const getBooks = async (searchQuery) => {
    try {
        const result = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`);
        const items = result.data.items;
        if (items.length > 0) {
            return transformSearchResponse(items);
        }
        else {
            return [];
        }
    }
    catch (error) {
        throw new Error("Something went wrong, try again.");
    }
};
//# sourceMappingURL=getBooks.js.map