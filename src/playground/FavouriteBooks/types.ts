export type BookType = {
  id: string;
  title: string;
};

export type ResultBookType = {
  key: string;
  title: string;
};

export type ResultResponseType = {
  key: string;
  name: string;
  subject_type: string;
  works_count: number;
  works: ResultBookType[];
};

export type FavouriteBooksState = {
  results: ResultBookType[];
  favourites: BookType[];
  searchTerm: string;
};

interface UpdateSearchTerm {
  type: "UPDATE_SEARCH_TERM";
  searchTerm: string;
}
interface GetBooksAction {
  type: "GET_BOOKS";
  results: ResultBookType[];
}
interface AddFavourite {
  type: "ADD_FAVOURITE";
  book: BookType;
}
interface DeleteFavourite {
  type: "DELETE_FAVOURITE";
  id: string;
}
export type FavouriteBooksAction =
  | AddFavourite
  | DeleteFavourite
  | GetBooksAction
  | UpdateSearchTerm;
