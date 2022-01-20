import "./App.css";
import React,{useEffect} from "react";
import { Routes, Route,useNavigate } from "react-router-dom";
import Login from "./comp/Login";
import Signup from "./comp/Signup";
import DashBoard from "./comp/DashBoard";
import { UseAuth } from "./comp/ProtectedRoutes";

// import Home from "./comp/Home";
import ProtectedRoutes from "./comp/ProtectedRoutes";
import Intro from "./comp/Intro";

function App() {

  const navigate = useNavigate();
  
  useEffect(() =>{
    const isAuth = UseAuth();
    console.log(isAuth);
    if(isAuth){
      navigate("/dashboard");
    }

  },[])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<DashBoard />} />
          {/* all the protected routes goes here */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
