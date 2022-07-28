import React from 'react';
import SidebarWrapper from '../components/sidebar-wrapper';
import AddServiceContainer from '../containers/add-service';

const AddServicePage = (props) => {
  return (
    <SidebarWrapper>
      <h1>Add service page</h1>
      <AddServiceContainer />
    </SidebarWrapper>
  );
};

export default AddServicePage;
