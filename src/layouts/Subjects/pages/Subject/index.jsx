import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import useSubjects from '../../../../hooks/useSubject';
import useTasks from '../../../../hooks/useTask';
import ConfirmationModal from '../../../../components/confirmationModal';
import TaskList from '../../../../components/TaskList';

/**
 * Subject Component
 * This component displays detailed information about a specific subject, along with its tasks,
 * and provides options to edit the subject, delete the subject, and add tasks to it.
 *
 * @returns {JSX.Element} The JSX element representing the Subject component.
 */
const Subject = () => {
  const [subject, setSubject] = useState();
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const { getSubject, deleteSubject } = useSubjects();
  const { getTasksBySubject } = useTasks();
  const navigate = useNavigate();

  useEffect(() => {
    getSubject(id).then((sub) => {
      setSubject(sub);
    });
    getTasksBySubject(id).then((t) => {
      setTasks(t);
    });
  }, []);

  /**
   * Display the delete confirmation modal for the subject.
   */
  const askDeleteTask = () => {
    setShowModal(true);
  };

  /**
   * Close the delete confirmation modal.
   */
  const closeModal = () => {
    setShowModal(false);
  };

  /**
   * Handle the deletion of the subject.
   */
  const handleDeleteSubject = () => {
    deleteSubject(id).then((res) => {
      navigate('../');
    });
  };

  if (subject === undefined) {
    return <>Loading...</>;
  } else {
    return (
      <>
        <div className="row">
          <div className="col-lg-6 h3 mb-0 d-flex align-items-center">
            <h1 className="text-gray-800 m-0">{subject.name}</h1>
            <NavLink className="btn btn-pointer" to={`../edit/${subject._id}`}>
              <i
                className="fa-solid fa-pen fa-2xl m-3"
                title="edit subject"
              ></i>
            </NavLink>
            <div onClick={askDeleteTask} className="btn btn-pointer">
              <i
                title="delete subject"
                className="fa-solid fa-trash fa-2xl m-3"
                style={{ color: '#e11414' }}
              ></i>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <NavLink
              to="../../task/add"
              className="btn btn-primary btn-icon-split"
              type="button"
            >
              <span className="icon text-white-50">
                <i className="fa-solid fa-plus"></i>
              </span>
              <span className="text">Add task</span>
            </NavLink>
          </div>
        </div>
        <TaskList taskList={tasks} />
        {showModal && (
          <ConfirmationModal
            title={'Are you sure?'}
            message={'You want to delete this subject and all its tasks?'}
            onClose={closeModal}
            onConfirm={handleDeleteSubject}
          />
        )}
      </>
    );
  }
};

export default Subject;
