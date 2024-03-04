import { useFavouriteBooksContext } from "../hooks";
import type { BookType } from "../types";
import { ResultBook } from "./ResultBook";

export function Results() {
  const {
    state: { results },
    dispatch,
  } = useFavouriteBooksContext();

  if (results.length === 0) return <h2>No books to display</h2>;

  const onAddToFavourites = (book: BookType) => {
    dispatch({ type: "ADD_FAVOURITE", book });
  };

  return (
    <div>
      <h2>Search results</h2>
      <ul>
        {results.map(({ key: id, title }) => (
          <ResultBook
            key={id}
            handlerEvent={() => onAddToFavourites({ id, title })}
            handlerText="Add to favourites"
            {...{ id, title }}
          />
        ))}
      </ul>
    </div>
  );
}
