/**
 * Authentication Service Module
 * This module provides functions for authentication-related interactions with the API.
 */
const service_endpoint = `${import.meta.env.VITE_API_URL}/auth`;

export default {
  /**
   * Retrieves the user's profile information.
   *
   * @param {string} token - The authentication token.
   * @returns {Promise} A Promise containing the user's profile data.
   */
  getProfile: async (token) => {
    try {
      const response = await fetch(`${service_endpoint}/profile`, {
        method: 'GET',
        headers: { 'auth-token': token }
      });
      const data = response.json();
      return data;
    } catch (error) {}
  },

  /**
   * Attempts to log in the user.
   *
   * @param {object} user - An object containing user credentials (email and password).
   * @returns {Promise} A Promise containing the login response data or false if login fails.
   */
  login: async (user) => {
    try {
      const response = await fetch(`${service_endpoint}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      });
      if (response.status === 401) {
        return false;
      } else {
        const data = await response.json();
        return data;
      }
    } catch (error) {}
  },

  /**
   * Registers a new user.
   *
   * @param {string} name - User's name.
   * @param {string} email - User's email.
   * @param {string} password - User's password.
   * @returns {Promise} A Promise containing the registration response data.
   */
  register: async (name, email, password) => {
    try {
      const newUser = {
        name,
        email,
        password
      };
      const response = await fetch(`${service_endpoint}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      });
      const data = await response.json();
      return data;
    } catch (error) {}
  }
};
