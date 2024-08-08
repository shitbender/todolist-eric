import React, {useState} from 'react'
import './App.css'



function App() {

  const [tasks, setTasks] = useState([]);

  const updateTasks = () => {
    if (document.getElementById("taskInput").value.trim() !== "") {
      let task = document.getElementById("taskInput").value;
      setTasks(t => t = [...t, task]);
      document.getElementById("taskInput").value = "";
    }
  }

  const removeItem = i => {
    setTasks(t => {
      return t.filter(task => task !== i);
    })
  }

  const moveUp = i => {
    if (i !== 0) {
      setTasks(t => {
        const newT = [...t];
        [newT[i], newT[i-1]] = [newT[i-1], newT[i]];
        return newT;
      })
    }
  }

  const moveDown = i => {
    if (i < tasks.length - 1) {
      setTasks(t => {
        const newT = [...t];
        [newT[i], newT[i+1]] = [newT[i+1], newT[i]];
        return newT;
      })
    }
  }

  return (
    <>
    <h1>To-Do List</h1>
    <input id="taskInput" type="text" placeholder="Enter Task"></input>
    <button onClick={() => updateTasks()}>Add Task</button><br/>
    <ol>
      {tasks.map((task, index) => <li key={index}>{task}<button onClick={() => removeItem(task)}>
                                                          delete
                                                        </button>
                                                        <button onClick={() => moveUp(index)}>
                                                          ☝
                                                        </button>
                                                        <button onClick={() => moveDown(index)}>
                                                          👇
                                                        </button>
                                  </li>)}
    </ol>
    </>
  )
}

export default App
