import React from "react";
import { useEffect, useState } from "react";
import Home from "./Home";
import { useNavigate } from "react-router-dom";

const Protected = () => {
  const Navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("Profile");
    if (!token) {
      Navigate("/");
    }
  });

  return <Home />;
};

export default Protected;
