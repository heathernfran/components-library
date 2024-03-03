export interface TodoItem {
  id: string;
  isComplete: boolean;
  description: string;
}

export type TodosState = {
  allTodos: TodoItem[];
  newTodo: string;
};

interface AddTodoAction {
  type: "ADD_TODO";
  newTodo: string;
}
interface CompletedTodoAction {
  type: "COMPLETED_TODO";
  completedTodo: TodoItem;
}
interface DeleteTodoAction {
  type: "DELETE_TODO";
  id: string;
}
interface UpdateNewTodo {
  type: "UPDATE_NEW_TODO";
  newTodo: string;
}
export type TodosAction =
  | AddTodoAction
  | CompletedTodoAction
  | DeleteTodoAction
  | UpdateNewTodo;
