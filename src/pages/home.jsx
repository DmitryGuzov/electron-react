import React from 'react';
import '../app/App.css';
import SidebarWrapper from '../components/sidebar-wrapper';

const HomePage = (props) => {
  return (
    <SidebarWrapper>
      <div className='App'>
        <h2>Home page</h2>
      </div>
    </SidebarWrapper>
  );
};

export default HomePage;
