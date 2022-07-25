import React from 'react';
import SidebarWrapper from '../components/sidebar-wrapper';
import CarContainer from '../containers/car';

const CarPage = (props) => {
  return (
    <SidebarWrapper>
      <CarContainer />
    </SidebarWrapper>
  );
};

export default CarPage;
