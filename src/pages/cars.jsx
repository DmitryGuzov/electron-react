import React from 'react';
import '../app/App.css';
import SidebarWrapper from '../components/sidebar-wrapper';

import CarsContainer from '../containers/cars';

const CarsPage = () => {
  return (
    <SidebarWrapper>
      <CarsContainer />
    </SidebarWrapper>
  );
};

export default CarsPage;
