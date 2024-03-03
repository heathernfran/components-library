interface Props {
  handleAddTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChangeNewTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  newTodo: string;
}

export function TodoForm({
  handleAddTodo,
  handleChangeNewTodo,
  newTodo,
}: Props) {
  return (
    <form onSubmit={handleAddTodo}>
      <label>
        Create new todo:{" "}
        <input onChange={handleChangeNewTodo} type="text" value={newTodo} />
      </label>
      <button type="submit">Add todo</button>
    </form>
  );
}
