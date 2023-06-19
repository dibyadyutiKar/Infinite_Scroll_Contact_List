import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const Navigate = useNavigate();

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform login logic here, such as making an API call
    try {
      const response = await axios.post(
        "https://contact-list-infinitescroll.onrender.com/api/v1/login",
        {
          userName,
          password,
        }
      );
      const token = response.data.token;
      localStorage.setItem("Profile", token);

      // console.log("Email:", userName);
      // console.log("Password:", password);
      // console.log(token);
      // Reset form fields
      setUserName("");
      setPassword("");

      Navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <form onSubmit={handleSubmit} className="max-w-xs mx-auto ">
        <div className="mb-4">
          <label
            htmlFor="userName"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Username:
          </label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={handleUserNameChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
