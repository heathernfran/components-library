import { useReducer } from "react";
import { favouriteBooksReducer, initialState } from "./reducers";
import { Favourites } from "./components/Favourites";
import { Results } from "./components/Results";
import { Search } from "./components/Search";

export function FavouriteBooks() {
  const [state, dispatch] = useReducer(favouriteBooksReducer, initialState);

  return (
    <div>
      <h1>Favourite Books</h1>
      {/* Search field */}
      <Search dispatch={dispatch} searchTerm={state.searchTerm} />
      {/* List of search result books */}
      <Results dispatch={dispatch} results={state.results} />
      {/* List of favourite books */}
      <Favourites dispatch={dispatch} favourites={state.favourites} />
    </div>
  );
}
