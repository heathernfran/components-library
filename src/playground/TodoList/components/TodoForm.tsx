import type { Dispatch } from "react";
import type { TodosAction } from "../types";

interface Props {
  dispatchTodos: Dispatch<TodosAction>;
  newTodo: string;
}

export function TodoForm({ dispatchTodos, newTodo }: Props) {
  let debouncedNewTodo: NodeJS.Timeout;

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatchTodos({ type: "ADD_TODO", newTodo });
    dispatchTodos({ type: "UPDATE_NEW_TODO", newTodo: "" });
  };

  const handleChangeNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    clearTimeout(debouncedNewTodo);

    debouncedNewTodo = setTimeout(() => {
      dispatchTodos({ type: "UPDATE_NEW_TODO", newTodo: newValue });
    }, 100);
  };

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
