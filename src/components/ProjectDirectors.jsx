import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, UserPlus, Briefcase, Award } from "lucide-react";
import shivaImg from "../shiva.jpg";
import nishanthImg from "../nishanth.jpg";

const directors = [
  {
    name: "Lion Dr. Shiva Kumar Mekala",
    qualifications: "MBA, BCJ, BA",
    role: "Project Director",
    experience: "26 Years of Experience in Sales & Marketing (Telecom, Education, Automotive, Water Industry)",
    bio: [
        "Chief Administrative Manager India Operations - AASRAA (India's Largest Consumer Rights Protection Organisation)",
        "Member - All India Crime Reforms Organisation",
        "Secretary - International Human Rights & Social Justice",
        "Member - Lions Clubs International Secunderabad Club",
        "National Coordinator - Telangana Journalist & Reporters Association",
        "Secretary - Telangana Online Working Journalist Association",
        "PRO - Rera Practising Association",
        "Managing Director - SAS Enterprises"
    ],
    image: shivaImg,
    active: true,
    bg: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)",
    border: "#FED7AA",
    badgeBg: "#FFF7ED",
    badgeColor: "#EA580C"
  },
  {
    name: "K. Nishanth",
    qualifications: "MBA, M.A. (Pursuing), B.A., DCA",
    role: "Project Director",
    experience: "12+ Years of Experience in Warehouse Management, FMCG Logistics, and Data Analysis",
    bio: [
        "Positions Handled: Data Collation Analyst, Warehouse Operations Manager / Manager, Warehouse Incharge / Godown Administration Incharge, Warehouse Executive",
        "MBA (Master in Business Administration) – University of Madras, Chennai",
        "M.A. in Public Administration (Pursuing) – Osmania University, Hyderabad",
        "B.A. in Public Administration – Dr. B. R. Ambedkar Open University, Hyderabad",
        "Diploma in Computer Application (DCA) – Geeni Computers, Hyderabad"
    ],
    image: nishanthImg,
    active: true,
    bg: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
    border: "#BFDBFE",
    badgeBg: "#EFF6FF",
    badgeColor: "#2563EB"
  },
  {
    name: "To Be Announced",
    qualifications: "Incoming Leadership",
    role: "Project Director (Position 3)",
    experience: "Appointee Slot",
    bio: ["This position is currently vacant as we are in the process of appointing qualified leadership members to expand our operations."],
    image: null,
    active: false,
    bg: "linear-gradient(135deg, #FEFCE8 0%, #FEF08A 100%)",
    border: "#FEF08A",
    badgeBg: "#FEFCE8",
    badgeColor: "#CA8A04"
  },
  {
    name: "To Be Announced",
    qualifications: "Incoming Leadership",
    role: "Project Director (Position 4)",
    experience: "Appointee Slot",
    bio: ["This position is currently vacant as we are in the process of appointing qualified leadership members to expand our operations."],
    image: null,
    active: false,
    bg: "linear-gradient(135deg, #F0FDFA 0%, #CCFBF1 100%)",
    border: "#99F6E4",
    badgeBg: "#F0FDFA",
    badgeColor: "#0D9488"
  },
  {
    name: "To Be Announced",
    qualifications: "Incoming Leadership",
    role: "Project Director (Position 5)",
    experience: "Appointee Slot",
    bio: ["This position is currently vacant as we are in the process of appointing qualified leadership members to expand our operations."],
    image: null,
    active: false,
    bg: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)",
    border: "#DDD6FE",
    badgeBg: "#F5F3FF",
    badgeColor: "#7C3AED"
  }
];

function ProjectDirectors() {
  return (
    <div className="project-directors-page" style={{ padding: "40px 5% 80px 5%", maxWidth: "1280px", margin: "0 auto" }}>
      {/* Hero Section */}
      <section style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #ECFEFF 100%)", padding: "50px 40px", borderRadius: "28px", border: "1px solid #BFDBFE", marginBottom: "60px", textAlign: "center" }}>
        <span className="section-label">EXECUTIVE LEADERSHIP</span>
        <h1 style={{ color: "#1E3A8A", fontSize: "38px", fontWeight: "800", margin: "10px 0 15px 0" }}>
          Project Directors Board
        </h1>
        <p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.7", maxWidth: "700px", margin: "0 auto", fontWeight: "600" }}>
          Meet our esteemed Project Directors spearheading strategic initiatives and driving sustainable community transformation across all regional and national operations.
        </p>
      </section>

      {/* Directors Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "30px" }}>
        {directors.map((director, index) => (
          <motion.div
            key={director.name + index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ 
              background: director.bg, 
              borderRadius: "20px", 
              overflow: "hidden", 
              border: `1px solid ${director.border}`, 
              boxShadow: "0 10px 25px rgba(0,0,0,0.03)", 
              display: "flex", 
              flexDirection: "column" 
            }}
          >
            {director.active ? (
              <div style={{ height: "300px", overflow: "hidden", background: "#F1F5F9" }}>
                <img 
                  src={director.image} 
                  alt={director.name} 
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} 
                />
              </div>
            ) : (
              <div style={{ height: "200px", background: "rgba(255,255,255,0.6)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderBottom: "1px dashed #CBD5E1", padding: "20px", textAlign: "center" }}>
                <UserPlus size={40} color="#64748B" style={{ marginBottom: "10px" }} />
                <span style={{ color: "#1E293B", fontSize: "15px", fontWeight: "700" }}>Slot Reserved for Appointee</span>
                <span style={{ color: "#64748B", fontSize: "13px", fontWeight: "600" }}>Soon to be appointed</span>
              </div>
            )}

            <div style={{ padding: "24px", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: "20px", background: director.badgeBg, color: director.badgeColor, fontSize: "12px", fontWeight: "700", marginBottom: "10px" }}>
                  {director.role}
                </span>
                <h3 style={{ color: "#1E3A8A", fontSize: "20px", fontWeight: "800", marginBottom: "4px" }}>{director.name}</h3>
                <p style={{ color: "#0284C7", fontSize: "13px", fontWeight: "700", marginBottom: "12px" }}>{director.qualifications}</p>
                
                {director.active && (
                  <p style={{ color: "#D97706", fontSize: "13px", fontWeight: "700", marginBottom: "14px", lineHeight: "1.5" }}>
                    {director.experience}
                  </p>
                )}

                <ul style={{ color: "#334155", fontSize: "13px", lineHeight: "1.6", paddingLeft: "16px", margin: 0, display: "flex", flexDirection: "column", gap: "6px", fontWeight: "600" }}>
                  {director.bio.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProjectDirectors;