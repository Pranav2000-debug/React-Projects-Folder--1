import { createContext, useContext } from "react";

// Vague functionality (defaults)(blueprint)
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Message",
      completed: false
    }
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
  deleteAll: () => {}
});

export const useTodo = () => {
  return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;