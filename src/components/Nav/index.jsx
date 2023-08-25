import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import profilePhoto from '../../assets/img/undraw_profile.svg';
import { useAuthContext } from '../../context/useAuthContext';
import toggleSidebar from '../../utils/toggleSidebar';
import ConfirmationModal from '../confirmationModal';

/**
 * Nav Component
 * Renders the top navigation bar with user information and options.
 *
 * @component
 * @returns {JSX.Element} The top navigation bar.
 */
const Nav = () => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { logout } = useAuthContext();

  /**
   * Shows the logout confirmation modal.
   */
  const askLogin = () => {
    setShowModal(true);
  };

  /**
   * Closes the logout confirmation modal.
   */
  const closeModal = () => {
    setShowModal(false);
  };

  /**
   * Handles user logout.
   */
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  /**
   * Toggles the sidebar visibility.
   */
  const onToggleSidebar = () => {
    toggleSidebar();
  };

  /**
   * Toggles the user dropdown options.
   */
  const onToggleDropdown = () => {
    const dropdown = document.querySelector('#dropdown-button');
    const options = document.querySelector('#dropdown-options');
    if (dropdown?.classList.contains('show')) {
      dropdown.classList.remove('show');
      options?.classList.remove('show');
    } else {
      dropdown?.classList.add('show');
      options?.classList.add('show');
    }
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* <!-- Sidebar Toggle (Topbar) --> */}
      <button
        onClick={onToggleSidebar}
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars"></i>
      </button>

      {/* <!-- Topbar Navbar --> */}
      <ul className="navbar-nav ml-auto">
        <div className="topbar-divider d-none d-sm-block"></div>

        {/* <!-- Nav Item - User Information --> */}
        <li className="nav-item dropdown no-arrow">
          <NavLink
            className="nav-link dropdown-toggle"
            // id="userDropdown"
            onClick={onToggleDropdown}
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            id="dropdown-button"
          >
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              {user.name}
            </span>
            <img className="img-profile rounded-circle" src={profilePhoto} />
          </NavLink>
          {/* <!-- Dropdown - User Information --> */}
          <div
            className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            id="dropdown-options"
            aria-labelledby="userDropdown"
          >
            <NavLink className="dropdown-item" to="profile">
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              Profile
            </NavLink>
            <div className="dropdown-divider"></div>
            <button
              className="dropdown-item"
              onClick={askLogin}
              data-toggle="modal"
              data-target="#logoutModal"
            >
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Logout
            </button>
          </div>
        </li>
      </ul>
      {showModal && (
        <ConfirmationModal
          title={'Are you sure?'}
          message={'You want to logout?'}
          onClose={closeModal}
          onConfirm={handleLogout}
        />
      )}
    </nav>
  );
};

export default Nav;
