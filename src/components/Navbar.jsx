import React from "react";
import { Link, NavLink } from "react-router-dom";

const navList = [
  {
    label: "Trang chủ",
    url: "/",
  },
  {
    label: "Giới thiệu",
    url: "/about-us",
  },
  {
    label: "Hợp đồng",
    url: "/contract",
  },
  {
    label: "Tài liệu",
    url: "/document",
  },
  {
    label: "Đồ án",
    url: "/project",
  },
  {
    label: "Liên hệ",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav
      className="fixed z-[2] top-0 w-full h-[5rem] flex flex-row items-center"
      style={{ background: "linear-gradient(21deg, #0ed8ac 0%, #71a5c8 100%)" }}
    >
      <Link to="/" className="ml-[5%] w-max h-full flex flex-row items-center">
        <img src="/assets/pandoradev-logo.png" alt="" className="h-full" />
      </Link>
      <div className="mx-auto flex flex-row items-center gap-6">
        {navList.map((navItem, index) => (
          <NavLink
            key={index}
            to={navItem.url}
            className="text-white text-[1.25rem] hover:translate-y-[-2px] transition-all duration-300 ease-in-out"
            style={({ isActive }) => ({
              color: isActive ? "#367E89" : "white",
              fontWeight: isActive ? "700" : "600",
              background: isActive
                ? "linear-gradient(21deg, #7AECF5 0%, #BEFCFC 100%)"
                : "transparent",
              padding: isActive ? "0.5rem 1.5rem" : "0 0",
              borderRadius: isActive ? "6.25rem" : "",
            })}
          >
            {navItem.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
