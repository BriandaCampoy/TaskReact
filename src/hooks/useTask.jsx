import useToken from "./useToken";

const service_endpoint= `${import.meta.env.VITE_API_URL}/tasks`;


const useTasks=()=>{
  const {getToken} = useToken()
  const headerToken=  {'Content-Type': 'application/json', 'auth-token':getToken()}

  const getTask = async (taskId)=>{
    try {
      const response = await fetch(`${service_endpoint}/${taskId}`,{
        headers:headerToken
      });
      const data = await response.json();
      return data
    } catch (error) {
      
    }
  }
  const getTasks=async (filter='')=>{
    try {
      const query = new URLSearchParams({
        filter
      })      
      const response = await fetch(`${service_endpoint}/user?${query}`,{
        headers:headerToken
      });
      const data = await response.json();
      return data;
    } catch (error) {
      
    }
  }
  const getTasksBySubject=async (subjectId)=>{
    try {
      const response = await fetch(`${service_endpoint}/subject/${subjectId}`,{
        headers:headerToken
      });
      const data = await response.json();
      return data;
    } catch (error) {
      
    }
  }
  const createTask=async (newTask)=>{
    try {
      const response = await fetch(`${service_endpoint}`,{
        method:'POST',
        headers:headerToken,
        body:JSON.stringify(newTask),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      
    }
  }
  const updateTask=async (taskId, newTask)=>{
    try {
      const response = await fetch(`${service_endpoint}/${taskId}`,{
        method:'PATCH',
        headers:headerToken,
        body: JSON.stringify(newTask)
      });
      const data = await response.json();
      return data;
    } catch (error) {
      
    }
  }
  const deleteTask=async (taskId)=>{
    const response = await fetch(`${service_endpoint}/${taskId}`,{
      method:'DELETE',
      headers:headerToken,
    });
    const data = await response.json();
    return data;
  }

  return {getTask, getTasks, getTasksBySubject, createTask, updateTask, deleteTask}
}

export default useTasks;