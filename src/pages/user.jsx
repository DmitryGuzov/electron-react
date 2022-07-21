import React from 'react';
import UserContainer from '../containers/user';
import SidebarWrapper from '../components/sidebar-wrapper';

const UserPage = (props) => {
  return (
    <SidebarWrapper>
      <div className='user-page'>
        <UserContainer />
      </div>
    </SidebarWrapper>
  );
};

export default UserPage;
