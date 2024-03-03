import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { TodoForm } from "./components/TodoForm";
import { TodoItem } from "./components/TodoItem";
import { useLocalStorage } from "./hooks/useLocalStorage";
import type { TodoItem as TodoItemType } from "./types";

export function TodoList() {
  const [todos, setTodos] = useLocalStorage<TodoItemType[]>("todos", []);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodoObject = {
      id: uuidV4(),
      isComplete: false,
      description: newTodo,
    };

    setNewTodo("");
    setTodos((prevState) => [...prevState, newTodoObject]);
  };

  const handleChangeNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleCompletedTodo = (completedTodo: TodoItemType) => {
    if (completedTodo.isComplete) {
      const remainingTodos = todos.filter(
        (todo) => todo.id !== completedTodo.id
      );
      setTodos([...remainingTodos, completedTodo]);
    } else {
      const allTodos = todos.map((todo) =>
        todo.id === completedTodo.id ? completedTodo : todo
      );
      setTodos(allTodos);
    }
  };

  const handleDeleteTodo = (id: string) => {
    const remainingTodos = todos.filter((todo) => todo.id !== id);
    setTodos(remainingTodos);
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
