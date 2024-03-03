import type { TodoItem as TodoItemType } from "./../types";

interface Props {
  handleCompletedTodo: (todo: TodoItemType) => void;
  id: string;
  isComplete: boolean;
  description: string;
}

export function TodoItem({
  handleCompletedTodo,
  id,
  isComplete,
  description,
}: Props) {
  const handleChangeIsComplete = () => {
    handleCompletedTodo({ id, isComplete: !isComplete, description });
  };

  return (
    <li>
      <input
        checked={isComplete}
        onChange={handleChangeIsComplete}
        type="checkbox"
      />
      <span>{description}</span>
    </li>
  );
}
