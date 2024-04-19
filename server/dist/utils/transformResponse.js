export const transformSearchResponse = (searchItems) => {
    return searchItems.map((item) => {
        return {
            id: item.id,
            title: item?.volumeInfo?.title,
            subtitle: item?.volumeInfo?.subtitle,
            thumbnail: item?.volumeInfo?.imageLinks?.thumbnail,
            searchInfo: item?.searchInfo?.textSnippet,
        };
    });
};
export const transformBookResponse = (bookItem) => {
    console.log(bookItem);
    return {
        id: bookItem.id,
        title: bookItem?.volumeInfo?.title,
        subtitle: bookItem?.volumeInfo?.subtitle,
        thumbnail: bookItem?.volumeInfo?.imageLinks?.thumbnail,
        searchInfo: bookItem?.searchInfo?.textSnippet,
    };
};
//# sourceMappingURL=transformResponse.js.map