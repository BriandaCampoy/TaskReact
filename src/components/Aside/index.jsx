import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import toggleSidebar from '../../utils/toggleSidebar';

/**
 * Aside Component
 * Renders the sidebar navigation for the application.
 *
 * @component
 * @returns {JSX.Element} Renders the sidebar navigation.
 */
const Aside = () => {
  const onToggleSidebar = () => {
    toggleSidebar();
  };

  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <NavLink
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to={'/'}
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <FontAwesomeIcon icon="fa-solid fa-cat" size="2xl" />
        </div>
        <div className="sidebar-brand-text mx-3">Homeworks app</div>
      </NavLink>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <NavLink className="nav-link" to={'/'}>
          <i className="fa-solid fa-bars-progress"></i>
          <span>Homeworks</span>
        </NavLink>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Tasks</div>

      <li className="nav-item">
        <NavLink
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
          className="nav-link collapsed"
          to={'/task'}
        >
          <i className="fa-solid fa-list-check"></i>
          <span>See Task</span>
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
          className="nav-link collapsed"
          to={'/task/add'}
        >
          <i className="fa-solid fa-plus"></i>

          <span>Add Task</span>
        </NavLink>
      </li>

      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Subjects</div>

      <li className="nav-item">
        <NavLink
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
          className="nav-link collapsed"
          to={'/subject'}
        >
          <i className="fa-solid fa-book"></i>
          <span>See Subjects</span>
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
          className="nav-link collapsed"
          to={'/subject/add'}
        >
          <i className="fa-solid fa-plus"></i>

          <span>Add Subjects</span>
        </NavLink>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Profile</div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li className="nav-item">
        <NavLink
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
          className="nav-link collapsed"
          to={'/profile'}
        >
          <i className="fa-solid fa-user"></i>
          <span>See profile</span>
        </NavLink>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />

      {/* <!-- Sidebar Toggler (Sidebar) --> */}
      <div className="text-center d-none d-md-inline">
        <button
          onClick={onToggleSidebar}
          id="sidebarToggle"
          className="rounded-circle border-0"
        ></button>
      </div>
    </ul>
  );
};

export default Aside;
