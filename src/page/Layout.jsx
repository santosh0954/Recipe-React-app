import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

function Layout({ user }) {
  return (
    <>
      <Navigation user={user} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
