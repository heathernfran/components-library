import type { FavouriteBooksAction, FavouriteBooksState } from "./types";

export const initialState: FavouriteBooksState = {
  results: [],
  favourites: [],
  searchTerm: "",
};

export function favouriteBooksReducer(
  state: FavouriteBooksState,
  action: FavouriteBooksAction
) {
  switch (action.type) {
    case "UPDATE_SEARCH_TERM": {
      const nextSearchTerm = action.searchTerm;
      return {
        ...state,
        searchTerm: nextSearchTerm,
      };
    }
    case "GET_BOOKS": {
      const nextBooks = action.results;
      return {
        ...state,
        results: nextBooks,
      };
    }
    case "ADD_FAVOURITE": {
      const nextFavourites = [...state.favourites, action.book];
      return {
        ...state,
        favourites: nextFavourites,
      };
    }
    case "DELETE_FAVOURITE": {
      const nextFavourites = state.favourites.filter(
        (favourite) => favourite.id !== action.id
      );
      return {
        ...state,
        favourites: nextFavourites,
      };
    }
    default: {
      throw new Error(`Unknown action: ${action}`);
    }
  }
}
