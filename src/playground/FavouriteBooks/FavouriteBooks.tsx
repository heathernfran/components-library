import { FavouriteBooksProvider } from "./context";
import { Favourites } from "./components/Favourites";
import { Results } from "./components/Results";
import { Search } from "./components/Search";

export function FavouriteBooks() {
  return (
    <FavouriteBooksProvider>
      <h1>Favourite Books</h1>
      {/* Search field */}
      <Search />
      {/* List of search result books */}
      <Results />
      {/* List of favourite books */}
      <Favourites />
    </FavouriteBooksProvider>
  );
}
