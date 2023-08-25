import React from 'react';
import Aside from '../../components/Aside';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Outlet } from 'react-router-dom';
import Auth from '../../components/HOC/Auth';

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
