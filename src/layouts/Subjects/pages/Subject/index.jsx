import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import TaskItem from '../../../../components/TaskItem';
import useSubjects from '../../../../hooks/useSubject';
import useTasks from '../../../../hooks/useTask';

const Subject = () => {
  const [subject, setSubject] = useState();
  const [tasks, setTasks] = useState([]);
  const { id } = useParams();
  const { getSubject } = useSubjects();
  const { getTasksBySubject } = useTasks();

  useEffect(() => {
    getSubject(id).then((sub) => {
      setSubject(sub);
    });
    getTasksBySubject(id).then((t) => {
      setTasks(t);
    });
  }, []);

  const onDelete = () => {};

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
            <div className="btn btn-pointer">
              <i
                onClick={onDelete}
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
        {tasks.map((task) => (
          <TaskItem key={task._id} taskItem={task} />
        ))}
      </>
    );
  }
};

export default Subject;
