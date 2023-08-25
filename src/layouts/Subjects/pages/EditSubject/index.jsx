import React from 'react';
import SubjectForm from '../../../../components/SubjectForm';

const EditSubject = () => {
  const handleUpdate = () => {};
  return (
    <div className="p-5">
      <div className="text-center">
        <h1 className="h4 text-gray-900 mb-4">Edit subject</h1>
      </div>
      <SubjectForm actionSubmit={handleUpdate} />
    </div>
  );
};

export default EditSubject;
