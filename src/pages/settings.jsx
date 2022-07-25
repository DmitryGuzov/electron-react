import React from 'react';
import '../app/App.css';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { SignInRoute, SignUpRoute } from '../config/routes';
import SidebarWrapper from '../components/sidebar-wrapper';

const SettingsPage = (props) => {
  return (
    <SidebarWrapper>
      <h2>Settings page</h2>
    </SidebarWrapper>
  );
};

export default SettingsPage;
