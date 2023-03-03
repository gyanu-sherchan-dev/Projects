import React from "react";
import Footer from "./Footer";
import GlobalMessage from "./GlobalMessage";
import { Header } from "./Header";

const AdminLayout = ({ children }) => {
  return (
    <>
      <GlobalMessage />
      <Header />

      <div className="children">{children}</div>

      <Footer />
    </>
  );
};

export default AdminLayout;
