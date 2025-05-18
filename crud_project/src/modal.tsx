import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Props for the TaskModal component
type TaskModalProps = {
  show: boolean; // Controls whether the modal is visible
  handleClose: () => void; // Function to close the modal
  text: string; // Text to display in the modal body
};

// TaskModal component displays a Bootstrap modal dialog
function TaskModal({ show, handleClose, text }: TaskModalProps) {
  return (
    // Modal component from react-bootstrap, controlled by the 'show' prop
    <Modal show={show} onHide={handleClose}>
      {/* Modal header with a close button and title */}
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      {/* Modal body displays the provided text */}
      <Modal.Body>{text}</Modal.Body>
      {/* Modal footer with Close and Save Changes buttons */}
      <Modal.Footer>
        {/* Button to close the modal */}
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {/* Button to save changes and close the modal */}
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TaskModal;