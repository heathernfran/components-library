import { createContext, useReducer } from "react";
import type { ReactNode } from "react";
import { favouriteBooksReducer, initialState } from "./reducers";

export const FavouriteBooksContext = createContext({});

export function FavouriteBooksProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(favouriteBooksReducer, initialState);

  return (
    <FavouriteBooksContext.Provider value={{ state, dispatch }}>
      {children}
    </FavouriteBooksContext.Provider>
  );
}
