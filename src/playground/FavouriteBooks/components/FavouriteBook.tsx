export function FavouriteBook({
  handlerEvent,
  handlerText,
  id,
  title,
}: {
  handlerEvent: (key: string) => void;
  handlerText: string;
  id: string;
  title: string;
}) {
  return (
    <>
      <li>{title}</li>
      <button onClick={() => handlerEvent(id)}>{handlerText}</button>
    </>
  );
}
