import React from 'react';
import Aside from '../../components/Aside';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Outlet } from 'react-router-dom';
import Auth from '../../components/HOC/Auth';

/**
 * Home Component
 * This component represents the main layout of the application's home page.
 * It includes the navigation elements, main content area, and footer.
 *
 * @returns {JSX.Element} The JSX element representing the Home component.
 */
const Home = () => {
  return (
    <Auth>
      <div id="wrapper">
        <Aside />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Nav />
            <div className="container-fluid">
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </Auth>
  );
};

export default Home;
