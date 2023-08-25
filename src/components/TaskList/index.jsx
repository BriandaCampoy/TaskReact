import React from 'react';
import TaskItem from '../TaskItem';

/**
 * TaskList Component
 * Renders a list of tasks using the TaskItem component.
 *
 * @param {object[]} taskList - An array of task objects to be displayed.
 * @returns {JSX.Element} The JSX element representing the TaskList component.
 */

const TaskList = ({ taskList }) => {
  return (
    <div className="row m-4">
      <div className="col-lg-12">
        {taskList.map((task) => (
          <TaskItem key={task._id} taskItem={task} />
        ))}
        {taskList.length === 0 && (
          <div>
            <h3>Nothing to show</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
