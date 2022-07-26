import React from 'react';
import '../app/App.css';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { SignInRoute, SignUpRoute } from '../config/routes';
import SidebarWrapper from '../components/sidebar-wrapper';
import SettingsContainer from '../containers/settings';

const SettingsPage = (props) => {
  return (
    <SidebarWrapper>
      <h2>Settings page</h2>
      <SettingsContainer />
    </SidebarWrapper>
  );
};

export default SettingsPage;
