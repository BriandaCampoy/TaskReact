import { createContext, useContext, useEffect, useState } from 'react';
import authService from '../services/AuthService';
import useToken from '../hooks/useToken';

/**
 * AuthContext
 * A context to manage authentication state and user information.
 */
const AuthContext = createContext();

/**
 * AuthProvider Component
 * Provides authentication-related functions and user information to its children.
 *
 * @param {object} children - The child components wrapped by AuthProvider.
 */
const AuthProvider = ({ children }) => {
  const { getToken, saveToken, removeToken } = useToken();
  const [user, setUser] = useState({ name: '', email: '' });

  /**
   * useEffect
   * Automatically fetches user profile data upon component mount if a valid token is present.
   */
  useEffect(() => {
    if (getToken() !== undefined) {
      authService.getProfile(getToken()).then((res) => {
        setUser(res);
      });
    }
  }, []);

  /**
   * logout Function
   * Logs out the current user, removing authentication token and user data.
   */
  const logout = async () => {
    try {
      setUser({ name: '', email: '' });
      removeToken();
      window.location.reload();
    } catch (error) {}
  };

  /**
   * login Function
   * Logs in the user with provided credentials and stores the authentication token and user data.
   *
   * @param {string} email - The user's email address.
   * @param {string} password - The user's password.
   * @returns {boolean} Returns true if login is successful, otherwise false.
   */
  const login = async (email, password) => {
    try {
      const userLogged = {
        email,
        password
      };
      const result = await authService.login(userLogged);
      if (result) {
        saveToken(result.token);
        setUser(result.userPublicData);
        return true;
      } else {
        return false;
      }
    } catch (error) {}
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * useAuthContext Hook
 * A custom hook to access the AuthContext and its functions.
 *
 * @returns {object} The context containing user information and authentication functions.
 * @throws {Error} Throws an error if used outside of an AuthProvider.
 */
const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('context undefined');
  }
  return context;
};

export { AuthProvider, useAuthContext };
