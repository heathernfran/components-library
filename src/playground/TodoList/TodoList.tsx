import { useReducer, useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoItem } from "./components/TodoItem";
import { initialState, todosReducer } from "./reducer";
import type { TodoItem as TodoItemType } from "./types";

export function TodoList() {
  const [{ allTodos }, dispatchTodos] = useReducer(todosReducer, initialState);
  const [newTodo, setNewTodo] = useState("");

  let debouncedNewTodo: NodeJS.Timeout;

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatchTodos({ type: "ADD_TODO", newTodo });
    setNewTodo("");
  };

  const handleChangeNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    clearTimeout(debouncedNewTodo);

    debouncedNewTodo = setTimeout(() => {
      setNewTodo(newValue);
    }, 100);
  };

  const handleCompletedTodo = (completedTodo: TodoItemType) => {
    dispatchTodos({ type: "COMPLETED_TODO", completedTodo });
  };

  const handleDeleteTodo = (id: string) => {
    dispatchTodos({ type: "DELETE_TODO", id });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm
        handleAddTodo={handleAddTodo}
        handleChangeNewTodo={handleChangeNewTodo}
        newTodo={newTodo}
      />
      {allTodos.length ? (
        <ul>
          {allTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              handleCompletedTodo={handleCompletedTodo}
              handleDeleteTodo={handleDeleteTodo}
              {...todo}
            />
          ))}
        </ul>
      ) : (
        <span>No todos yet</span>
      )}
    </div>
  );
}
