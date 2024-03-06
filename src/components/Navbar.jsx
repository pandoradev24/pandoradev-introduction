import React from "react";
import { Link } from "react-router-dom";

const navList = [
  {
    label: "Trang chủ",
    url: "/",
  },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 ">
      {/* <Link to="/" className="text-[#333] text-[2rem] font-bold leading-[1.3]">
        Home
      </Link> */}
    </nav>
  );
};

export default Navbar;
