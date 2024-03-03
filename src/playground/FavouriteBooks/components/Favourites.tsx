import type { Dispatch } from "react";
import type { BookType, FavouriteBooksAction } from "../types";
import { FavouriteBook } from "./FavouriteBook";

export function Favourites({
  dispatch,
  favourites,
}: {
  dispatch: Dispatch<FavouriteBooksAction>;
  favourites: BookType[];
}) {
  if (favourites.length === 0) return <h2>No favourite books added</h2>;

  const onDeleteFromFavourites = (id: string) => {
    dispatch({ type: "DELETE_FAVOURITE", id });
  };

  return (
    <div>
      <h2>Favourite books</h2>
      <ul>
        {favourites.map((favourite) => (
          <FavouriteBook
            key={favourite.id}
            handlerEvent={() => onDeleteFromFavourites(favourite.id)}
            handlerText="Delete from favourites"
            {...favourite}
          />
        ))}
      </ul>
    </div>
  );
}
