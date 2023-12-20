import React, { useState } from "react";
import classNames from "classnames";

const Todo = () => {
  const [text, setText] = useState("");
  const [task, setTask] = useState([]);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState(false);

  const handleClick = () => {
    if (text.trim() === "") {
      setError(true);
      return;
    } else {
      const newTask = {
        id: randomNumber(),
        title: text,
        completed: status,
      };
      setError(false);
      // setTask([...task, text]);
      setTask([...task, newTask]);
      setText("");
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
    setError(false);
  };

  const inputClasses = classNames({
    error: error,
  });

  console.log(task);

  const handleRemove = (taskId) => {
    const removed = task.filter((e) => e.id !== taskId);
    setTask(removed);
  };

  return (
    <div>
      <label>add task</label>
      <input
        type="text"
        placeholder="enter task"
        value={text}
        onChange={handleChange}
        className={inputClasses}
      />
      <button onClick={handleClick}>submit</button>
      {error && <p className="error-text">Please enter a task</p>}
      <div className="result">
        {task.map((element, index) => {
          return (
            <div key={index} className="d-flex">
              <input type="checkbox" />
              <p> {element.title} </p>
              <p> {element.completed ? "completed" : "not completed"} </p>
              <button onClick={() => handleRemove(element.id)}>remove</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;

const randomNumber = () => {
  // const random = Math.floor(Math.random() * 10000000000);
  const randomNumber = Date.now();
  return randomNumber;
};
