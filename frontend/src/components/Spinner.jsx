import React from "react";
import loading from "../assets/loader.gif";

const Spinner = () => {
  return (
    <div>
      <img src={loading} className="h-[80px] w-[80px] mx-auto mt-6" />
    </div>
  );
};

export default Spinner;
