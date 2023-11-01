import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="main-container">{children}</div>
      <Footer />
    </div>
  );
}
