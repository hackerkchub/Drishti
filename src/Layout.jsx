import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* Top Navbar */}
      <Navbar />

      {/* Page Content */}
      <main style={{ minHeight: "calc(100vh - 160px)" }}>
        <Outlet />
      </main>

      {/* Footer visible on all pages */}
      <Footer />
    </>
  );
};

export default Layout;
