import React, { useState } from 'react';
import useTasks from '../../hooks/useTask';

/**
 * DoneCheck Component
 * Renders a checkbox-like element to mark a task as done or undone.
 *
 * @component
 * @param {string} id - The ID of the task.
 * @param {boolean} doneStatus - The status of whether the task is done or not.
 * @returns {JSX.Element} Renders a checkbox-like element to mark tasks as done or undone.
 */
const DoneCheck = ({ id, doneStatus }) => {
  const { updateTask } = useTasks();
  const [done, setDone] = useState(doneStatus);

  /**
   * Handle task done event
   * Updates the task's done status when clicked.
   *
   * @param {Event} event - The click event.
   */
  const onDone = (event) => {
    event.stopPropagation();
    if (!done) {
      setDone(true);
      const taskDone = {
        done: true
      };
      updateTask(id, taskDone).then((res) => {});
    }
  };

  return (
    <>
      {done && (
        <div onClick={onDone} className="col-auto btn pointer">
          <i
            className="fa-solid fa-check fa-2xl"
            style={{ color: '#4dff00' }}
          ></i>
        </div>
      )}
      {done === false && (
        <div onClick={onDone} className="col-auto btn pointer">
          <i className="fa-solid fa-check fa-2xl"></i>
        </div>
      )}
    </>
  );
};

export default DoneCheck;
