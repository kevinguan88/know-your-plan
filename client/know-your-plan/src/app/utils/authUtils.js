// utils/authUtils.js
import Cookie from 'js-cookie';

/**
 * Function to get the JWT token from cookies.
 * @returns {string|null} The JWT token or null if not found.
 */
export const getToken = () => {
  return Cookie.get('token');
};

/**
 * Function to set the JWT token in cookies.
 * @param {string} token - The JWT token to store.
 */
export const setToken = (token) => {
  Cookie.set('token', token, { expires: 1, secure: true, sameSite: 'Strict' });
};

/**
 * Function to remove the JWT token from cookies.
 */
export const removeToken = () => {
  Cookie.remove('token');
};

export default { getToken, setToken, removeToken };