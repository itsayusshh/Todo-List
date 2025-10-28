import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "cooking",
      completed: false,
    },
    { id: 2, task: "coding", completed: false },
    { id: 3, task: "jogging", completed: false },
  ]);
  const [currentTask, setCurrentTask] = useState("");

  function updateTask(event) {
    setCurrentTask(event.target.value);
  }

  function setTask() {
    setTodos((prevValue) => {
      return [
        ...prevValue,
        { id: todos.length + 1, task: currentTask, completed: false },
      ];
    });

    setCurrentTask("");
  }

  function toggleTask(id) {
              
    setTodos((prevValue) => {
      return prevValue.map((todo) => {
        if (todo.id === id) {
          // toggle 'completed' state
          return { ...todo, completed: !todo.completed };
        } else {
          return todo; // keep other todos same
        }
      });
    });
  }

  const completedCount = todos.filter((task) => task.completed).length;

  const [checked, setchecked] = useState(false);

  const handleChange = () => {
    setchecked(!checked);
  };

  return (
    <>
      <div
        className="mainBox"
        style={{ width: "20%", margin: "6rem auto 0 auto" }}
      >
        <h1>Task completed: {completedCount} </h1>
        <div
          style={{
            display: "flex",
          }}
        >
          <input
            id="task"
            style={{ width: "100%" }}
            placeholder="What are your tasks"
            onChange={updateTask}
            value={currentTask}
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                setTask();
              }
            }}
          />
          <button style={{ marginLeft: "4px" }} onClick={setTask}>
            Add
          </button>
        </div>
        <div>
          <h3>Todo's</h3>
          <ol style={{ listStyleType: "none" }}>
            {todos?.map((todo) => {
              return (
                <div style={{ display: "flex"}}>
                  <input
                    type="checkbox"
                    checked={checked.todos} 
                    onChange={handleChange} 
                    style={{cursor:"pointer"}}
                    onClick={() => toggleTask(todo.id)}
                  />
                  <li
                    style={{
                      textDecoration:
                        todo.completed === true ? "line-through" : "none",
                      cursor: "pointer",
                    }}
                    onClick={() => toggleTask(todo.id) }
                  >
                    {todo.task}
                  </li>
                </div>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
