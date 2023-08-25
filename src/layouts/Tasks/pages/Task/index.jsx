import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import useTasks from '../../../../hooks/useTask';
import DateFormatter from '../../../../utils/DateFormater';
import ConfirmationModal from '../../../../components/confirmationModal';
import DoneCheck from '../../../../components/DoneCheck';

const Task = () => {
  const { id } = useParams();
  const [taskItem, setTaskItem] = useState();
  const { getTask, deleteTask } = useTasks();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getTask(id).then((task) => {
      setTaskItem(task);
    });
  }, []);

  const askDeleteTask = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDeleteTask = () => {
    deleteTask(id).then((res) => {
      navigate('../');
    });
  };

  if (taskItem === undefined) {
    return <>Loading...</>;
  } else {
    return (
      <div
        style={{ borderLeft: '0.25rem solid ' + taskItem.subject?.color }}
        className="card mb-4"
      >
        <div className="card-header">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className="text-xs font-weight-bold text-uppercase mb-1"
                style={{ color: taskItem.subject?.color }}
              >
                {taskItem.subject?.name}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {taskItem.title}
              </div>
            </div>
            <DoneCheck id={id} doneStatus={taskItem.done} />
            <div onClick={askDeleteTask} className="col-auto btn pointer">
              <i
                className="fa-solid fa-trash fa-2xl m-3"
                style={{ color: ' #e11414' }}
              ></i>
            </div>
            <NavLink
              className="col-auto btn pointer"
              to={`../edit/${taskItem._id}`}
            >
              <i className="fa-solid fa-pen fa-2xl m-3"></i>
            </NavLink>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 text-center">
              Deadline: {DateFormatter(taskItem.deadline)}
            </div>
            <div className="col-lg-6 text-center">{taskItem.type}</div>
          </div>
          {taskItem.description}
        </div>
        {showModal && (
          <ConfirmationModal
            title={'Are you sure?'}
            message={'You want to delete this task?'}
            onClose={closeModal}
            onConfirm={handleDeleteTask}
          />
        )}
      </div>
    );
  }
};

export default Task;
