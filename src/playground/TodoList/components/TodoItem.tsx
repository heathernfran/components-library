import type { TodoItem as TodoItemType } from "./../types";

interface Props {
  handleCompletedTodo: (todo: TodoItemType) => void;
  handleDeleteTodo: (id: string) => void;
  id: string;
  isComplete: boolean;
  description: string;
}

export function TodoItem({
  handleCompletedTodo,
  handleDeleteTodo,
  id,
  isComplete,
  description,
}: Props) {
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
