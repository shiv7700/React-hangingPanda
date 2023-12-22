import React, { Component } from "react";
import taskList from "./Task.json";

export default class TodDo extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: taskList.map((task) => ({ ...task, check: false })),
    };
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck(taskID) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === taskID
          ? { ...task, check: !task.check, completed: !task.completed }
          : task
      ),
    }));
  }

  render() {
    return (
      <>
        <div className="ms-5 mt-2 fw-bold">Tasks List :-</div>
        {this.state.tasks.map((task) => {
          return (
            <div
              className="task-container d-flex justify-content-between p-2 m-2"
              key={task.id}
            >
              <div>
                <input
                  type="checkbox"
                  checked={task.check}
                  onChange={() => this.handleCheck(task.id)}
                />
                <label className="ms-2">Mark as completed</label>
              </div>
              <div>
                Task Name : <span className="fw-bold">{task.task}</span>
              </div>
              <div>
                {task.completed ? (
                  <span className="badge text-bg-primary py-2 comp">
                    Complete
                  </span>
                ) : (
                  <span className="badge text-bg-danger py-2 comp">
                    Incomplete
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
