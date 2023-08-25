import React from 'react';

const SubjectForm = ({actionSubmit}) => {
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit} className="user">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="InputTitle"
          placeholder="Name"
          name="subject-name"
          required
          // [(ngModel)]="subjectItem.name"
        />
      </div>
      <div className="form-group">
        <input
          type="color"
          className="form-control"
          id="InputColor"
          placeholder="Color"
          name="Color"
          // [(ngModel)]="subjectItem.color"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-user btn-block">
        Save subject
      </button>
    </form>
  );
};

export default SubjectForm;
