import { useReducer, useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoItem } from "./components/TodoItem";
import { todosReducer } from "./reducer";
import type { TodoItem as TodoItemType } from "./types";

export function TodoList() {
  const [todos, dispatchTodos] = useReducer(todosReducer, [] as TodoItemType[]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatchTodos({ type: "ADD_TODO", newTodo });
    setNewTodo("");
  };

  const handleChangeNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
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
      {todos.length ? (
        <ul>
          {todos.map((todo) => (
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
