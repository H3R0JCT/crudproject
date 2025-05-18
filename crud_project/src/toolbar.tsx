type ToolbarProps = {
  onTask: (text: string) => void; // Function to handle toolbar actions (add, delete, complete)
  canDelete: boolean; // Determines if the Delete button should be enabled
};

export default function Toolbar({ onTask, canDelete }: ToolbarProps) {
  return (
    // Toolbar container with styling for alignment and background
    <div className="toolbar align-items-center d-flex justify-content-center border-bottom border-2 border-dark p-1 bg-secondary bg-gradient">
      {/* Add Task button: triggers onTask with add message */}
      <button
        className="btn btn-primary m-3"
        onClick={() => onTask('Added a new task successfully!')}
      >
        Add Task
      </button>
      {/* Delete Task button: triggers onTask with delete message, disabled if no task is selected */}
      <button
        className="btn btn-danger m-3"
        onClick={() => onTask('Delete a task here!')}
        disabled={!canDelete}
      >
        Delete Task
      </button>
      {/* Complete Task button: triggers onTask with complete message */}
      <button
        className="btn btn-success m-3"
        onClick={() => onTask('Task marked as complete!')}
      >
        Complete Task
      </button>
    </div>
  );
}