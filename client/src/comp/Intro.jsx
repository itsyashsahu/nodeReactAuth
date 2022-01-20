import React from "react";
import heroSvg from "../img/svg/hero.svg";

export default function Intro() {
  return (
    <>
      <header className="flex flex-wrap items-center justify-between w-full px-10 py-5 h-content     text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md">
        <div className="flex w-full">
          <div className="flex  flex-1 ">
            <a className="hover:text-gray-400" href="/signup">Signup</a>{" "}
          </div>
          <div className="flex hover:text-gray-400 ">ReactNode</div>
          <nav className="flex flex-1 justify-end">
            <ul className=" ">
              <li className="inline-block mr-4 ">About Us</li>
              <li className="inline-block mr-0 hover:text-gray-400">
                <a href="/login">Login</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section class="text-gray-600 bg-[#F5F5F5] body-font">
        <div class="container mx-auto flex px-12 py-16 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Simple React Node
              <br class="hidden lg:inline-block" />
              User Authentication
            </h1>
            <p class="mb-8 leading-relaxed">
              This is just Simple Login And signup made Using React , Node ,
              MongoDB and Json Web Tokens. The JWT is stored in the local
              storage of the browser. Check out my GitHub Repo for Such Amazing
              projects -{" "}
              <a
                className="text-gray-800 underline"
                href="https://github.com/itsyashsahu"
              >
                {" "}
                its Yash Sahu
              </a>
            </p>
            <div class="flex justify-center">
              <a href="/signup">
                <button class="inline-flex text-white bg-yellow-900 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-700 rounded text-lg">
                  Signup
                </button>
              </a>

              <a href="/login">
                <button class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Login
                </button>
              </a>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
            <img src={heroSvg} />
          </div>
        </div>
      </section>
    </>
  );
}
