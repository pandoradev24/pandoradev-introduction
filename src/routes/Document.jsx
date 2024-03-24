import React from "react";
import { Outlet } from "react-router-dom";

const Document = () => {
  return (
    <div className="py-24 w-full">
      <div className="mx-auto w-full max-w-[90rem]">
        <Outlet />
      </div>
    </div>
  );
};

export default Document;
