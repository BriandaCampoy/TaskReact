const service_endpoint = `${import.meta.env.VITE_API_URL}/auth`;

export default {
  getProfile: async (token) => {
    try {
      const response = await fetch(`${service_endpoint}/profile`,{
        method: 'GET',
        headers: {'auth-token':token}
      });
      const data = response.json();
      return data
    } catch (error) {}
  },
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
  register: async (subjectId) => {
    try {
    } catch (error) {}
  }
};
