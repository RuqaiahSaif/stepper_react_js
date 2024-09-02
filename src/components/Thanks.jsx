import React from 'react'
import done from "../assets/images/done.gif";
import { useFormikContext } from "formik";
function Thanks() {
   const { values } =
     useFormikContext();
         console.log("errors", values);
  return (
    <div >
     
      <div className="grid justify-items-center ">
        <img src={done} alt="sitting" className={`p-6 w-1/2 rounded-full`} />
        <h1 className="text-xl text-blue-900 mb-4 text-center flex justify-center items-center">
            Thank you 
            </h1>
            <span className='p-5'>
                Your information has been submitted successfully
            </span>
      </div>

    </div>
  );
}

export default Thanks
