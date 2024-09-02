import React from "react";
import { useFormikContext,  ErrorMessage } from "formik";
import { FaUser } from "react-icons/fa";
import InputComponent from "./InputComponent";
function Step1({ handleNextStep, validationSchema }) {
  const { values, errors, touched, handleChange, handleBlur } =
    useFormikContext();

  return (
    <div className="p-4 flex flex-col bg-gray-100 min-h-screen ">
      
      <h1 className="text-xl  text-blue-900 mb-4 text-center flex justify-center items-center">
        <FaUser className="mr-2" />{" "}
        Personal Information
      </h1>

      <div className="my-2">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        
        <InputComponent
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600 ${
            errors.name && touched.name ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Roqia Saif"
        />

        <ErrorMessage
          name="name"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
      <div className="my-2">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <InputComponent
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600 ${
            errors.email && touched.email ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="example@gmail.com"
        />
        <ErrorMessage
          name="email"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
      <div className="my-2">
        <label className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <div class="flex">
          <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            +966
          </span>
          <InputComponent
            type="text"
            name="phone_number"
            value={values.phone_number}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full outline-none border border-gray-400 px-2 py-1 rounded-none rounded-e-lg focus:border-blue-600 ${
              errors.phone_number && touched.phone_number
                ? "border-red-500"
                : "border-gray-300"
            }`}
            placeholder="501234567"
          />
        </div>
        <ErrorMessage
          name="phone_number"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
      <div className="my-2">
        <label className="block text-sm font-medium text-gray-700">
          Gender
        </label>
        <div>
          <InputComponent
            type="radio"
            name="gender"
            value="0"
            checked={values.gender === "0"}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`px-2 py-1 m-2 ${
              errors.national_id_number && touched.national_id_number
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="1"
            checked={values.gender === "1"}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`px-2 py-1 m-2 ${
              errors.national_id_number && touched.national_id_number
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          <label>Female</label>
          <ErrorMessage
            name="gender"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
      </div>
      <div className="my-2">
        <label className="block text-sm font-medium text-gray-700">
          National ID Number
        </label>
        <InputComponent
          type="text"
          name="national_id_number"
          value={values.national_id_number}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600 ${
            errors.national_id_number && touched.national_id_number
              ? "border-red-500"
              : "border-gray-300"
          }`}
          placeholder="1234567890"
        />
        <ErrorMessage
          name="national_id_number"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
      <div className="my-2 flex justify-end items-center">
        <button
          type="button"
          className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900"
          onClick={() => handleNextStep()}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Step1;
