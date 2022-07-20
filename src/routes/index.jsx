import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../components/private-route';
import {
  ForgotPasswordRoute,
  HomeRoute,
  SettingsRoute,
  SignInRoute,
  SignUpRoute,
  UserRoute,
  UsersRoute,
} from '../config/routes';
import ForgotPasswordPage from '../pages/forgot-password';
import HomePage from '../pages/home';
import SettingsPage from '../pages/settings';
import SignInPage from '../pages/sign-in';
import SignUpPage from '../pages/sign-up';
import UserPage from '../pages/user';
import UsersPage from '../pages/users';

const AppRoutes = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH */}
        <Route path={SignUpRoute} element={<SignUpPage />} />
        <Route path={SignInRoute} element={<SignInPage />} />
        <Route path={UsersRoute} element={<UsersPage />} />
        <Route path={UserRoute.template} element={<UserPage />} />
        <Route path={SettingsRoute} element={<SettingsPage />} />
        <Route path={ForgotPasswordRoute} element={<ForgotPasswordPage />} />
        <Route path={HomeRoute} element={<HomePage />} />
        <Route path='*' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
