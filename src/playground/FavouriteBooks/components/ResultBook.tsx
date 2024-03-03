import type { BookType } from "../types";

export function ResultBook({
  handlerEvent,
  handlerText,
  id,
  title,
}: {
  handlerEvent: (book: BookType) => void;
  handlerText: string;
  id: string;
  title: string;
}) {
  return (
    <>
      <li>{title}</li>
      <button onClick={() => handlerEvent({ id, title })}>{handlerText}</button>
    </>
  );
}
