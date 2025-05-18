import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { testTasks as initialTasks } from "./data";
import Sidebar from "./sidebar";
import Toolbar from "./toolbar";
import TaskView from "./taskdisplay";
import TaskModal from "./modal";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  // State for the list of tasks
  const [tasks, setTasks] = useState(initialTasks);
  // State to control the visibility of the modal
  const [showModal, setShowModal] = useState(false);
  // State for the text displayed in the modal
  const [modalText, setModalText] = useState("Add Task");
  // State for the currently selected task's id
  const [selectedTask, setSelectedTask] = useState<string | null>(null);

  // Handles toolbar actions: add, delete, or complete a task
  const handleTask = (text: string) => {
    if (text.startsWith("Add")) {
      // Add a new task to the tasks array
      const newTask = { id: uuidv4(), name: "New Task", complete: false };
      setTasks((prev) => [...prev, newTask]);
    } else if (text.startsWith("Delete")) {
      // Delete the selected task by id
      setTasks((prev) => prev.filter(task => task.id !== selectedTask));
      setSelectedTask(null); // Clear selection after deletion
    } else if (text.startsWith("Task marked as complete!")) {
      // Toggle the complete status of the selected task
      setTasks((prev) =>
        prev.map(task =>
          task.id === selectedTask ? { ...task, complete: !task.complete } : task
        )
      );
    }
    // Set the modal text and show the modal
    setModalText(text);
    setShowModal(true);
  };

  // Closes the modal
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      {/* Toolbar for task actions (add, delete, complete) */}
      <div>
        <Toolbar onTask={handleTask} canDelete={!!selectedTask} />
      </div>
      <div className="d-flex">
        {/* Sidebar displays the list of tasks and allows selection */}
        <Sidebar onSelect={setSelectedTask} tasks={tasks} />
        {/* TaskView displays details of the selected task */}
        <TaskView task={tasks.find(task => task.id === selectedTask) || null} />
      </div>
      {/* TaskModal displays feedback or prompts for actions */}
      <TaskModal
        show={showModal}
        handleClose={handleCloseModal}
        text={modalText}
      /> 
    </div>
  );
}