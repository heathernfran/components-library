import { useContext } from "react";
import { FavouriteBooksContext } from "./context";
import type { FavouriteBooksContextType } from "./types";

export function useFavouriteBooksContext() {
  return useContext(FavouriteBooksContext) as FavouriteBooksContextType;
}
