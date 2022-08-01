import React from 'react';
import SidebarWrapper from '../components/sidebar-wrapper';
import EditServiceContainer from '../containers/edit-service';

const EditServicePage = (props) => {
  return (
    <SidebarWrapper>
      <h1>Edit Service page</h1>
      <EditServiceContainer />
    </SidebarWrapper>
  );
};

export default EditServicePage;
