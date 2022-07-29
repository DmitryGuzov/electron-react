export const SignInRoute = '/signin';
export const SignUpRoute = '/signup';
export const UsersRoute = '/users';
export const CarsRoute = '/cars';
export const CarRoute = {
  template: '/cars/:carId',
  format: (id) => `/cars/${id}`,
};
export const ServicesRoute = '/services';
export const ServiceRoute = {
  template: '/services/:serviceId',
  format: (id) => `/services/${id}`,
};
export const AddServiceRoute = '/services/add';
export const UserRoute = {
  template: '/users/:userId',
  format: (id) => `/users/${id}`,
};
export const SettingsRoute = '/settings';
export const HomeRoute = '/';
export const ForgotPasswordRoute = '/forgot-password';
export const EventsRoute = '/events';
export const InvoicesRoute = '/invoices';
