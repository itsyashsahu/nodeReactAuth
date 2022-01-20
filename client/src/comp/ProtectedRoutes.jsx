import React from "react";
import jwtDecode from 'jwt-decode';
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({children, ...rest}) => {
    var isAuth = false;
    //verifying user form browser storage
    const token = sessionStorage.getItem('jwtToken');
    var decoded;//to store the decoded jwt token as we need to store it to redux state
    if(token){
    //getting token back from browser and decodeing it to get userId 
    //if userId is set then we have a user means signined in
        decoded = jwtDecode(token);
        isAuth = true;
    }
    return ;
}


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