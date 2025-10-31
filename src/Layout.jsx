import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function Layout() {
  const location = useLocation();
  const hideFooter = location.pathname === "/chat"; // hide footer on chat page

  return (
    <>
      <Navbar />
      <Outlet />
      {!hideFooter && <Footer />} {/* show footer only if not in chat */}
    </>
  );
}

export default Layout;
