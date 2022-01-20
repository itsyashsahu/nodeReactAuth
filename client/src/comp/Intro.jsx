import React from "react";
import{ Link } from "react-router-dom";
import heroSvg from "../img/svg/hero.svg";

export default function Intro() {
  return (
    <>
      <header className="flex flex-wrap items-center justify-between w-full px-10 py-5 h-content     text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md">
        <div className="flex w-full">
          <div className="flex  flex-1 ">
            <Link className="hover:text-gray-400" to="/signup">Signup</Link>{" "}
          </div>
          <div className="flex hover:text-gray-400 ">ReactNode</div>
          <nav className="flex flex-1 justify-end">
            <ul className=" ">
              <li className="sm:inline-block hidden mr-4  ">About Us</li>
              <li className="inline-block mr-0 hover:text-gray-400">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="text-gray-600 bg-[#F5F5F5] body-font">
        <div className="container mx-auto flex px-12 py-16 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Simple React Node
              <br className="hidden lg:inline-block" />
              User Authentication
            </h1>
            <p className="mb-8 leading-relaxed">
              This is just Simple Login And signup made Using React , Node ,
              MongoDB and Json Web Tokens. The JWT is stored in the local
              storage of the browser. Check out my GitHub Repo for Such Amazing
              projects -{" "}
              <Link
                className="text-gray-800 underline"
                to="https://github.com/itsyashsahu"
              >
                its Yash Sahu
              </Link>
            </p>
            <div className="flex justify-center">
              <Link to="/signup">
                <button className="inline-flex text-white bg-yellow-900 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-700 rounded text-lg">
                  Signup
                </button>
              </Link>

              <Link to="/login">
                <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Login
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
            <img src={heroSvg} alt="hero" />
          </div>
        </div>
      </section>
    </>
  );
}
