import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../../context/useAuthContext';
import profilePhoto from '../../assets/img/undraw_profile.svg';
import useSubjects from '../../hooks/useSubject';
import SubjectItem from '../../components/SubjectItem';

/**
 * Profile Component
 * This component displays the user's profile information, including their name, email,
 * profile photo, and the list of subjects they are associated with.
 *
 * @returns {JSX.Element} The JSX element representing the Profile component.
 */
const Profile = () => {
  const { user } = useAuthContext();
  const { getSubjects } = useSubjects();
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    getSubjects().then((res) => {
      setSubjects(res);
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-4 col-lg-5">
          <img src={profilePhoto} className="img-profile rounded-circle" />
        </div>
        <div className="col-xl-8 col-lg-7">
          <div className="container-fluid">
            <h1>{user?.name}</h1>
            <h3>{user?.email}</h3>
          </div>
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Subjects</h1>
            </div>
            <div className="row">
              {subjects.map((sub) => (
                <SubjectItem key={sub._id} subjectItem={sub} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
