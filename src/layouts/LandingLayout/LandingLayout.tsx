import React from 'react';
import { Outlet } from 'react-router-dom';

import Page from '../../components/UI/Page/Page';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import './_landingLayout.scss';

const LandingLayout: React.FC = () => {
  return (
    <Page className="landing">
      <Header className="landing__header">
        <Navbar />
      </Header>
      <div className="landing__main">
        <Outlet />
      </div>
      <Footer className="landing__footer">Footer</Footer>
    </Page>
  );
};

export default LandingLayout;
