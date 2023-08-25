import React from 'react';

/**
 * ConfirmationModal Component
 * Renders a modal dialog for displaying a confirmation prompt with a title, message, and buttons for confirmation and cancellation.
 *
 * @component
 * @param {string} title - The title of the confirmation dialog.
 * @param {string} message - The message displayed in the confirmation dialog.
 * @param {function} onClose - Callback function to handle modal close action.
 * @param {function} onConfirm - Callback function to handle confirmation action.
 * @returns {JSX.Element} Renders a modal dialog for confirmation.
 */

const ConfirmationModal = ({ title, message, onClose, onConfirm }) => {
  const modalStyle = {
    display: 'block',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  };

  return (
    <div className="modal" style={modalStyle}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={onConfirm}
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
