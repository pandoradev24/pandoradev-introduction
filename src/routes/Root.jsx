import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <main className="relative font-['Nunito_Sans']">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Root;
