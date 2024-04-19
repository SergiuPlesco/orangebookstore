import type { Book } from "../types/book.js";

export const transformSearchResponse = (
  searchItems: Record<any, any>[]
): Book[] => {
  return searchItems.map((item: any) => {
    return {
      id: item.id,
      title: item?.volumeInfo?.title,
      subtitle: item?.volumeInfo?.subtitle,
      thumbnail: item?.volumeInfo?.imageLinks?.thumbnail,
      searchInfo: item?.searchInfo?.textSnippet,
    };
  });
};

export const transformBookResponse = (bookItem: Record<any, any>): Book => {
  return {
    id: bookItem.id,
    title: bookItem?.volumeInfo?.title,
    subtitle: bookItem?.volumeInfo?.subtitle,
    thumbnail: bookItem?.volumeInfo?.imageLinks?.thumbnail,
    description: bookItem?.volumeInfo?.description,
  };
};
