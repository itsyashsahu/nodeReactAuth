import "./App.css";
import { Routes, Route ,useNavigate  } from "react-router-dom";
import Login from "./comp/Login";
import Signup from "./comp/Signup";
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
