import { createContext, useContext, useEffect, useState } from "react";
import authService from "../services/AuthService";
import useToken from "../hooks/useToken";

const AuthContext = createContext();

const AuthProvider = ({children})=>{

  const {getToken, saveToken, removeToken} =useToken()
  const [user, setUser] = useState();

  useEffect(()=>{
    authService.getProfile(getToken()).then((res)=>{
      setUser(res)
    })
  },[])

  const login = async (email, password) =>{
    try {
      const userLogged = {
        email,
        password
      }
      const result = await authService.login(userLogged)
      if(result){
        saveToken(result.token)
        setUser(result.userPublicData)
        return true;
      }else{
        return false;
      }

    } catch (error) {
      
    }
  }
  return(
    <AuthContext.Provider
      value={{ user, login}}
    >
      {children}
    </AuthContext.Provider>
  )

}

const useAuthContext = ()=>{
  const context = useContext(AuthContext)
  if(!context){
    throw new Error('context undefined')
  }
  return context;
}

export {AuthProvider, useAuthContext}