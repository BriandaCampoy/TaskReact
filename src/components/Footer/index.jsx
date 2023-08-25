import React from 'react';

/**
 * Footer Component
 * Displays the website footer with copyright information.
 *
 * @component
 * @returns {JSX.Element} Renders the footer section with copyright information.
 */
const Footer = () => {
  return (
    <footer className="sticky-footer bg-white">
      <div className="container my-auto">
        <div className="copyright text-center my-auto">
          <span>Copyright &copy; Your Website 2021</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
