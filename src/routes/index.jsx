import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  AddServiceRoute,
  CarRoute,
  CarsRoute,
  EventsRoute,
  ForgotPasswordRoute,
  HomeRoute,
  InvoicesRoute,
  ServiceRoute,
  ServicesRoute,
  SettingsRoute,
  SignInRoute,
  SignUpRoute,
  UserRoute,
  UsersRoute,
} from '../config/routes';
import {
  SignInPage,
  SignUpPage,
  ForgotPasswordPage,
  HomePage,
  UsersPage,
  UserPage,
  CarsPage,
  CarPage,
  ServicesPage,
  ServicePage,
  SettingsPage,
  AddServicePage,
  EventsPage,
  InvoicesPage,
  AddUserPage,
  AddCarPage,
  EditCarPage,
  EditServicePage,
} from '../pages';

const AppRoutes = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH */}
        <Route path={SignUpRoute} element={<SignUpPage />} />
        <Route path={SignInRoute} element={<SignInPage />} />
        <Route path={UsersRoute} element={<UsersPage />} />
        <Route path={CarsRoute} element={<CarsPage />} />
        <Route path={'/cars/add'} element={<AddCarPage />} />
        <Route path={'/users/add'} element={<AddUserPage />} />
        <Route path={'/cars/:carId/edit'} element={<EditCarPage />} />
        <Route
          path={'/services/:serviceId/edit'}
          element={<EditServicePage />}
        />
        <Route path={CarRoute.template} element={<CarPage />} />
        <Route path={ServicesRoute} element={<ServicesPage />} />
        <Route path={ServiceRoute.template} element={<ServicePage />} />
        <Route path={AddServiceRoute} element={<AddServicePage />} />
        <Route path={UserRoute.template} element={<UserPage />} />
        <Route path={EventsRoute} element={<EventsPage />} />
        <Route path={InvoicesRoute} element={<InvoicesPage />} />
        <Route path={SettingsRoute} element={<SettingsPage />} />
        <Route path={ForgotPasswordRoute} element={<ForgotPasswordPage />} />
        <Route path={HomeRoute} element={<HomePage />} />
        <Route path='*' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
