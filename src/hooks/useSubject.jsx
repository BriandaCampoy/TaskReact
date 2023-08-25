import useToken from "./useToken";

const service_endpoint= `${import.meta.env.VITE_API_URL}/subject`;


const useSubjects=()=>{
  const {getToken} = useToken()
  const headerToken=  {'Content-Type': 'application/json', 'auth-token':getToken()}

  const getSubject = async (subjectId)=>{
    try {
      const response = await fetch(`${service_endpoint}/${subjectId}`,{
        headers:headerToken
      });
      const data = await response.json();
      return data
    } catch (error) {
      
    }
  }
  const getSubjects=async ()=>{
    try {
      const response = await fetch(`${service_endpoint}`,{
        headers:headerToken
      });
      const data = await response.json();
      return data;
    } catch (error) {
      
    }
  }
  const createSubject=async (newSubject)=>{
    try {
      const response = await fetch(`${service_endpoint}`,{
        method:'POST',
        headers:headerToken,
        body:JSON.stringify(newSubject)
      });
      const data = await response.json();
      return data;
    } catch (error) {
      
    }
  }
  const updateSubject=async (subjectId, newSubject)=>{
    try {
      const response = await fetch(`${service_endpoint}/${subjectId}`,{
        method:'PATCH',
        headers:headerToken,
        body:JSON.stringify(newSubject)
      });
      const data = await response.json();
      return data;
    } catch (error) {
      
    }
  }
  const deleteSubject=async (subjectId)=>{
    const response = await fetch(`${service_endpoint}/${subjectId}`,{
      method:'DELETE',
      headers:headerToken,
    });
    const data = await response.json();
    return data;
  }

  return {getSubject, getSubjects, createSubject, updateSubject, deleteSubject}
}

export default useSubjects;