import { useReducer } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoItem } from "./components/TodoItem";
import { initialState, todosReducer } from "./reducer";

export function TodoList() {
  const [{ allTodos, newTodo }, dispatchTodos] = useReducer(
    todosReducer,
    initialState
  );

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm dispatchTodos={dispatchTodos} newTodo={newTodo} />
      {allTodos.length ? (
        <ul>
          {allTodos.map((todo) => (
            <TodoItem key={todo.id} dispatchTodos={dispatchTodos} {...todo} />
          ))}
        </ul>
      ) : (
        <span>No todos yet</span>
      )}
    </div>
  );
}
