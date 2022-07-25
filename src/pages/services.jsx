import React from 'react';
import '../app/App.css';
import SidebarWrapper from '../components/sidebar-wrapper';

import ServicesContainer from '../containers/services';

const ServicesPage = () => {
  return (
    <SidebarWrapper>
      <ServicesContainer />
    </SidebarWrapper>
  );
};

export default ServicesPage;
