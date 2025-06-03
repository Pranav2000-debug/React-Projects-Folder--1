import { useState } from "react";
import { useTodo } from "../context/index";

function TodoItem({ singleTodo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(singleTodo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(singleTodo.id, { ...singleTodo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(singleTodo.id);
  };

  return (
    <div
      className={`flex border w-full border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
        singleTodo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}>
      <input type="checkbox" className="cursor-pointer" checked={singleTodo.completed} onChange={toggleCompleted} />

      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"}`}
        value={todoMsg}
        readOnly={!isTodoEditable}
        onChange={(e) => setTodoMsg(e.target.value)}
      />

      <button
        className="px-3 inline-flex py-1 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (singleTodo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable((prev) => !prev);
          }
        }}
        disabled={singleTodo.completed}>
        {isTodoEditable ? "save" : "edit"}
      </button>
      
      <button
        className="px-3 py-1 inline-flex  rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          deleteTodo(singleTodo.id)
        }}
        disabled={singleTodo.completed}>
        delete
      </button>
    </div>
  );
}

export default TodoItem;
