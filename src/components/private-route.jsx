import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { SignInRoute } from '../config/routes';
import useAuth from '../hooks/useAuth';

const PrivateRoute = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to={SignInRoute} />;
};

export default PrivateRoute;
