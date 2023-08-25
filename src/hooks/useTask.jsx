import useToken from './useToken';

const service_endpoint = `${import.meta.env.VITE_API_URL}/tasks`;

/**
 * useTasks Custom Hook
 * This hook provides functions for interacting with task-related API endpoints.
 *
 * @returns {object} An object containing functions for task operations.
 */
const useTasks = () => {
  const { getToken } = useToken();
  const headerToken = {
    'Content-Type': 'application/json',
    'auth-token': getToken()
  };

  /**
   * getTask Function
   * Retrieves a single task from the API.
   *
   * @param {string} taskId - The ID of the task to retrieve.
   * @returns {object} The retrieved task data.
   */
  const getTask = async (taskId) => {
    try {
      const response = await fetch(`${service_endpoint}/${taskId}`, {
        headers: headerToken
      });
      const data = await response.json();
      return data;
    } catch (error) {}
  };

  /**
   * getTasks Function
   * Retrieves a list of tasks from the API, with an optional filter.
   *
   * @param {string} filter - Optional filter for task retrieval.
   * @returns {array} An array of task data.
   */
  const getTasks = async (filter = '') => {
    try {
      const query = new URLSearchParams({
        filter
      });
      const response = await fetch(`${service_endpoint}/user?${query}`, {
        headers: headerToken
      });
      const data = await response.json();
      return data;
    } catch (error) {}
  };

  /**
   * getTasksBySubject Function
   * Retrieves tasks associated with a specific subject from the API.
   *
   * @param {string} subjectId - The ID of the subject to retrieve tasks for.
   * @returns {array} An array of task data.
   */
  const getTasksBySubject = async (subjectId) => {
    try {
      const response = await fetch(`${service_endpoint}/subject/${subjectId}`, {
        headers: headerToken
      });
      const data = await response.json();
      return data;
    } catch (error) {}
  };

  /**
   * createTask Function
   * Creates a new task using the API.
   *
   * @param {object} newTask - The task object to be created.
   * @returns {object} The created task data.
   */
  const createTask = async (newTask) => {
    try {
      const response = await fetch(`${service_endpoint}`, {
        method: 'POST',
        headers: headerToken,
        body: JSON.stringify(newTask)
      });
      const data = await response.json();
      return data;
    } catch (error) {}
  };

  /**
   * updateTask Function
   * Updates an existing task using the API.
   *
   * @param {string} taskId - The ID of the task to be updated.
   * @param {object} newTask - The updated task object.
   * @returns {object} The updated task data.
   */
  const updateTask = async (taskId, newTask) => {
    try {
      const response = await fetch(`${service_endpoint}/${taskId}`, {
        method: 'PATCH',
        headers: headerToken,
        body: JSON.stringify(newTask)
      });
      const data = await response.json();
      return data;
    } catch (error) {}
  };

  /**
   * deleteTask Function
   * Deletes a task using the API.
   *
   * @param {string} taskId - The ID of the task to be deleted.
   * @returns {object} The response data from the deletion operation.
   */
  const deleteTask = async (taskId) => {
    const response = await fetch(`${service_endpoint}/${taskId}`, {
      method: 'DELETE',
      headers: headerToken
    });
    const data = await response.json();
    return data;
  };

  return {
    getTask,
    getTasks,
    getTasksBySubject,
    createTask,
    updateTask,
    deleteTask
  };
};

export default useTasks;
