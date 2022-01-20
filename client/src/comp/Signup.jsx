import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import img1 from "../img/3.jpg";
import { TextField } from "./TextField";
import { TextFieldName } from "./TextFieldName";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import passwordSvg from "../img/svg/password.svg";
import emailSvg from "../img/svg/email.svg";
import addressSvg from "../img/svg/address.svg";
import phoneSvg from "../img/svg/phone.svg";
import setAuthToken from "./setAuthToken";
import { UseAuth } from "./ProtectedRoutes";


export default function Signup() {
  const navigate = useNavigate();

  useEffect(() =>{
    const isAuth = UseAuth();
    if(isAuth){
      navigate("/dashboard");
    }

  },[navigate])


  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required")
      .trim("The contact name cannot include leading and trailing spaces"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    address: Yup.string().required("Address is Required"),
    phone: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      )
      .min(10, "Phone number should be atleast 10 numbers long")
      .max(11, "Phone number cannot be greater then 11 numbers long")
      .required("Phone Number is Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });


  const handleSubmit = (values,actions) => {
    console.log(values,actions);
    axios
      .post("api/users/signup", values)
      .then((res) => {
        // console.log("successfully",res);
        if (res.status === 201) {
          setAuthToken(res.data.token);
          localStorage.setItem("jwtToken",res.data.token);
          navigate("/dashboard")
        }
      })
      .catch((err) => {
        // console.log(err);
        actions.setErrors(err.response.status);
        
      });
      // console.log(formik);
    
  };

  // console.log("adskjfhasdkjhkjhkjh444444",Formik.isSubmitting)
  return (
    <div className="flex flex-wrap w-full h-screen overflow-hidden">
      <div className="w-1/2 shadow-2xl">
        <img
          className="hidden object-cover w-full h-screen md:block"
          src={img1}
          alt="banner"
        />
      </div>
      <div className="flex flex-col w-full md:w-1/2 h-full overflow-y-auto">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-16">
          <Link to="/" className="p-4 text-xl font-bold text-white bg-black">
            Back.
          </Link>
        </div>
        <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
          <p className="text-3xl text-center">Sign Up</p>

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validate}
            onSubmit={handleSubmit}

          >
            {(formik) => (
              <>
                <Form>

                  <div className="flex pt-4 ">
                    <div className="flex flex-col relative ml-0 w-2/4">
                      <TextFieldName
                        type="text"
                        className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="First Name"
                        name="firstName"
                      />
                    </div>
                    <div className="flex flex-col relative ml-2 w-2/4">
                      <TextFieldName
                        type="text"
                        className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Last Name"
                        name="lastName"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col pt-3">
                    <TextField
                      className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      name="email"
                      type="email"
                      svg={emailSvg}
                      placeholder="E-mail"
                    />
                  </div>

                  <div className="flex flex-col pt-3">
                    <TextField
                      className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      name="phone"
                      type="phone"
                      svg={phoneSvg}
                      placeholder="Phone Number"
                    />
                  </div>

                  <div className="flex flex-col pt-3">
                    <TextField
                      className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      name="address"
                      type="text"
                      svg={addressSvg}
                      placeholder="Address"
                    />
                  </div>

                  <div className="flex flex-col pt-3">
                    <TextField
                      className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      name="password"
                      type="password"
                      svg={passwordSvg}
                      placeholder="Password"
                    />
                  </div>

                  <div className="flex flex-col pt-3 mb-8">
                    <TextField
                      className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      name="confirmPassword"
                      type="password"
                      svg={passwordSvg}
                      placeholder="Confirm Password"
                    />
                  </div>
                  

                  {(formik.errors===424) ? (
                    <>
                      <button
                        type="submit"
                        disabled
                        className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-red-500 shadow-md hover:text-black hover:bg-red-400 focus:outline-none focus:ring-2"
                      >
                        <span className="w-full">User Already Exists </span>
                      </button>
                    </>
                  ) : (
                    <button
                      type="submit"
                      className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
                    >
                      <span className="w-full">Register </span>
                    </button>
                  )}
                </Form>
              </>
            )}
            {/* </form> */}
          </Formik>

          <div className="pt-8 pb-4 text-center">
            <p>
              Already have an account ?
              <Link to="/login" className="font-semibold underline">
                Login here. {Formik.isSubmitting}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
