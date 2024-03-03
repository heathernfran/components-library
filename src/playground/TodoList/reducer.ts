import { v4 as uuidV4 } from "uuid";
import type { TodosAction, TodosState } from "./types";

export const initialState: TodosState = {
  allTodos: [],
  newTodo: "",
};

export function todosReducer(state: TodosState, action: TodosAction) {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodoObject = {
        id: uuidV4(),
        isComplete: false,
        description: action.newTodo,
      };
      return {
        ...state,
        allTodos: [...state.allTodos, newTodoObject],
      };
    }
    case "COMPLETED_TODO": {
      if (action.completedTodo.isComplete) {
        const remainingTodos = state.allTodos.filter(
          (todo) => todo.id !== action.completedTodo.id
        );
        return {
          ...state,
          allTodos: [...remainingTodos, action.completedTodo],
        };
      } else {
        const allTodos = state.allTodos.map((todo) =>
          todo.id === action.completedTodo.id ? action.completedTodo : todo
        );
        return {
          ...state,
          allTodos,
        };
      }
    }
    case "DELETE_TODO": {
      const remainingTodos = state.allTodos.filter(
        (todo) => todo.id !== action.id
      );
      return {
        ...state,
        allTodos: remainingTodos,
      };
    }
    case "UPDATE_NEW_TODO": {
      const nextNewTodo = action.newTodo;
      return {
        ...state,
        newTodo: nextNewTodo,
      };
    }
    default: {
      throw Error(`Unknown action type: ${action}`);
    }
  }
}
