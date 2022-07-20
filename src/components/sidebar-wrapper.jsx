import React from 'react';
import '../assets/styles/components/sidebar-wrapper.css';
import Sidebar from './sidebar';

const SidebarWrapper = (props) => {
  return (
    <div className='sidebar-wrapper'>
      <Sidebar /> <div className='inner'>{props.children}</div>
    </div>
  );
};

export default SidebarWrapper;
