import React from "react";
import { Link } from "react-router-dom";
import { Heart, Users, Handshake, Megaphone, ArrowRight } from "lucide-react";

const waysToHelp = [
  {
    title: "Support a Cause",
    desc: "Contribute to our education, healthcare, or water projects to directly empower rural families.",
    icon: Heart,
    color: "#EC4899",
    bg: "#FCE7F3",
  },
  {
    title: "Become a Volunteer",
    desc: "Share your time, skills, and passion on the ground with our community development initiatives.",
    icon: Users,
    color: "#2563EB",
    bg: "#EFF6FF",
  },
  {
    title: "Partner With Us",
    desc: "Collaborate as an organization, corporate sponsor, or institution to amplify community impact.",
    icon: Handshake,
    color: "#06B6D4",
    bg: "#ECFEFF",
  },
  {
    title: "Spread the Word",
    desc: "Help raise awareness about our mission and encourage others to be a part of Global Foundation.",
    icon: Megaphone,
    color: "#10B981",
    bg: "#ECFDF5",
  },
];

function GetInvolved() {
  return (
    <div className="get-involved-page" style={{ padding: "40px 5% 80px 5%", maxWidth: "1280px", margin: "0 auto" }}>
      <section className="get-involved-hero" style={{ marginBottom: "50px", textAlign: "center" }}>
        <span className="section-label">BE PART OF THE CHANGE</span>
        <h1>
          Together, We Can
          <span style={{ color: "#06B6D4" }}> Build a Better Future.</span>
        </h1>
        <p style={{ color: "#4B5563", fontSize: "16px", maxWidth: "700px", margin: "10px auto 0 auto" }}>
          True community transformation requires all of us. Explore how you can contribute, collaborate, and support our humanitarian mission.
        </p>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginBottom: "60px" }}>
        {waysToHelp.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} style={{ background: "#FFFFFF", padding: "32px", borderRadius: "16px", border: "1px solid #E5E7EB", boxShadow: "0 10px 25px rgba(0,0,0,0.04)" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: item.bg, color: item.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <Icon size={24} />
              </div>
              <h3 style={{ color: "#1E3A8A", fontSize: "20px", marginBottom: "10px" }}>{item.title}</h3>
              <p style={{ color: "#4B5563", fontSize: "14px", marginBottom: "20px" }}>{item.desc}</p>
              <Link to="/contact" style={{ color: item.color, textDecoration: "none", fontWeight: "600", fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                Get Started <ArrowRight size={14} />
              </Link>
            </div>
          );
        })}
      </div>

      <section style={{ background: "#EFF6FF", padding: "40px", borderRadius: "20px", border: "1px solid #BFDBFE", textAlign: "center" }}>
        <h2 style={{ color: "#1E3A8A", fontSize: "26px", marginBottom: "10px" }}>Have Questions or Want to Discuss a Partnership?</h2>
        <p style={{ color: "#4B5563", fontSize: "15px", marginBottom: "20px" }}>
          Our team is always open to new collaborations and supporters. Reach out to us directly.
        </p>
        <Link to="/contact" className="primary-button">
          Contact Our Team <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}

export default GetInvolved;