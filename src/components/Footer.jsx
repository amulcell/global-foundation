import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3>Global Foundation</h3>
          <p>
            Empowering lives and transforming communities through a 360-degree approach to sustainable development.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <p><MapPin size={16} /> H.No. 3-91, Bank Colony, Munaganoor, Hyderabad 501511</p>
          <p><Phone size={16} /> +91 7989090963</p>
          <p><Mail size={16} /> globalfoundation083@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Global Foundation. Regd. No. 1083/2021. Made with purpose.</p>
      </div>
    </footer>
  );
}

export default Footer;