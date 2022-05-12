import React, {useState} from "react"
import TaskDisplay from "./Components/TaskDisplay";
import TaskForm from "./Components/TaskForm";

function App()
{
  const [tasks, setTasks] = useState([])

  const handleNewTask = (newTask) =>
  {
    setTasks([...tasks, newTask])
  }

  const handleUpdatedTasks = (updatedTasks) =>
  {
    setTasks(updatedTasks)
  }

  return (
    <div className="App">
      <TaskForm onNewTask = {handleNewTask} />
      <TaskDisplay tasks = {tasks} onUpdateTasks = {handleUpdatedTasks} />
    </div>
  );
}

export default App;
