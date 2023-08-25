import React from 'react';
import SubjectForm from '../../../../components/SubjectForm';
import useSubjects from '../../../../hooks/useSubject';
import { useNavigate } from 'react-router-dom';

/**
 * AddSubject Component
 * This component provides a form to add a new subject.
 *
 * @returns {JSX.Element} The JSX element representing the AddSubject component.
 */
const AddSubject = () => {
  const { createSubject } = useSubjects();
  const navigate = useNavigate();

  /**
   * Handles the creation of a new subject.
   * @param {object} newSubject - The new subject object to be created.
   */
  const handleAddSubject = (newSubject) => {
    createSubject(newSubject).then((res) => {
      navigate('/subject');
    });
  };

  return (
    <div className="p-5">
      <div className="text-center">
        <h1 className="h4 text-gray-900 mb-4">Add subject</h1>
      </div>
      <SubjectForm actionSubmit={handleAddSubject} />
    </div>
  );
};

export default AddSubject;
