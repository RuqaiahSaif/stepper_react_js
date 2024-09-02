// Step2.js
import React from "react";
import { useFormikContext, ErrorMessage } from "formik";
import { FaBox } from "react-icons/fa";
function Step2({ handleNextStep, handlePrevStep }) {
  const { values, errors, touched, handleChange, handleBlur } =
    useFormikContext();

  return (
    <div className="p-4 flex  bg-gray-100 min-h-screen">
      <div className="w-full max-w-screen-md mx-auto">
        <fieldset className="space-y-6">
          {/* Header */}
          <h1 className="text-xl text-blue-900 mb-4 text-center flex justify-center items-center">
            <FaBox className="mr-2" /> Choose Package
          </h1>
          {/* Package Options */}
          <div className="grid sm:grid-cols-3 gap-2 mt-2">
            {/* package1 Package */}
            <label
              htmlFor="plan-package1"
              className={`relative flex flex-col bg-white p-5 rounded-lg shadow-md cursor-pointer ${
                values.package === "package1" ? "border-2 border-blue-500" : ""
              }`}
            >
              <span className="font-semibold text-gray-500 leading-tight uppercase mb-3">
                START
              </span>

              <span>
                <span className="text-xl font-bold text-gray-500 p-1">$</span>
                <span className="text-xl font-bold text-gray-900 -ml-1">5</span>
                <span className="text-xl font-semibold text-gray-500">/</span>
                <span className="text-lg font-semibold text-gray-500">mo</span>
              </span>
              <ul class="mt-6 space-y-2">
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-sm ">Unlimited Access</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-sm ">24/7 Customer Support</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-sm ">Premium Features</span>
                </li>
              </ul>
              {/* Radio Input */}
              <input
                type="radio"
                name="package"
                id="plan-package1"
                value="package1"
                checked={values.package === "package1"}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`absolute h-0 w-0 appearance-none${
                  errors.package && touched.package
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {/* Selection Indicator */}
              {values.package === "package1" && (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 border-1 border-blue-500 bg-green-200 bg-opacity-10 rounded-lg"
                >
                  <span className="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-green-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5 text-green-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </span>
              )}
            </label>

            {/* package2 Package */}
            <label
              htmlFor="plan-package2"
              className={`relative flex flex-col bg-white p-5 rounded-lg shadow-md cursor-pointer ${
                values.package === "package2" ? "border-1 border-blue-500" : ""
              }`}
            >
              <span className="font-semibold text-gray-500 leading-tight uppercase mb-3">
                PRO
              </span>

              <span>
                <span className="text-xl font-bold text-gray-500 p-1">$</span>
                <span className="text-xl font-bold text-gray-900 -ml-1">
                  10
                </span>
                <span className="text-xl font-semibold text-gray-500">/</span>
                <span className="text-lg font-semibold text-gray-500">mo</span>
              </span>
              <ul class="mt-6 space-y-2">
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-sm ">Unlimited Access</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-sm ">24/7 Customer Support</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-sm ">Premium Features</span>
                </li>
              </ul>
              {/* Radio Input */}
              <input
                type="radio"
                name="package"
                id="plan-package2"
                value="package2"
                checked={values.package === "package2"}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`absolute h-0 w-0 appearance-none${
                  errors.package && touched.package
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {/* Selection Indicator */}
              {values.package === "package2" && (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 border-2 border-blue-500 bg-green-200 bg-opacity-10 rounded-lg"
                >
                  <span className="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-green-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5 text-green-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </span>
              )}
            </label>

            {/* package3 Package */}
            <label
              htmlFor="plan-package3"
              className={`relative flex flex-col bg-white p-5 rounded-lg shadow-md cursor-pointer ${
                values.package === "package3" ? "border-1 border-blue-500" : ""
              }`}
            >
              <span className="font-semibold text-gray-500 leading-tight uppercase mb-3">
                BUSNISE
              </span>

              <span>
                <span className="text-xl font-bold text-gray-500 p-1">$</span>
                <span className="text-xl font-bold text-gray-900 -ml-1">
                  15
                </span>
                <span className="text-xl font-semibold text-gray-500">/</span>
                <span className="text-lg font-semibold text-gray-500">mo</span>
              </span>
              {/* Radio Input */}
              <ul class="mt-6 space-y-2">
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-sm ">Unlimited Access</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-sm ">24/7 Customer Support</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-sm ">Premium Features</span>
                </li>
              </ul>
              <input
                type="radio"
                name="package"
                id="plan-package3"
                value="package3"
                checked={values.package === "package3"}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`absolute h-0 w-0 appearance-none${
                  errors.package && touched.package
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {/* Selection Indicator */}
              {values.package === "package3" && (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 border-2 border-blue-500 bg-green-200 bg-opacity-10 rounded-lg"
                >
                  <span className="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-green-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5 text-green-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </span>
              )}
            </label>
          </div>
          {/* Display Validation Error */}
          <ErrorMessage
            name="package"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
         
          <div className="my-2 flex justify-between items-center">
            <button
              type="button"
              className="border border-blue-800 text-blue-800 px-4 py-2 rounded hover:bg-blue-100"
              onClick={handlePrevStep}
            >
              Back
            </button>
            <button
              type="button"
              className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900"
              onClick={() => handleNextStep()}
            >
              Next
            </button>
          </div>
        </fieldset>
      </div>
    </div>
  );
}

export default Step2;
