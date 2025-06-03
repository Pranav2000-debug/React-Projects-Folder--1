import { useEffect, useState } from "react";
import { TodoProvider } from "./context/index";
import { TodoForm, TodoItem } from "./components/components";

function App() {
  // todos is an array of objects
  const [todos, setTodos] = useState([]);
  // here is where the logic and defination is being given. These methods and states are to be made available to the comps in Provider.
  const addTodo = (todo) => {
    setTodos((prev) => [{ ...todo }, ...prev]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      return index > -1 ? prev.toSpliced(index, 1) : prev;
    });
  };

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo )));
  };
  const deleteAll = () => {
    if (todos.length > 0) {
      setTodos([]);
    }
  };
  // grab the todo array from the storage and update our array with the storage items
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  // For setting the items in localStorage (updateStorage)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete, deleteAll }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage your todos</h1>
          <div className="mb-4">
            <TodoForm></TodoForm>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div className="w-full" key={todo.id}>
                <TodoItem singleTodo={todo}></TodoItem>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
