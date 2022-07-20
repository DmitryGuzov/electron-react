class LocalStorageService {
  // tokens
  setTokens = (access_token, refresh_token = '') => {
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
  };
  setAccessToken = (access_token) => {
    localStorage.setItem('access_token', access_token);
  };
  setRefreshToken = (refresh_token) => {
    localStorage.setItem('refresh_token', refresh_token);
  };
  getAccessToken = () => {
    return localStorage.getItem('access_token');
  };
  getRefreshToken = () => {
    return localStorage.getItem('refresh_token');
  };

  clearTokens = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  };

  // user
  setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  };
  getUser = () => {
    localStorage.getItem('user');
  };
  removeUser = () => {
    localStorage.removeItem('user');
  };

  clearLocalStorage = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
  };
}

export default new LocalStorageService();
