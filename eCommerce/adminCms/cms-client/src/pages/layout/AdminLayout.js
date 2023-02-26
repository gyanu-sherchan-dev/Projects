import React from "react";
import Footer from "./Footer";
import GlobalMessage from "./GlobalMessage";
import { Header } from "./Header";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <GlobalMessage />
      <Header />
      <div className="children">{children}</div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
