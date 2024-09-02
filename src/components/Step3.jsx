import React, { useState } from "react";
import { useFormikContext, ErrorMessage, Field } from "formik";
import { FaFileAlt } from "react-icons/fa";
import InputComponent from "./InputComponent";
import { FaUniversity } from "react-icons/fa";

function Step3({ handleNextStep, handlePrevStep }) {
  const { values, errors, touched, handleChange, handleBlur, setFieldValue } =
    useFormikContext();
  const [error, setError] = useState("");
  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];

    if (file) {
      if (file.type !== "application/pdf" && !file.name.endsWith(".png")) {
        setError("Only PDF or PNG files are allowed.");
        event.currentTarget.value = null;

        return;
      }
      setFieldValue("image", file);
    }
  };

  return (
    <div className="p-4 flex flex-col bg-gray-100 min-h-screen">
      <h1 className="text-xl text-blue-900 mb-4 text-center flex justify-center items-center">
        <FaFileAlt className="mr-2" /> Additional Information{" "}
      </h1>
      <div className="w-full max-w-md space-y-4">
        {/* Store Type Selection */}
        <div>
          <label
            htmlFor="store_type"
            className="block text-sm font-medium text-gray-700"
          >
            Store Type
          </label>
          <Field
            as="select"
            name="store_type"
            className={`block w-full mt-1 border border-gray-300 rounded-lg${
              errors.store_type && touched.store_type
                ? "border-red-500"
                : "border-gray-300"
            }`}
          >
            <option value="">Select a store type</option>
            <option value="Mobile_car_wash">Mobile Car Wash</option>
            <option value="gas_water_delivery">Gas and Water Delivery</option>
            <option value="home_maintenance">Home Maintenance</option>
            <option value="mobile_barber">Mobile Barber</option>
          </Field>
          <ErrorMessage
            name="store_type"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        {/* ID Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            ID Image
          </label>
          <InputComponent
            type="file"
            name="image"
            accept=".png,application/pdf"
            onChange={handleFileChange}
            className={`w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600 ${
              errors.image && touched.image
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {(errors.image && touched.image) || error ? (
            <div className="text-red-500 text-sm mt-1">
              {error || <ErrorMessage name="image" />}
            </div>
          ) : null}
        </div>

        {/* Bank Account Information */}
        <div>
          <div>
            <h2 className="flex flex-coltext-sm font-medium text-blue-900 mb-4 ">
              <FaUniversity className="mr-2 mt-1" />{" "}
              {/* Optional: Add margin for spacing between icon and text */}
              Bank Account Information{" "}
            </h2>
          </div>
          <label
            htmlFor="bank_name"
            className="block text-sm font-medium text-gray-700"
          >
            Bank Name
          </label>
          <InputComponent
            type="text"
            name="bank_name"
            value={values.bank_name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600 ${
              errors.bank_name && touched.bank_name
                ? "border-red-500"
                : "border-gray-300"
            }`}
            placeholder="bank name"
          />
          <ErrorMessage
            name="bank_name"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div>
          <label
            htmlFor="iban"
            className="block text-sm font-medium text-gray-700"
          >
            IBAN
          </label>
          <InputComponent
            type="text"
            name="iban"
            value={values.iban}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600 ${
              errors.iban && touched.iban ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="SA4420000001234567891234"
          />
          <ErrorMessage
            name="iban"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div className="flex justify-between mt-4">
          <button
            type="button"
            cl
            className="border border-blue-800 text-blue-800 px-4 py-2 rounded hover:bg-blue-100"
            onClick={handlePrevStep}
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900"
            onClick={() => handleNextStep()}
          >
            finish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step3;
