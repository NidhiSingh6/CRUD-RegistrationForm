import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../features/registrationSlice";


const RegistrationForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

 
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addData(formData))
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className=" basis-1/4 bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Add User</h1>
          <input
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="firstname"
            required={true}
            placeholder="First Name"
          />
          <input
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            type="text"
            required={true}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="lastName"
            placeholder="Last Name"
          />

          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type="email"
            required={true}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />

          <input
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required={true}
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />

          <button
          
          onClick={handleSubmit}
            type="submit"
            className="text-black w-full text-center py-3 rounded bg-[#2fd98a] my-1"
          >
            Save
          </button>
        </div>

  
      </div>
    </div>
  );
};

export default RegistrationForm;
