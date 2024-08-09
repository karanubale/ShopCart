import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        backgroundColor: "#f8f9fa",
        padding: "20px 0",
        borderTop: "1px solid #e7e7e7",
        // position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        textAlign: "center"
      }}
    >
      <p style={{ margin: "0", color: "#333", fontSize: "14px" }}>
        Developed By @Karan
      </p>
      <p style={{ marginTop: "10px" }}>
        <Link to="/about" style={{ margin: "0 10px", color: "Green", textDecoration: "none" }}>About</Link>
        |
        <Link to="/contact" style={{ margin: "0 10px", color: "Green", textDecoration: "none" }}>Contact</Link>
        |
        <Link to="/policy" style={{ margin: "0 10px", color: "Green", textDecoration: "none" }}>Privacy policy</Link>
        |
        <Link to="https://github.com/karanubale/ShopCart" style={{ margin: "0 10px", color: "Green", textDecoration: "none" }}>See CodeBase</Link>
      </p>
    </div>
  );
};

export default Footer;
