import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useSubjects from '../../../../hooks/useSubject';
import SubjectItem from '../../../../components/SubjectItem';

/**
 * SubjectsList Component
 * This component displays a list of subjects and provides an option to add a new subject.
 *
 * @returns {JSX.Element} The JSX element representing the SubjectsList component.
 */
const SubjectsList = () => {
  const [subjects, setSubjects] = useState([]);
  const { getSubjects } = useSubjects();

  useEffect(() => {
    getSubjects().then((sub) => {
      setSubjects(sub);
    });
  }, []);

  return (
    <>
      <div className="d-flex align-items-center justify-content-left">
        <NavLink
          to={'./add'}
          className="btn btn-primary btn-icon-split"
          type="button"
        >
          <span className="icon text-white-50">
            <i className="fa-solid fa-plus"></i>
          </span>
          <span className="text">Add subject</span>
        </NavLink>
      </div>

      <div className="row m-4">
        <div className="col-lg-12">
          {subjects.map((subject) => (
            <SubjectItem key={subject._id} subjectItem={subject} />
          ))}
          {subjects.length == 0 && (
            <div>
              <h3>Nothing to show</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SubjectsList;
