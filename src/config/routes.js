export const SignInRoute = '/signin';
export const SignUpRoute = '/signup';
export const UsersRoute = '/users';
export const UserRoute = {
  template: '/users/:userId',
  format: (id) => `/users/${id}`,
};
export const SettingsRoute = '/settings';
export const HomeRoute = '/';
export const ForgotPasswordRoute = '/forgot-password';
