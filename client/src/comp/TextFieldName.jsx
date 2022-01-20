import React from 'react';
import { ErrorMessage, useField } from 'formik';


export const TextFieldName = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
        {/* <label htmlFor={field.name}>{label}</label> */}
    {/* <div className="flex flex-col relative ml-2 w-2/4"> */}
      <input
        className={` ${meta.touched && meta.error && 'outline-red-400 outline md:outline-blue-400'}`}
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className=" flex justify-start text-red-500 text-xs" />
      {/* </div > */}
    </>
  )
}