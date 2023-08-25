import { useCookies } from 'react-cookie';

/**
 * useToken Custom Hook
 * This hook manages the user authentication token using cookies.
 *
 * @returns {object} An object containing functions for managing the token.
 */
const useToken = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  /**
   * getToken Function
   * Retrieves the authentication token from cookies.
   *
   * @returns {string | undefined} The authentication token if present, otherwise undefined.
   */
  const getToken = () => {
    return cookies.token;
  };

  /**
   * saveToken Function
   * Saves the authentication token in cookies.
   *
   * @param {string} token - The authentication token to be saved.
   */
  const saveToken = (token) => {
    setCookie('token', token);
  };

  /**
   * removeToken Function
   * Removes the authentication token from cookies.
   */
  const removeToken = () => {
    removeCookie('token');
  };

  return { getToken, saveToken, removeToken };
};

export default useToken;
