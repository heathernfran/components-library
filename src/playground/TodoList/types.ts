export interface TodoItem {
  id: string;
  isComplete: boolean;
  description: string;
}

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
export type TodosAction =
  | AddTodoAction
  | CompletedTodoAction
  | DeleteTodoAction;
