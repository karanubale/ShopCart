import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <p className="text-center">All Right Reserved @karan</p>
      <p className="text-center mt-3">
        <Link to="/about">about</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy policy</Link>
      </p>
    </div>
  );
};

export default Footer;