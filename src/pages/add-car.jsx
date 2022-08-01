import React from 'react';
import SidebarWrapper from '../components/sidebar-wrapper';
import AddCarContainer from '../containers/add-car';

const AddCarPage = (props) => {
  return (
    <SidebarWrapper>
      <h1>Add car page</h1>
      <AddCarContainer />
    </SidebarWrapper>
  );
};

export default AddCarPage;
