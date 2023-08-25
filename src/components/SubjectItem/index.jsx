import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * SubjectItem Component
 * Renders a button representing a subject, allowing navigation to the subject's details.
 *
 * @component
 * @param {Object} subjectItem - The subject object to be displayed.
 * @returns {JSX.Element} A button representing a subject.
 */
const SubjectItem = ({ subjectItem }) => {
  const navigate = useNavigate();

  /**
   * Navigates to the subject details page when the button is clicked.
   */
  const toSubject = () => {
    navigate(`/subject/${subjectItem._id}`);
  };

  return (
    <button
      style={{ backgroundColor: subjectItem.color }}
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
