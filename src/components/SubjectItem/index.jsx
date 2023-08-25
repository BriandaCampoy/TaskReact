import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubjectItem = ({subjectItem}) => {
  const navigate = useNavigate();
  const toSubject = () => {
    navigate(`/subject/${subjectItem._id}`);
  };

  return (
    <button
      style={{ backgroundColor: subjectItem.color }}
      //  [style.background]="subjectItem.color"
      onClick={toSubject}
      className="card mb-4 py-3 text-decoration-none w-100"
    >
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className="h5 mb-0 font-weight-bold subject-text">
              {subjectItem.name}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default SubjectItem;
