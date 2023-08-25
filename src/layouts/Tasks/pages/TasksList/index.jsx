import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import TaskList from '../../../../components/TaskList';
import useTasks from '../../../../hooks/useTask';

/**
 * TasksList Component
 * This component displays a list of tasks, along with search functionality and an option to add a new task.
 *
 * @returns {JSX.Element} The JSX element representing the TasksList component.
 */
const TasksList = () => {
  const [taskList, setTaskList] = useState([]);
  const { getTasks } = useTasks();
  const searchRef = useRef();

  useEffect(() => {
    getTasks().then((res) => {
      setTaskList(res);
    });
  }, []);

  /**
   * Handles the search for tasks based on the entered text.
   * @param {Event} event - The form submit event.
   */
  const handleSearch = (event) => {
    event.preventDefault();
    getTasks(searchRef.current.value).then((res) => {
      setTaskList(res);
    });
  };

  return (
    <div className="container-fluid">
      <div className="row g-3">
        <form
          onSubmit={handleSearch}
          className="col-md-4 d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
        >
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              name="search"
              ref={searchRef}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit">
                <i className="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <NavLink
            to="add"
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
      <TaskList taskList={taskList} />
    </div>
  );
};

export default TasksList;
