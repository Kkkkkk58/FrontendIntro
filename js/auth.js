export function isLoggedIn() {
  const token = localStorage.getItem('token');
  if (token) {
    // send token with each request to authenticate user
    // return true if token is valid, false otherwise
    return true;
  } else {
    return false;
  }
}
