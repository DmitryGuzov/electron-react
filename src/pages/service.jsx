import React from 'react';
import SidebarWrapper from '../components/sidebar-wrapper';
import ServiceContainer from '../containers/service';

const CarPage = (props) => {
  return (
    <SidebarWrapper>
      <ServiceContainer />
    </SidebarWrapper>
  );
};

export default CarPage;
