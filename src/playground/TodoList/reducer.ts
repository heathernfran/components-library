import { v4 as uuidV4 } from "uuid";
import type { TodosAction, TodoItem as TodoItemType } from "./types";

export function todosReducer(state: TodoItemType[], action: TodosAction) {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodoObject = {
        id: uuidV4(),
        isComplete: false,
        description: action.newTodo,
      };
      return [...state, newTodoObject];
    }
    case "COMPLETED_TODO": {
      if (action.completedTodo.isComplete) {
        const remainingTodos = state.filter(
          (todo) => todo.id !== action.completedTodo.id
        );
        return [...remainingTodos, action.completedTodo];
      } else {
        const allTodos = state.map((todo) =>
          todo.id === action.completedTodo.id ? action.completedTodo : todo
        );
        return allTodos;
      }
    }
    case "DELETE_TODO": {
      const remainingTodos = state.filter((todo) => todo.id !== action.id);
      return remainingTodos;
    }
    default: {
      throw Error(`Unknown action type: ${action}`);
    }
  }
}
