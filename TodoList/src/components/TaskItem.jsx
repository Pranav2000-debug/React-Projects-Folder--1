import React, { useState } from "react";

function TaskItem({ singleTask, deleteTask, taskId, editTask }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [singleTodo, setSingleTodo] = useState(singleTask);
  function deleteSingleTask() {
    deleteTask(taskId);
  }
  function edit() {
    if(!isDisabled) {
      setIsDisabled(prev => !prev);
    } else {
      editTask(taskId, singleTodo);
      setIsDisabled(prev => !prev);
    }
  }
  return (
    <>
      <li className="md:w-5/6 mx-auto flex justify-between items-center bg-slate-800 px-4 py-2 rounded-lg">
        <input type="text" readOnly={!isDisabled} value={singleTodo} className={`bg-transparent outline rounded-lg py-1.5 px-1  ${isDisabled ? "outline-red-400" : "outline-none" }`} onChange={(e) => setSingleTodo(e.target.value)}/>
        <div className="space-x-2">
          <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md border-none outline-none" onClick={deleteSingleTask}>
            Del
          </button>
          <button className="bg-yellow-600 px-3 py-1 rounded-lg" onClick={edit}>{isDisabled ? "save" : "edit"}</button>
        </div>
      </li>
    </>
  );
}

export default TaskItem;
