import React from 'react';
import SubjectForm from '../../../../components/SubjectForm';

const AddSubject = () => {
  const handleAddSubject = ()=>{}
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
