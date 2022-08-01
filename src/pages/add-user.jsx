import React from 'react';
import SidebarWrapper from '../components/sidebar-wrapper';
import AddUserContainer from '../containers/add-user';

const AddUserPage = (props) => {
  return (
    <SidebarWrapper>
      <h1>Add user page</h1>
      <AddUserContainer />
    </SidebarWrapper>
  );
};

export default AddUserPage;
