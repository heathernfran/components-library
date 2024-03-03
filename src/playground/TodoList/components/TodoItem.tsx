import type { Dispatch } from "react";
import type { TodoItem as TodoItemType, TodosAction } from "./../types";

interface Props {
  dispatchTodos: Dispatch<TodosAction>;
  id: string;
  isComplete: boolean;
  description: string;
}

export function TodoItem({
  dispatchTodos,
  id,
  isComplete,
  description,
}: Props) {
  const handleCompletedTodo = (completedTodo: TodoItemType) => {
    dispatchTodos({ type: "COMPLETED_TODO", completedTodo });
  };

  const handleDeleteTodo = (id: string) => {
    dispatchTodos({ type: "DELETE_TODO", id });
  };

  return (
    <li>
      <input
        checked={isComplete}
        onChange={() =>
          handleCompletedTodo({ id, isComplete: !isComplete, description })
        }
        type="checkbox"
      />
      <span>{description}</span>
      <button onClick={() => handleDeleteTodo(id)}>Delete todo</button>
    </li>
  );
}
