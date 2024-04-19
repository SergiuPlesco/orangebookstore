import axios from "axios";
import { transformBookResponse } from "./transformResponse.js";
export const getBookById = async (id) => {
    try {
        const result = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
        const data = result.data;
        if (data) {
            return transformBookResponse(data);
        }
        else {
            return {};
        }
    }
    catch (error) {
        throw new Error("Something went wrong, try again.");
    }
};
//# sourceMappingURL=getBook.js.map