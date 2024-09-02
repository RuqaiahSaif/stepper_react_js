import React, { useState } from "react";
import { Formik, Form } from "formik";
import { FaCheck } from "react-icons/fa";
import * as Yup from "yup";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Thanks from "./Thanks";
import axios from "axios";
const initialFormData = {
  name: "",
  email: "",
  phone_number: "",
  gender: "",
  national_id_number: "",
  package: "",
  store_type: "",
  image: "",
  bank_name: "",
  iban: "",
};

const stepsArray = ["1", "2", "3"];

function Stepper({ showStepNumber = true }) {
  const [step, setStep] = useState("1");
  const [errors, setErrors] = useState([]);
  // Validation schema for Formik
  const validationSchemas = {
    1: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .matches(
          /^[A-Za-z\s\u0600-\u06FF]+$/,
          "Name must contain only letters (including Arabic) and spaces"
        ),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone_number: Yup.string()
        .required("Phone number is required")
        .matches(/^\d{9}$/, "Phone number must be number and exactly 9 digits"),
      gender: Yup.string().required("Please select a gender"),
      national_id_number: Yup.string()
        .required("National ID Number is required")
        .matches(/^\d+$/, "National ID Number must be numeric"),
    }),
    2: Yup.object({
      package: Yup.string().required("Please select a package"),
    }),
    3: Yup.object({
      store_type: Yup.string().required("Store type is required"),
      image: Yup.mixed()
        .required("ID image is required")
        .test(
          "fileFormat",
          "Unsupported file format",
          (value) =>
            !value ||
            value.type === "application/pdf" ||
            value.name.endsWith(".png")
        ),
      bank_name: Yup.string()
        .required("Bank name is required")
        .matches(
          /^[A-Za-z\s\u0600-\u06FF]+$/,
          "Name must contain only letters (including Arabic) and spaces"
        ),
      iban: Yup.string().required("IBAN is required"),
    }),
    default: Yup.object(),
  };

  // console.log("Validation schema:", validationSchema);
  const handleNextStep = async (formik) => {
    //  const isStep2 = step === "2";
    console.log("Current step before validation:", step);
    const errors = await formik.validateForm();
    formik.setTouched(
      Object.keys(errors).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {})
    );
    console.log("errors", Object.keys(errors));
    if (Object.keys(errors).length === 0) {
      if (step === "1") setStep("2");
      else if (step === "2") setStep("3");
      else if (step === "3") handleSubmit(formik);
    }
    console.log("Current step after validation:", step);
  };

  const handlePrevStep = () => {
    if (step === "3") setStep("2");
    else if (step === "2") setStep("1");
  };
  const handleSubmit = async (values, actions) => {
    console.log("values", values);
    const formData = new FormData();
    const fullphone_number = `+966${values.phone_number}`;
    for (const key in values) {
      if (key === "phone_number") {
        // Replace phone_number with fullphone_number
        formData.append(key, fullphone_number);
      } else {
        formData.append(key, values[key]);
      }
    }
    console.log("formData", formData);
    // try {
    await axios
      .post("http://127.0.0.1:8000/api/submit", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("res", response);
        console.log("done", response.data);
        if (response.data.success) {
          // Example: Show success message or move to the final step
          console.log("Form submitted successfully!"); // Or use any UI component to show the message
          // setStep("Final");
        } else {
          console.log("Handle other data:", response.data);
        }
        setStep("Final");
      })
      .catch((error) => {
        setErrors([...errors, error.response.data.message]);

        console.log("there is erorr", error.response.data.message);
      });
  };
  return (
    <div className="bg-slate-100  py-6 font-openSans min-h-screen">
      <div className="w-[700px] max-w-full px-6 py-1 mx-auto md:pt-10 rounded-lg border-2 bg-white shadow-md ">
        {showStepNumber && step !== "Final" && (
          <>
            <section className="mt-2 mb-4 flex justify-between items-center">
              {stepsArray.map((item, index) => (
                <React.Fragment key={item}>
                  {/* Step Circle */}
                  <div
                    className={`w-8 h-8 flex justify-center items-center border-2 rounded-full cursor-pointer ${
                      item < step
                        ? "bg-blue-800 border-blue-800 "
                        : item === step
                        ? "bg-blue-800 border-blue-800"
                        : "border-gray-600"
                    }`}
                    onClick={() => setStep(item)}
                  >
                    {item < step ? (
                      <span className="text-white">
                        <FaCheck size={15} />
                      </span>
                    ) : (
                      <span className="text-black ">{item}</span>
                    )}
                  </div>

                  {/* Connecting Line */}
                  {index < stepsArray.length - 1 && (
                    <div
                      className={`h-1 flex-1 ${
                        step > item ? "bg-blue-800 " : "bg-gray-300"
                      }`}
                    ></div>
                  )}
                </React.Fragment>
              ))}
            </section>
            {/* {errors.length > 0 && (
              <div className="text-red-500 text-sm mt-1">
                {errors.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}{" "} */}
          </>
        )}

        <Formik
          initialValues={initialFormData}
          validationSchema={validationSchemas[step]}
          onSubmit={(values, actions) => handleSubmit(values, actions)}
          context={{ currentStep: step }}
        >
          {({ isValid, dirty, handleSubmit, validateForm, setTouched }) => (
            <Form onSubmit={handleSubmit}>
              {/* Render Steps */}
              {step === "1" ? (
                <Step1
                  handleNextStep={() =>
                    handleNextStep({ validateForm, setTouched })
                  }
                  // handlePrevStep={handlePrevStep}
                />
              ) : null}
              {step === "2" ? (
                <Step2
                  handleNextStep={() =>
                    handleNextStep({ validateForm, setTouched })
                  }
                  handlePrevStep={handlePrevStep}
                />
              ) : null}
              {step === "3" ? (
                <Step3
                  handleNextStep={() =>
                    handleNextStep({ validateForm, setTouched })
                  }
                  handleSubmit={handleSubmit}
                  handlePrevStep={handlePrevStep}
                />
              ) : null}
              {step === "Final" ? <Thanks /> : null}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Stepper;
