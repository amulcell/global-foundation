import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/" className="nav-logo">
        <img src="/vite.svg" alt="Global Foundation Logo" style={{ width: "32px", height: "32px" }} />
        Global Foundation
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/founders">Founders</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/impact">Impact</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <Link to="/contact" className="primary-button" style={{ padding: "10px 20px", fontSize: "14px" }}>
        Get Involved
      </Link>
    </nav>
  );
}

export default Navbar;