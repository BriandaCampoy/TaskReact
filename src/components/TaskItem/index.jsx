import React from 'react';
import { useNavigate } from 'react-router-dom';
import DoneCheck from '../DoneCheck';

const TaskItem = ({ taskItem }) => {
  const navigation = useNavigate();
  const borderBottomStyle = {
    borderBottom: `0.25rem solid ${taskItem.subject.color}`
  };
  const colorStyle = {
    color: taskItem.subject.color
  };

  const textDecorationStyle = {
    textDecoration: taskItem.done ? 'line-through' : 'none'
  };

  const onSeeDetails = () => {
    navigation(`/task/${taskItem._id}`);
  };

  return (
    <div
      onClick={onSeeDetails}
      style={borderBottomStyle}
      className="card mb-4 py-3"
    >
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div
              style={colorStyle}
              className="text-xs font-weight-bold text-uppercase mb-1"
            >
              {taskItem.subject.name}
            </div>
            <div
              style={textDecorationStyle}
              className="h5 mb-0 font-weight-bold text-gray-800"
            >
              {taskItem.title}
            </div>
          </div>
          <DoneCheck id={taskItem._id} doneStatus={taskItem.done} />
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
