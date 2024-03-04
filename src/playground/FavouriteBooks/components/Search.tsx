import type { ChangeEvent, FormEvent } from "react";
import { fetchData } from "../api";
import { useFavouriteBooksContext } from "../hooks";
import type { ResultResponseType } from "../types";

export function Search() {
  const {
    state: { searchTerm },
    dispatch,
  } = useFavouriteBooksContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    dispatch({ type: "UPDATE_SEARCH_TERM", searchTerm: newSearchTerm });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response: ResultResponseType = await fetchData(
        `subjects/${searchTerm}.json`
      );
      dispatch({ type: "GET_BOOKS", results: response.works });
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search term:
          <input onChange={handleChange} type="text" value={searchTerm} />
        </label>
      </form>
    </div>
  );
}
