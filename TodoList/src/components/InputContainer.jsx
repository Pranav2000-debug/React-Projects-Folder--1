import React, { useState } from "react";

function InputContainer({ addTask, deleteAll }) {
  const [inputTask, setInputTask] = useState("");

  function add() {
    const trimmed = inputTask.trim();
    if (trimmed) {
      addTask({ id: Date.now(), todo: trimmed });
      setInputTask("");
    }
  }
  return (
    <div className="w-full">
      <div className="sm:w-11/12 mx-auto flex flex-col sm:flex-row space-y-2 sm:justify-center sm:items-center sm:space-y-0 sm:space-x-2">
        <input
          placeholder="Enter Task"
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
          type="text"
          className="sm:w-3/4 w-full py-1.5 rounded-lg px-2 outline-none"
        />
        <button type="button" className="text-white bg-green-700 px-3 py-1.5 rounded-lg" onClick={add}>
          Add
        </button>
        <button className="text-white bg-red-700 px-3 py-1.5 rounded-lg sm:text-nowrap" onClick={deleteAll}>Del All</button>
      </div>
    </div>
  );
}

export default InputContainer;
