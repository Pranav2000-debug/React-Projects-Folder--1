import React from "react";

function TaskItem({ singleTask, deleteTask, taskId, editTask }) {
  function deleteSingleTask() {
    deleteTask(taskId);
  }
  function edit() {
    const newTask = prompt("Edit Task", singleTask);
    if(newTask !== null && newTask !== "") 
      editTask(taskId, newTask);
  }
  return (
    <>
      <li className="md:w-5/6 mx-auto flex justify-between items-center bg-slate-800 px-4 py-2 rounded-lg">
        <span>{singleTask}</span>
        <div className="space-x-2">
          <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md border-none outline-none" onClick={deleteSingleTask}>
            Del
          </button>
          <button className="bg-yellow-600 px-3 py-1 rounded-lg" onClick={edit}>Edit</button>
        </div>
      </li>
    </>
  );
}

export default TaskItem;
