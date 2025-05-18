export function AddTask() {
    return (
      <div className="toolbar align-items-center d-flex justify-content-center border-bottom border-2 border-dark p-1 bg-secondary.bg-gradient">
        <button className="btn btn-primary m-3">Add Task</button>
        <button className="btn btn-danger m-3">Delete Task</button>
        <button className="btn btn-success m-3">Complete Task</button>
      </div>
    );
  }

export function DeleteTask() {
    return (
      <div className="toolbar align-items-center d-flex justify-content-center border-bottom border-2 border-dark p-1 bg-secondary.bg-gradient">
        <button className="btn btn-danger m-3">Delete Task</button>
      </div>
    );
  }

export function EditTask() {
    return (
        <button className="btn btn-success m-3">Complete Task</button>
    );
  }