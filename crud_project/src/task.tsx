// Props for the TaskButton component
type TaskButtonProps = {
  tasks: { id: string, name: string }; // Task object with id and name
  onSelect: (id: string) => void;      // Function to handle task selection
  fullWidth?: boolean; // Optional prop to make the button full width
};

// TaskButton component displays a button for a single task
export default function TaskButton({ tasks, onSelect, fullWidth }: TaskButtonProps) {
  // Handles the button click event and calls onSelect with the task's id
  const handleButtonClick = () => {
    onSelect(tasks.id);
  };

  return (
    // Container for the task button
    <div className="task-button">
      {/* Button displays the task name and triggers selection on click */}
      <button
        className={`btn btn-primary${fullWidth ? " w-100" : ""}`}
        onClick={handleButtonClick}
      >
        {tasks.name}
      </button>
    </div>
  );
}

