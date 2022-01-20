import React from "react";
import { useNavigate } from "react-router-dom";

export default function DashBoard() {
  const navigate = useNavigate();
  return (
    <>
      <header className="flex flex-wrap items-center justify-between w-full px-10 py-5 h-content     text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md">
        <div className="flex w-full">
          <div className="flex  flex-1 ">
            Home
          </div>
          <div className="flex hover:text-gray-400">ReactNode</div>
          <nav className="flex flex-1 justify-end">
            <ul className=" ">
              <li className="inline-block mr-4 ">Profile</li>
              <li className="inline-block mr-4 ">About Us</li>
              <li className="inline-block mr-0 hover:text-gray-400 " onClick={()=>{localStorage.removeItem("jwtToken"); navigate("/")}} ><a href="#" >Logout</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="flex h-24 justify-center items-center text-center" >
          You are now Logged In
      </div>

    </>
  );
}
