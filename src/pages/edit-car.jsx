import React from 'react';
import SidebarWrapper from '../components/sidebar-wrapper';
import EditCarContainer from '../containers/edit-car';

const EditCarPage = (props) => {
  return (
    <SidebarWrapper>
      <h1>Edit car page</h1>
      <EditCarContainer />
    </SidebarWrapper>
  );
};

export default EditCarPage;
