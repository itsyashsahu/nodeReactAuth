import React from "react";
import jwtDecode from 'jwt-decode';
import { Navigate, Outlet } from "react-router-dom";

const UseAuth = () => {
  
  const token = localStorage.getItem('jwtToken');
  let isAuth = false;
  try{
    const decoded = jwtDecode(token); 
    ( decoded?.userId )? isAuth = true : isAuth = false;

  }catch(e){
    // console.log(e);
  }
  // console.log("asdlkjfasdlkj",decoded,token)
  if(!isAuth){
    localStorage.removeItem("jwtToken");
  }
  // console.log("asdlkjfasdlkj",token)

  const user = { loggedIn: isAuth };
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = UseAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
export { UseAuth }