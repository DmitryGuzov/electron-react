import React from 'react';
import '../app/App.css';
import SidebarWrapper from '../components/sidebar-wrapper';

import UsersContainer from '../containers/users';

const UsersPage = () => {
  return (
    <SidebarWrapper>
      <UsersContainer />
    </SidebarWrapper>
  );
};

export default UsersPage;
