import React, { useEffect, useRef } from 'react';

/**
 * SubjectForm Component
 * Renders a form for creating or editing a subject.
 *
 * @component
 * @param {Object} props - The props passed to the component.
 * @param {Function} props.actionSubmit - The function to be executed when the form is submitted.
 * @param {Object} [props.subject] - The subject object to be edited, if applicable.
 * @returns {JSX.Element} A form for creating or editing a subject.
 */
const SubjectForm = ({ actionSubmit, subject }) => {
  const nameRef = useRef();
  const colorRef = useRef();

  /**
   * Handles the form submission by creating or updating a subject.
   * @param {Event} event - The form submission event.
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    const subjectForm = {
      color: colorRef.current.value,
      name: nameRef.current.value
    };

    actionSubmit(subjectForm);
  };

  useEffect(() => {
    if (subject !== undefined) {
      (nameRef.current.value = subject.name),
        (colorRef.current.value = subject.color);
    }
  });

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
          ref={nameRef}
        />
      </div>
      <div className="form-group">
        <input
          type="color"
          className="form-control"
          id="InputColor"
          placeholder="Color"
          name="Color"
          ref={colorRef}
        />
      </div>
      <button type="submit" className="btn btn-primary btn-user btn-block">
        Save subject
      </button>
    </form>
  );
};

export default SubjectForm;
