import React, { useEffect, useRef, useState } from 'react';
import useSubjects from '../../hooks/useSubject';

const TaskForm = ({ actionSubmit, task }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formTask = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      subject: subjectRef.current.value,
      type: typeRef.current.value
    };
    if(deadlineRef.current.value!==''){
      formTask.deadline = deadlineRef.current.value;
    }
    actionSubmit(formTask);
  };
  const { getSubjects } = useSubjects();
  const [subjects, setSubjects] = useState([]);

  const titleRef = useRef();
  const descriptionRef = useRef();
  const subjectRef = useRef();
  const deadlineRef = useRef();
  const typeRef = useRef();

  useEffect(() => {
    getSubjects().then((res) => {
      setSubjects(res);
    });
    if (task != undefined) {
      descriptionRef.current.value = task.description;
      subjectRef.current.value = task.subject._id;
      titleRef.current.value = task.title;
      deadlineRef.current.value = new Date(task.deadline);
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
          ref={subjectRef}
          required
        >
          {subjects.map((sub) => (
            <option key={sub._id} value={sub._id}>
              {sub.name}
            </option>
          ))}
          {/* <option *ngFor="let subjectOption of subjectsOptions" value={{subjectOption._id}}>{{subjectOption.name}}</option> */}
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
            // [(ngModel)]="task.deadline"
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
