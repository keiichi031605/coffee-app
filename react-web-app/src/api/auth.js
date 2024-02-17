export const getToken = () => {
  return localStorage.getItem('jwt');
};

export const isLoggedIn = () => {
  const token = getToken();
  return !!token;
};
