import { useCookies } from 'react-cookie';

const useToken = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const getToken=()=>{
    return cookies.token
  }

  const saveToken = (token)=>{
    setCookie('token', token)
  }

  const removeToken = ()=>{
    removeCookie('token')
  }

  return {getToken, saveToken, removeToken}
};


export default useToken;