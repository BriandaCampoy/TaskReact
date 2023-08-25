import useToken from './useToken';

const service_endpoint = `${import.meta.env.VITE_API_URL}/subject`;

/**
 * useSubjects Custom Hook
 * This hook provides functions for interacting with subject-related API endpoints.
 *
 * @returns {object} An object containing functions for subject operations.
 */
const useSubjects = () => {
  const { getToken } = useToken();
  const headerToken = {
    'Content-Type': 'application/json',
    'auth-token': getToken()
  };

  /**
   * getSubject Function
   * Retrieves a single subject from the API.
   *
   * @param {string} subjectId - The ID of the subject to retrieve.
   * @returns {object} The retrieved subject data.
   */
  const getSubject = async (subjectId) => {
    try {
      const response = await fetch(`${service_endpoint}/${subjectId}`, {
        headers: headerToken
      });
      const data = await response.json();
      return data;
    } catch (error) {}
  };

  /**
   * getSubject Function
   * Retrieves a single subject from the API.
   *
   * @param {string} subjectId - The ID of the subject to retrieve.
   * @returns {object} The retrieved subject data.
   */
  const getSubjects = async () => {
    try {
      const response = await fetch(`${service_endpoint}`, {
        headers: headerToken
      });
      const data = await response.json();
      return data;
    } catch (error) {}
  };

  /**
   * createSubject Function
   * Creates a new subject using the API.
   *
   * @param {object} newSubject - The subject object to be created.
   * @returns {object} The created subject data.
   */
  const createSubject = async (newSubject) => {
    try {
      const response = await fetch(`${service_endpoint}`, {
        method: 'POST',
        headers: headerToken,
        body: JSON.stringify(newSubject)
      });
      const data = await response.json();
      return data;
    } catch (error) {}
  };

  /**
   * updateSubject Function
   * Updates an existing subject using the API.
   *
   * @param {string} subjectId - The ID of the subject to be updated.
   * @param {object} newSubject - The updated subject object.
   * @returns {object} The updated subject data.
   */
  const updateSubject = async (subjectId, newSubject) => {
    try {
      const response = await fetch(`${service_endpoint}/${subjectId}`, {
        method: 'PATCH',
        headers: headerToken,
        body: JSON.stringify(newSubject)
      });
      const data = await response.json();
      return data;
    } catch (error) {}
  };

  /**
   * deleteSubject Function
   * Deletes a subject using the API.
   *
   * @param {string} subjectId - The ID of the subject to be deleted.
   * @returns {object} The response data from the deletion operation.
   */
  const deleteSubject = async (subjectId) => {
    const response = await fetch(`${service_endpoint}/${subjectId}`, {
      method: 'DELETE',
      headers: headerToken
    });
    const data = await response.json();
    return data;
  };

  return {
    getSubject,
    getSubjects,
    createSubject,
    updateSubject,
    deleteSubject
  };
};

export default useSubjects;
