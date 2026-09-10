import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, Sparkles } from "lucide-react";
import { projectImages } from "../data/projectImages";

function DonationPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // List of paths where the popup should definitely NOT appear
  const excludedPaths = [
    "/about",
    "/founders",
    "/project-directors",
    "/projects",
    "/gallery",
    "/impact",
    "/certifications",
    "/contact",
    "/get-involved"
  ];

  const isExcluded = excludedPaths.includes(location.pathname.toLowerCase());
  const isHomePage = location.pathname === "/" && !isExcluded;

  useEffect(() => {
    // If we are on any excluded page or not home, immediately close it
    if (!isHomePage) {
      setIsVisible(false);
      return;
    }

    // 5-second timer specifically for the home page
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [location.pathname, isHomePage]);

  // Handle repeating loop every 5 seconds after close, strictly on home page
  useEffect(() => {
    if (!isHomePage || isVisible) return;

    const repeatTimer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(repeatTimer);
  }, [isVisible, isHomePage]);

  // Hard block rendering on any page except home
  if (!isHomePage || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "320px",
          background: "#FFFFFF",
          borderRadius: "24px",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
          border: "1px solid #FED7AA",
          zIndex: 1000,
          overflow: "hidden",
          fontFamily: "Arial, sans-serif"
        }}
      >
        {/* Header Photo Thumbnail */}
        <div style={{ position: "relative", height: "140px", width: "100%" }}>
          <img 
            src={projectImages["health-nutrition"]} 
            alt="Support a Child" 
            style={{ width: "100%", height: "100%", objectFit: "cover" }} 
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)"
          }} />
          <button 
            onClick={() => setIsVisible(false)}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "rgba(0,0,0,0.5)",
              border: "none",
              borderRadius: "50%",
              width: "28px",
              height: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              cursor: "pointer"
            }}
          >
            <X size={16} />
          </button>
          <span style={{
            position: "absolute",
            bottom: "10px",
            left: "14px",
            background: "#EA580C",
            color: "#FFFFFF",
            fontSize: "11px",
            fontWeight: "800",
            padding: "3px 10px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            gap: "4px"
          }}>
            <Sparkles size={12} /> MAKE A DIFFERENCE
          </span>
        </div>

        {/* Content Body */}
        <div style={{ padding: "20px" }}>
          <h3 style={{ color: "#1E3A8A", fontSize: "18px", fontWeight: "800", margin: "0 0 8px 0" }}>
            Adopt & Support a Child Today
          </h3>
          <p style={{ color: "#4B5563", fontSize: "13px", lineHeight: "1.5", margin: "0 0 16px 0" }}>
            Your small contribution can provide education, nutrition, and a brighter future. Change a life today.
          </p>
          
          <div style={{ display: "flex", gap: "10px" }}>
            <Link 
              to="/get-involved" 
              onClick={() => setIsVisible(false)}
              style={{
                flex: 1,
                background: "linear-gradient(135deg, #EA580C 0%, #C2410C 100%)",
                color: "#FFFFFF",
                textAlign: "center",
                padding: "10px 0",
                borderRadius: "12px",
                fontSize: "13px",
                fontWeight: "700",
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(234, 88, 12, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px"
              }}
            >
              <Heart size={14} /> Get Involved
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default DonationPopup;