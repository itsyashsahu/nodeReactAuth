import React from 'react';
import { ErrorMessage, useField } from 'formik';


export const TextField = ({ label,svg, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
    
        <div
        className={`flex relative ${meta.touched && meta.error && 'outline-red-400 outline md:outline-blue-400'}`}
        >
        <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
            <img src={svg} alt="svg" />
        </span>
      {/* <label htmlFor={field.name}>{label}</label> */}
      <input
        className={` ${meta.touched && meta.error && 'outline-red-400 outline md:outline-blue-400'}`}
        {...field} {...props}
        autoComplete="off"
      />
      </div >
      <ErrorMessage component="div" name={field.name} className=" flex justify-start text-red-500 text-xs" />
    </>
  )
}