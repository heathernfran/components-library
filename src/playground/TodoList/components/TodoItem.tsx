import { useState } from "react";
import type { TodoItem as TodoItemType } from "./types";

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
  const [updatedComplete, setUpdatedComplete] = useState(isComplete);

  const handleUpdatedComplete = () => {
    setUpdatedComplete(!updatedComplete);
    if (!updatedComplete) {
      handleCompletedTodo({ id, isComplete, description });
    }
  };

  return (
    <li>
      <input
        checked={updatedComplete}
        onChange={handleUpdatedComplete}
        type="checkbox"
      />
      <span>{description}</span>
    </li>
  );
}
