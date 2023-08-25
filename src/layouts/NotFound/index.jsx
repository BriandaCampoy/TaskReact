import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * NotFound Component
 * This component is displayed when the user navigates to a non-existent route,
 * indicating that the requested page or resource could not be found.
 *
 * @returns {JSX.Element} The JSX element representing the NotFound component.
 */
const NotFound = () => {
  return (
    <div id="wrapper">
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <div className="text-center">
              <div className="error mx-auto" data-text="404">
                404
              </div>
              <p className="lead text-gray-800 mb-5">Page Not Found</p>
              <p className="text-gray-500 mb-0">
                It looks like you found a glitch in the matrix...
              </p>
              <NavLink to={'/'}>&larr; Back to Home</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
