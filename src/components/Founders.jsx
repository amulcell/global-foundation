import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award } from "lucide-react";

import josephImg from "../founder-photos/joseph.jpg";
import vamshiImg from "../founder-photos/vamshi.jpg";
import nishanthImg from "../founder-photos/nishanth.jpg";
import jayaImg from "../founder-photos/jaya.jpg";
import suhasaniImg from "../founder-photos/suhasani.jpg";

const leadershipTeam = [
  {
    name: "Mr. M. Joseph Shalem Raj",
    role: "Founder & President",
    experience: "15+ Years of Experience",
    bio: "Mr. M. Joseph Shalem Raj is a well-experienced and qualified professional who has more than 15 years of experience, holding versatile knowledge in his respective domain.",
    image: josephImg,
    bg: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)",
    border: "#FED7AA",
    badgeBg: "#FFF7ED",
    badgeColor: "#EA580C"
  },
  {
    name: "Mr. R. Vamshi Pratap",
    role: "Vice President",
    experience: "12+ Years of Experience",
    bio: "Mr. R. Vamshi Pratap is a well-experienced and qualified professional who has more than 12 years of experience, holding versatile knowledge in his respective domain.",
    image: vamshiImg,
    bg: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
    border: "#BFDBFE",
    badgeBg: "#EFF6FF",
    badgeColor: "#2563EB"
  },
  {
    name: "Mr. K. Nishanth",
    role: "General Secretary",
    experience: "6+ Years of Experience",
    bio: "Mr. K. Nishanth is a well-experienced and qualified professional who has more than 6 years of experience, holding versatile knowledge in his respective domain.",
    image: nishanthImg,
    bg: "linear-gradient(135deg, #FEFCE8 0%, #FEF08A 100%)",
    border: "#FEF08A",
    badgeBg: "#FEFCE8",
    badgeColor: "#CA8A04"
  },
  {
    name: "Mrs. M. Jaya Kumari",
    role: "Treasurer",
    experience: "12+ Years of Experience",
    bio: "Mrs. M. Jaya Kumari is a well-experienced and qualified professional who has more than 12 years of experience, holding versatile knowledge in her respective domain.",
    image: jayaImg,
    bg: "linear-gradient(135deg, #F0FDFA 0%, #CCFBF1 100%)",
    border: "#99F6E4",
    badgeBg: "#F0FDFA",
    badgeColor: "#0D9488"
  },
  {
    name: "Mr. G. Charolet Suhasani",
    role: "Joint Secretary",
    experience: "4+ Years of Experience",
    bio: "Mr. G. Charolet Suhasani is a well-experienced and qualified professional who has more than 4 years of experience, holding versatile knowledge in their respective domain.",
    image: suhasaniImg,
    bg: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)",
    border: "#DDD6FE",
    badgeBg: "#F5F3FF",
    badgeColor: "#7C3AED"
  }
];

function Founders() {
  return (
    <div className="founders-page" style={{ padding: "40px 5% 80px 5%", maxWidth: "1280px", margin: "0 auto" }}>
      {/* President's Message Section */}
      <section style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #ECFEFF 100%)", padding: "50px 40px", borderRadius: "28px", border: "1px solid #BFDBFE", marginBottom: "60px" }}>
        <span className="section-label">FOUNDER'S NOTE</span>
        <h1 style={{ color: "#1E3A8A", fontSize: "38px", fontWeight: "800", margin: "10px 0 5px 0" }}>
          M. Joseph Shalem Raj
        </h1>
        <h3 style={{ color: "#06B6D4", fontSize: "20px", fontWeight: "700", marginBottom: "20px" }}>
          Founder & President
        </h3>
        <p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px", fontWeight: "600" }}>
          It’s our unshakeable belief that India will never achieve its true growth story until the rural sector of the country is empowered to make choices and transform their own lives. With this thought, we initiated SHARE (Society to Heal Aid Restore Educate) 15 years ago. Today SHARE has metamorphosed into the <span style={{ color: "#990000", fontWeight: "800" }}>GLOBAL Foundation</span> with a mission to empower 1 million lives in 5 years through 360-degree development across Education, water & sanitation, health & nutrition and Economic Development. Our aim is to create a model for development that can be replicated at scale across India and perhaps the world.
        </p>
        <p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px", fontWeight: "600" }}>
          While we, with our 100+ strong team at the <span style={{ color: "#990000", fontWeight: "800" }}>GLOBAL Foundation</span>, strive hard to find and execute solutions to the multiple challenges Rural India faces, we'd be happier if we don't achieve our goal alone. We believe in a collaborative model and work with multiple partners which include NGOs, other foundations, the government and corporate. We at the <span style={{ color: "#990000", fontWeight: "800" }}>GLOBAL Foundation</span> are committed and raring to go. We aren't naïve about the task we've set but are determined to create communities that will have the ability to contribute substantially to India's growth story.
        </p>
        <p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px", fontWeight: "600" }}>
          We have always dreamt of One India, an India where the Urban – Rural divide doesn't exist. We hope that you will pledge your support to the <span style={{ color: "#990000", fontWeight: "800" }}>GLOBAL Foundation</span>, to our Rural communities. Pledge to support their dreams with the same passion as we pursue our own. Pledge to become a part of their world and welcome them to ours.
        </p>

        <div style={{ background: "#FFFFFF", padding: "24px", borderRadius: "20px", border: "1px solid #E5E7EB", marginTop: "30px", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "20px", textAlign: "center" }}>
          <div>
            <h4 style={{ color: "#2563EB", fontSize: "18px", fontWeight: "700", marginBottom: "4px" }}>If not now, then when?</h4>
          </div>
          <div>
            <h4 style={{ color: "#06B6D4", fontSize: "18px", fontWeight: "700", marginBottom: "4px" }}>If not here, then where?</h4>
          </div>
          <div>
            <h4 style={{ color: "#10B981", fontSize: "18px", fontWeight: "700", marginBottom: "4px" }}>If not you, then who?</h4>
          </div>
        </div>
      </section>

      {/* Leadership & Core Values */}
      <section style={{ background: "linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)", padding: "40px", borderRadius: "24px", border: "1px solid #BBF7D0", boxShadow: "0 10px 25px rgba(0,0,0,0.03)", marginBottom: "60px" }}>
        <span className="section-label" style={{ color: "#059669" }}>OUR COMMITMENT</span>
        <h2 style={{ color: "#1E3A8A", fontSize: "28px", fontWeight: "800", marginBottom: "24px" }}>Governance & Philosophy</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", color: "#334155", fontSize: "15px", lineHeight: "1.7", fontWeight: "600" }}>
          <p>At the <span style={{ color: "#990000", fontWeight: "800" }}>GLOBAL Foundation</span> we are committed firstly to excellence, setting the highest benchmarks for ourselves and our partners to ensure the best available practices and services for our <span style={{ color: "#990000", fontWeight: "800" }}>GLOBAL</span> communities.</p>
          <p>We believe in the Education standards of integrity and accountability at every instance in our dealing within ourselves, with our partners and our <span style={{ color: "#990000", fontWeight: "800" }}>GLOBAL</span> communities. Transparency and good governance are natural corollaries.</p>
          <p>We are a people first organization strongly believing in team work, personal development, diversity and leadership across all stakeholders.</p>
          <p>We believe in creating growth through socially and environmentally conscious behavior every step of the way.</p>
          <p>We believe in creating a can do attitude built through an atmosphere of passion and joy internally and with our partners and in our communities. We believe that with passion, commitment and planning no problem is unsolvable.</p>
          <p>This can do attitude is the heritage we want to leave in our Communities when we exit.</p>
        </div>
      </section>

      {/* Leadership Profiles Grid */}
      <section>
        <div style={{ marginBottom: "30px" }}>
          <span className="section-label">EXECUTIVE TEAM</span>
          <h2 style={{ color: "#1E3A8A", fontSize: "28px", fontWeight: "800" }}>Leadership Profiles</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
          {leadershipTeam.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ background: leader.bg, borderRadius: "20px", overflow: "hidden", border: `1px solid ${leader.border}`, boxShadow: "0 10px 25px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column" }}
            >
              <div style={{ height: "260px", overflow: "hidden", background: "#F1F5F9" }}>
                <img src={leader.image} alt={leader.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "24px", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: "20px", background: leader.badgeBg, color: leader.badgeColor, fontSize: "12px", fontWeight: "700", marginBottom: "10px" }}>
                    {leader.role}
                  </span>
                  <h3 style={{ color: "#1E3A8A", fontSize: "20px", fontWeight: "800", marginBottom: "4px" }}>{leader.name}</h3>
                  <p style={{ color: "#D97706", fontSize: "13px", fontWeight: "700", marginBottom: "12px" }}>{leader.experience}</p>
                  <p style={{ color: "#334155", fontSize: "14px", lineHeight: "1.6", margin: 0, fontWeight: "600" }}>{leader.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Founders;