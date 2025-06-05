import { useEffect, useState } from "react";
import InputContainer from "./components/InputContainer";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);

  function addSingleTask(task) {
    setTasks((prev) => [{ ...task }, ...prev]);
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function deleteAll() {
    setTasks([]);
  }

  function editTask(id, newTask) {
    setTasks((prev) => prev.map((item) => item.id === id ? {...item, todo : newTask} : item))
  }
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks && storedTasks.length > 0) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  console.log(tasks);
  return (
    <div className="h-screen w-full bg-slate-900 flex justify-center p-10">
      <div className="w-[800px]">
        <h1 className="text-3xl font-bold text-white space-y-6 text-center mb-6">To-Do List</h1>
        <InputContainer addTask={addSingleTask} deleteAll={deleteAll} />
        <ul className="text-white mt-6 space-y-3">
          {tasks.map(({ id, todo }, index) => {
            return <TaskItem key={index} singleTask={todo} deleteTask={deleteTask} taskId={id} editTask={editTask}/>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
