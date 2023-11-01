import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
export default function Header() {
  const location = useLocation();
  const [showMenuItems, setShowMenuItems] = useState(false);
  const urlPath = location.pathname;
  const getLinkColor = (path) => {
    return urlPath === path ? "orange" : "";
  };
  return (
    <div className="header">
      <div className="logo">
        <img src="/images/blog_logo.png" alt="" />
      </div>
      <div className="links-container">
        <Link to="/" style={{ color: getLinkColor("/") }}>
          Home
        </Link>
        <Link to="/about-us" style={{ color: getLinkColor("/about-us") }}>
          About us
        </Link>
        <Link to="#" style={{ color: getLinkColor() }}>
          Contact us
        </Link>
      </div>
      <div className="login-signup-container">
        <Link to="#">Login</Link>
        <Link to="#">Sign up</Link>
      </div>
      <div className="menu" onClick={() => setShowMenuItems((prev) => !prev)}>
        <MenuIcon />
      </div>
      {showMenuItems && (
        <div className="menu-items">
          <Link to="/" style={{ color: getLinkColor("/") }}>
            Home
          </Link>
          <Link to="/about-us" style={{ color: getLinkColor("/about-us") }}>
            About us
          </Link>
          <Link to="#" style={{ color: getLinkColor() }}>
            Contact us
          </Link>
          <Link to="#">Login</Link>
          <Link to="#">Sign up</Link>
        </div>
      )}
    </div>
  );
}
