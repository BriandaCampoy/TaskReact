import React, { useEffect, useRef, useState } from 'react';
import useSubjects from '../../hooks/useSubject';
import DateFormaterInput from '../../utils/DateFormaterInput';

/**
 * TaskForm Component
 * Renders a form to create or update a task.
 *
 * @param {function} actionSubmit - Callback function for submitting the form.
 * @param {object} task - Task object for pre-filling form fields when editing.
 * @returns {JSX.Element} The JSX element representing the TaskForm component.
 */
const TaskForm = ({ actionSubmit, task }) => {
  /**
   * Handles the form submission event.
   * Collects input values, constructs a task object, and invokes the actionSubmit callback.
   * @param {Event} event - The form submission event.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    const formTask = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      subject:sub,
      type: typeRef.current.value
    };
    if (deadlineRef.current.value !== '') {
      formTask.deadline = deadlineRef.current.value;
    }
    actionSubmit(formTask);
  };
  const { getSubjects } = useSubjects();
  const [subjects, setSubjects] = useState([]);

  const titleRef = useRef();
  const descriptionRef = useRef();
  const deadlineRef = useRef();
  const typeRef = useRef();
  const [sub, setSub] = useState();

  const handleSubChange = (event)=>{
    setSub(event.target.value)
  }

  useEffect(() => {
    getSubjects().then((res) => {
      setSubjects(res);
    });
    if (task != undefined) {
      descriptionRef.current.value = task.description;
      titleRef.current.value = task.title;
      deadlineRef.current.value = DateFormaterInput(task.deadline);
      setSub(task.subject._id)
      typeRef.current.value = task.type;
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className="user">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="InputTitle"
          placeholder="Title"
          name="title"
          required
          ref={titleRef}
        />
      </div>
      <div className="form-group">
        <textarea
          style={{ resize: 'none' }}
          className="form-control"
          id="InputDescription"
          ref={descriptionRef}
          placeholder="Description"
          name="Description"
        ></textarea>
      </div>
      <div className="form-group">
        <select
          className="form-control form-select"
          id="InputSubject"
          placeholder="Subject"
          name="Subject"
          // ref={subjectRef}
          value={sub}
          onChange={handleSubChange}
          required
        >
          {subjects.map((sub) => (
            <option key={sub._id} value={sub._id}>
              {sub.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <input
            type="date"
            className="form-control"
            id="InputDeadline"
            placeholder="Deadline"
            name="deadline"
            ref={deadlineRef}
            required
          />
        </div>
        <div className="col-sm-6">
          <select
            className="form-control form-select"
            id="type"
            required
            name="type"
            ref={typeRef}
          >
            <option value="homework">Homework</option>
            <option value="project">Project</option>
          </select>
        </div>
      </div>
      <button type="submit" className="btn btn-primary btn-user btn-block">
        Save
      </button>
    </form>
  );
};

export default TaskForm;
