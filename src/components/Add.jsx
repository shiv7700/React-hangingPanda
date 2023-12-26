import React from "react";

export default class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      task: [],
      searchValid: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.remove = this.remove.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.edit = this.edit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.trim() === "") {
      this.setState({ text: "" });
      alert("text is empty , please enter text 🥺🥺🥺");
      this.setState({ searchValid: true });
      return;
    }
    this.setState({ searchValid: false });
    this.setState({ text: "" });
    const newTask = {
      id: this.randomNumber(),
      taskName: this.state.text,
      status: false,
    };
    this.setState({ task: [...this.state.task, newTask] });
  }

  remove(elementID) {
    const newResult = this.state.task.filter((e) => e.id !== elementID);
    this.setState({ task: newResult });
  }

  handleCheckboxChange(elementID) {
    const updatedTasks = this.state.task.map((task) =>
      task.id === elementID ? { ...task, status: !task.status } : task
    );
    this.setState({ task: updatedTasks });
  }

  edit(elementID) {
    const updatedElement = this.state.task.map((e) =>
      e.id === elementID
        ? { id: elementID, taskName: "updated", status: false }
        : e
    );
    this.setState({ task: updatedElement });
  }

  randomNumber = () => {
    // const random = Math.floor(Math.random() * 10000000000);
    const randomNumber = Date.now();
    return randomNumber;
  };

  render() {
    return (
      <div className="mt-4 ms-3">
        {/* form for taking input */}
        <form onSubmit={this.handleSubmit}>
          <label className="me-3">Add Another Task - </label>
          <input
            value={this.state.text}
            onChange={this.handleChange}
            type="text"
            placeholder="enter new task ..."
            className="p-1 input-value rounded-3"
            style={{
              border: this.state.searchValid
                ? "2px solid red"
                : "2px solid black",
            }}
          />
          <input
            type="submit"
            value="add task"
            className="py-1 px-2 ms-4 submit-btn rounded-3"
          />
        </form>

        {/* error if search is empty */}
        {/* {this.state.searchValid ? <div>error</div> : ""} */}
        {this.state.searchValid && (
          <div className="text-danger fw-bold p-0 m-0">
            text is empty please enter text 🥺🥺🥺
          </div>
        )}

        {/* container to show result */}
        <div className="d-flex justify-content-center">
          <div className="result">
            {this.state.task.map((element) => {
              return (
                <div
                  key={element.id}
                  className="d-flex task justify-content-between px-3 py-2 m-3 rounded-4"
                  style={{ backgroundColor: element.status ? "#ff000047" : "" }}
                >
                  <div>
                    <div className="checkbox-wrapper-46">
                      <input
                        className="inp-cbx"
                        id={element.id}
                        type="checkbox"
                        checked={element.status}
                        onChange={() => this.handleCheckboxChange(element.id)}
                      />
                      <label className="cbx" htmlFor={element.id}>
                        <span>
                          <svg width="12px" height="10px" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </svg>
                        </span>
                        <span>Mark As Completed</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    Task Name :{" "}
                    {element.status ? (
                      <span
                        className="fw-bold"
                        style={{
                          color: "red",
                          textDecorationLine: "line-through",
                        }}
                      >
                        {element.taskName}
                      </span>
                    ) : (
                      <span className="fw-bold">{element.taskName}</span>
                    )}
                  </div>
                  <div>
                    Status :{" "}
                    {element.status ? (
                      <span className="badge bg-primary p-2">Completed</span>
                    ) : (
                      <span className="badge bg-danger p-2">Incomplete</span>
                    )}
                  </div>
                  <div>
                    <span
                      onClick={() => this.remove(element.id)}
                      className="badge bg-success remove p-2"
                    >
                      Remove Task
                    </span>
                  </div>
                  <div>
                    <span
                      className="badge bg-success remove p-2"
                      onClick={() => this.edit(element.id)}
                    >
                      Edit Task
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
