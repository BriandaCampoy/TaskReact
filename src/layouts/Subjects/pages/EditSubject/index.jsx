import React, { useEffect, useState } from 'react';
import SubjectForm from '../../../../components/SubjectForm';
import { useNavigate, useParams } from 'react-router-dom';
import useSubjects from '../../../../hooks/useSubject';

/**
 * EditSubject Component
 * This component provides a form to edit an existing subject.
 *
 * @returns {JSX.Element} The JSX element representing the EditSubject component.
 */
const EditSubject = () => {
  const { id } = useParams();
  const [subject, setSubject] = useState();
  const { getSubject, updateSubject } = useSubjects();
  const navigate = useNavigate();

  useEffect(() => {
    getSubject(id).then((sub) => {
      setSubject(sub);
    });
  }, []);

  /**
   * Handle the update of the subject.
   * @param {object} updSub - The updated subject object.
   */
  const handleUpdate = (updSub) => {
    updateSubject(id, updSub).then((res) => {
      navigate(`/subject/${id}`);
    });
  };

  return (
    <div className="p-5">
      <div className="text-center">
        <h1 className="h4 text-gray-900 mb-4">Edit subject</h1>
      </div>
      <SubjectForm subject={subject} actionSubmit={handleUpdate} />
    </div>
  );
};

export default EditSubject;
