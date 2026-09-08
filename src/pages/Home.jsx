import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, GraduationCap, Droplets, HeartPulse, Users, Leaf, Sparkles } from "lucide-react";

function Home() {
  return (
    <div className="home-page" style={{ padding: "40px 5% 80px 5%", maxWidth: "1280px", margin: "0 auto" }}>
      {/* Hero Section - Fully Centered Layout */}
      <section style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        textAlign: "center", 
        marginBottom: "60px",
        maxWidth: "900px",
        margin: "0 auto 60px auto"
      }}>
        <span className="section-label">CREATING CHANGE THAT LASTS</span>

        {/* Animated Pop-up Mission Quote Banner */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          style={{ 
            background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)", 
            border: "2px solid #3B82F6", 
            borderRadius: "24px", 
            padding: "26px 30px", 
            margin: "15px 0 25px 0",
            width: "100%",
            boxShadow: "0 20px 40px rgba(37, 99, 235, 0.15)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", color: "#2563EB", fontSize: "12px", fontWeight: "800", letterSpacing: "1px", marginBottom: "8px" }}>
            <Sparkles size={16} /> CORE GUIDING PRINCIPLE
          </div>
          <h1 style={{ color: "#1E3A8A", fontSize: "42px", lineHeight: "1.2", margin: 0, fontWeight: "900" }}>
            An Eye on Need <br />
            <span style={{ color: "#06B6D4" }}>To Help In Deed.</span>
          </h1>
        </motion.div>

        {/* Intro Paragraph */}
        <p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.7", marginBottom: "25px", fontWeight: "600", maxWidth: "800px" }}>
          <span style={{ color: "#990000", fontWeight: "800" }}>Global Foundation</span> with a Vision to empower rural lives through a unique 360-degree development model, which covers four key thematic areas:
        </p>

        {/* Centered Four Points Box */}
        <div style={{ 
          background: "#FFFFFF", 
          padding: "28px 40px", 
          borderRadius: "20px", 
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)", 
          border: "1px solid #BFDBFE", 
          textAlign: "left", 
          marginBottom: "30px",
          width: "100%",
          maxWidth: "450px"
        }}>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            <li style={{ fontSize: "16px", fontWeight: "700", color: "#1E3A8A", display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ width: "26px", height: "26px", borderRadius: "8px", background: "#EFF6FF", color: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>1</span> Education
            </li>
            <li style={{ fontSize: "16px", fontWeight: "700", color: "#1E3A8A", display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ width: "26px", height: "26px", borderRadius: "8px", background: "#ECFEFF", color: "#06B6D4", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>2</span> Water & Sanitation
            </li>
            <li style={{ fontSize: "16px", fontWeight: "700", color: "#1E3A8A", display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ width: "26px", height: "26px", borderRadius: "8px", background: "#ECFDF5", color: "#10B981", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>3</span> Health & Nutrition
            </li>
            <li style={{ fontSize: "16px", fontWeight: "700", color: "#1E3A8A", display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ width: "26px", height: "26px", borderRadius: "8px", background: "#FEF3C7", color: "#F59E0B", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>4</span> Economic Development
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <Link to="/projects" className="primary-button">
            Discover Our Mission <ArrowRight size={16} />
          </Link>
          <Link to="/contact" style={{ padding: "12px 24px", borderRadius: "12px", border: "1px solid #FED7AA", color: "#1E3A8A", fontWeight: "700", textDecoration: "none", background: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)", display: "inline-flex", alignItems: "center", gap: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
            <Heart size={16} color="#EA580C" /> Be Part of the Change
          </Link>
        </div>
      </section>

      {/* Quick sector pills bar */}
      <section style={{ background: "#FFFFFF", padding: "20px 30px", borderRadius: "20px", border: "1px solid #E5E7EB", boxShadow: "0 10px 25px rgba(0,0,0,0.03)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", flexWrap: "wrap", marginBottom: "60px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#EFF6FF", color: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center" }}><GraduationCap size={18} /></div>
          <span style={{ fontWeight: "800", fontSize: "14px", color: "#1E3A8A" }}>Education For All</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#ECFEFF", color: "#06B6D4", display: "flex", alignItems: "center", justifyContent: "center" }}><Droplets size={18} /></div>
          <span style={{ fontWeight: "800", fontSize: "14px", color: "#1E3A8A" }}>Clean Water & Sanitation</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#ECFDF5", color: "#10B981", display: "flex", alignItems: "center", justifyContent: "center" }}><HeartPulse size={18} /></div>
          <span style={{ fontWeight: "800", fontSize: "14px", color: "#1E3A8A" }}>Health & Nutrition</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#FEF3C7", color: "#F59E0B", display: "flex", alignItems: "center", justifyContent: "center" }}><Users size={18} /></div>
          <span style={{ fontWeight: "800", fontSize: "14px", color: "#1E3A8A" }}>Economic Development</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#DCFCE7", color: "#16A34A", display: "flex", alignItems: "center", justifyContent: "center" }}><Leaf size={18} /></div>
          <span style={{ fontWeight: "800", fontSize: "14px", color: "#1E3A8A" }}>Sustainable Future</span>
        </div>
      </section>
    </div>
  );
}

export default Home;