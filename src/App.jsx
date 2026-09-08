import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, Sparkles, BookOpen, Utensils, ShieldCheck, Menu } from "lucide-react";
import About from "./components/About";
import Founders from "./components/Founders";
import ProjectDirectors from "./components/ProjectDirectors";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Impact from "./components/Impact";
import Contact from "./components/Contact";
import Transparency from "./components/Transparency";
import logoImg from "./assets/global-foundation/logo.jpeg";
import homeBgImg from "./assets/global-foundation/home-bg.jpg";

function Home() {
  return (
    <div className="home-hero" style={{ 
      position: "relative",
      padding: "100px 5%", 
      minHeight: "75vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url(${homeBgImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
        <span className="section-label">CREATING CHANGE THAT LASTS</span>
        <h1 style={{ color: "#1E3A8A", fontSize: "42px", fontWeight: "800", margin: "15px 0", textShadow: "0 2px 4px rgba(255,255,255,0.8)" }}>
          An Eye on Need <br /><span style={{ color: "#06B6D4" }}>To Help In Deed.</span>
        </h1>
        <div style={{ color: "#111827", fontSize: "17px", maxWidth: "750px", margin: "0 auto 30px auto", lineHeight: "1.8", fontWeight: "700", textShadow: "0 1px 3px rgba(255,255,255,0.9)", textAlign: "left" }}>
          <p style={{ margin: "0 0 12px 0", textAlign: "center" }}>
            <span style={{ color: "#990000", fontWeight: "800" }}>Global Foundation</span> with a Vision to empower rural lives through a unique 360-degree development model, which covers four key thematic areas:
          </p>
          <ol style={{ margin: "0 auto", paddingLeft: "40px", display: "inline-block", textAlign: "left" }}>
            <li>Education</li>
            <li>Water & Sanitation</li>
            <li>Health & Nutrition</li>
            <li>Economic Development</li>
          </ol>
        </div>
        <div className="home-buttons" style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <Link to="/about" className="primary-button">Discover Our Mission</Link>
          <Link to="/contact" style={{ background: "#FFFFFF", color: "#1E3A8A", border: "1px solid #D1D5DB", padding: "12px 24px", borderRadius: "12px", fontWeight: "700", textDecoration: "none" }}>Get Involved</Link>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav>
      <Link to="/" className="nav-logo" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
        <img 
          src={logoImg} 
          alt="Global Foundation Logo" 
          style={{ width: "42px", height: "42px", objectFit: "cover", borderRadius: "50%" }} 
        />
        <span style={{ color: "#990000", fontSize: "20px", fontWeight: "800" }}>Global Foundation</span>
      </Link>

      <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/founders">Founders</Link></li>
        <li><Link to="/project-directors">Project Directors</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/impact">Impact</Link></li>
        <li><Link to="/transparency">Certifications</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Link to="/contact" className="primary-button desktop-cta" style={{ padding: "10px 20px", fontSize: "14px" }}>
          Get Involved
        </Link>
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </nav>
  );
}

const popupData = [
  {
    tag: "ADOPT A CHILD",
    title: "Adopt & Shelter a Child",
    desc: "Give a vulnerable child a secure home, love, and a promising tomorrow. Change a life today!",
    icon: <Heart size={16} />
  },
  {
    tag: "SUPPORT EDUCATION",
    title: "Support Child Education",
    desc: "Sponsor books, school supplies, and tuition fees to build a brighter academic future.",
    icon: <BookOpen size={16} />
  },
  {
    tag: "HEALTH & NUTRITION",
    title: "Donate for Child Nutrition",
    desc: "Ensure healthy meals and medical care for growing kids who need our support the most.",
    icon: <Utensils size={16} />
  },
  {
    tag: "EMPOWER A FUTURE",
    title: "Be Their Guardian Angel",
    desc: "Your recurring contributions provide long-term stability, guidance, and community care.",
    icon: <ShieldCheck size={16} />
  }
];

function ActionPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();

  const isContactPage = location.pathname === "/contact";

  useEffect(() => {
    if (isContactPage) {
      setIsOpen(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen || isContactPage) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % popupData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isOpen, isContactPage]);

  if (isContactPage || !isOpen) return null;

  const currentPopup = popupData[currentIndex];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ duration: 0.4 }}
        className="action-popup"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "320px",
          background: "#FFFFFF",
          borderRadius: "24px",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.18)",
          border: "2px solid #FED7AA",
          zIndex: 1000,
          overflow: "hidden",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div style={{
          background: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)",
          padding: "16px 20px",
          borderBottom: "1px solid #FED7AA",
          position: "relative"
        }}>
          <button 
            onClick={() => setIsOpen(false)}
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              background: "#FFFFFF",
              border: "1px solid #FDBA74",
              borderRadius: "50%",
              width: "26px",
              height: "26px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#C2410C",
              cursor: "pointer"
            }}
          >
            <X size={14} />
          </button>
          <span style={{
            background: "#EA580C",
            color: "#FFFFFF",
            fontSize: "11px",
            fontWeight: "800",
            padding: "3px 10px",
            borderRadius: "12px",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            marginBottom: "6px"
          }}>
            <Sparkles size={12} /> {currentPopup.tag}
          </span>
          <h3 style={{ color: "#1E3A8A", fontSize: "17px", fontWeight: "800", margin: 0 }}>
            {currentPopup.title}
          </h3>
        </div>

        <div style={{ padding: "18px 20px" }}>
          <p style={{ color: "#4B5563", fontSize: "13px", lineHeight: "1.5", margin: "0 0 16px 0", minHeight: "40px" }}>
            {currentPopup.desc}
          </p>
          
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              width: "100%",
              background: "linear-gradient(135deg, #EA580C 0%, #C2410C 100%)",
              color: "#FFFFFF",
              padding: "11px 0",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: "700",
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(234, 88, 12, 0.3)"
            }}
          >
            {currentPopup.icon} Get Involved Now
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/founders" element={<Founders />} />
            <Route path="/project-directors" element={<ProjectDirectors />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/transparency" element={<Transparency />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <ActionPopup />

        <footer className="footer" style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #172554 100%)", color: "#FFFFFF", padding: "70px 5% 30px 5%", borderTop: "4px solid #06B6D4" }}>
          <div className="footer-container" style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px", marginBottom: "40px" }}>
            <div className="footer-col">
              <h3 style={{ fontSize: "22px", fontWeight: "800", marginBottom: "16px", color: "#990000" }}>Global Foundation</h3>
              <p style={{ color: "#93C5FD", fontSize: "14px", lineHeight: "1.7" }}>
                Working towards empowering rural lives through a unique 360-degree development model, covering education, water & sanitation, health & nutrition, and economic development.
              </p>
            </div>
            <div className="footer-col">
              <h4 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "16px", color: "#06B6D4" }}>Quick Links</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li><Link to="/about" style={{ color: "#93C5FD", textDecoration: "none", fontSize: "14px" }}>About Us</Link></li>
                <li><Link to="/founders" style={{ color: "#93C5FD", textDecoration: "none", fontSize: "14px" }}>Founders</Link></li>
                <li><Link to="/project-directors" style={{ color: "#93C5FD", textDecoration: "none", fontSize: "14px" }}>Project Directors</Link></li>
                <li><Link to="/projects" style={{ color: "#93C5FD", textDecoration: "none", fontSize: "14px" }}>Projects</Link></li>
                <li><Link to="/transparency" style={{ color: "#93C5FD", textDecoration: "none", fontSize: "14px" }}>Certifications & Transparency</Link></li>
                <li><Link to="/contact" style={{ color: "#93C5FD", textDecoration: "none", fontSize: "14px" }}>Contact Us</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "16px", color: "#06B6D4" }}>Contact Office</h4>
              <p style={{ color: "#93C5FD", fontSize: "14px", lineHeight: "1.6", marginBottom: "10px" }}>
                H no 3-11-472, 2nd Floor, Siva Ganga Colony, LB Nagar, 500072
              </p>
              <p style={{ color: "#93C5FD", fontSize: "14px", marginBottom: "6px" }}><strong>Phone:</strong> +91 7989090963, 9177547164, 040 45709661</p>
              <p style={{ color: "#93C5FD", fontSize: "14px" }}><strong>Email:</strong> globalfoundation083@gmail.com</p>
            </div>
          </div>
          <div className="footer-bottom" style={{ maxWidth: "1280px", margin: "0 auto", borderTop: "1px solid rgba(255, 255, 255, 0.15)", paddingTop: "25px", textAlign: "center", fontSize: "13px", color: "#93C5FD" }}>
            <p>&copy; 2026 <span style={{ color: "#990000", fontWeight: "700" }}>Global Foundation</span>. Regd. No. 1083/2021. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;