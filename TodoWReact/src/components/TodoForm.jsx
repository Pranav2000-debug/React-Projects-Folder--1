import { useState } from "react";
import { useTodo } from "../context/index";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo, deleteAll } = useTodo();
  const add = (e) => {
    e.preventDefault();
    if (!todo) {
      return;
    }
    addTodo({ id: Date.now(), todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo...."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <div className="flex gap-x-2 items-center">
        <button type="submit" className="rounded-r-lg px-3 py-1.5 bg-green-600 text-white shrink-0">
          Add
        </button>
        <button className="px-3 py-1.5 bg-red-600 rounded-lg text-nowrap" onClick={deleteAll}>
          Delete All
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
