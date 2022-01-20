import React,{useEffect} from "react";
import img1 from "../img/1.jpg";
import { TextField } from "./TextField";
// import { TextFieldName } from "./TextFieldName";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";


import axios from "axios";
import setAuthToken from "./setAuthToken";
import { UseAuth } from "./ProtectedRoutes";


import passwordSvg from "../img/svg/password.svg";
import emailSvg from "../img/svg/email.svg";
import { Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
  });

  
  useEffect(() =>{
    const isAuth = UseAuth();
    // console.log(isAuth);
    if(isAuth){
      navigate("/dashboard");
    }

  })

  const handleSubmit = (values, actions) => {
    axios
      .post("api/users/signin", values)
      .then((res) => {
        // console.log(res);
        if (res.status === 201) {
          setAuthToken(res.data.token);
          // console.log(res.data.token)
          localStorage.setItem("jwtToken",res.data.token);
          // history.push("./signin")
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        // console.log(err);
        actions.setErrors(err.response.status);

      });
  };

  return (
    <div className="flex flex-wrap w-full">
      <div className="flex flex-col w-full md:w-1/2">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
          <a href="/" className="p-4 text-xl font-bold text-white bg-black">
            Back.
          </a>
        </div>
        <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
          <p className="text-3xl text-center">Login</p>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validate}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <>
                <Form className="flex flex-col pt-3 md:pt-8">
                  <div className="flex flex-col pt-4">
                    <TextField
                      className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      name="email"
                      type="email"
                      svg={emailSvg}
                      placeholder="E-mail"
                    />
                  </div>

                  <div className="flex flex-col pt-4 mb-8">
                    <TextField
                      className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      name="password"
                      type="password"
                      svg={passwordSvg}
                      placeholder="Password"
                    />
                  </div>

                  {( (formik.errors === 401) || (formik.errors === 422) )  ? (
                    <>
                      <button
                        type="submit"
                        disabled
                        className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-red-500 shadow-md hover:text-black hover:bg-red-400 focus:outline-none focus:ring-2"
                      >
                        <span className="w-full">
                          {(formik.errors === 401)?"Wrong Credentials":null}
                          {(formik.errors === 422)?"User Does Not Exists":null}
                        </span>
                      </button>
                    </>
                  ) : (
                    <button
                      type="submit"
                      className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
                    >
                      <span className="w-full">Submit </span>
                    </button>
                  )}

                </Form>
              </>
            )}
            {/* </form> */}
          </Formik>
          {/* <form className="flex flex-col pt-3 md:pt-8"></form> */}
          <div className="pt-12 pb-12 text-center">
            <p>
              Don&#x27;t have an account?
              <Link to="/" className="font-semibold underline">
                Register here.
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 shadow-2xl">
        <img
          className="hidden object-cover w-full h-screen md:block"
          src={img1}
          alt="login banner"
        />
      </div>
    </div>
  );
}
