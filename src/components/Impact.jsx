import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Image as ImageIcon, Heart } from "lucide-react";

import p1 from "../impact-media/photo1.jpg";
import p2 from "../impact-media/photo2.jpg";
import p3 from "../impact-media/photo3.jpg";
import p4 from "../impact-media/photo4.jpg";
import p5 from "../impact-media/photo5.jpg";
import p6 from "../impact-media/photo6.jpg";

import v1 from "../impact-media/video1.mp4";
import v2 from "../impact-media/video2.mp4";
import v3 from "../impact-media/video3.mp4";
import v4 from "../impact-media/video4.mp4";
import v5 from "../impact-media/video5.mp4";
import v6 from "../impact-media/video6.mp4";

const impactMediaItems = [
  { id: 1, type: "photo", title: "Community Distribution Drive", src: p1, desc: "Reaching out to rural families and children with essential resources and support." },
  { id: 2, type: "photo", title: "Empowering Rural Lives", src: p2, desc: "Spreading happiness and smiles through our on-ground foundation initiatives." },
  { id: 3, type: "photo", title: "Educational Support & Kits", src: p3, desc: "Providing children with books, bags, and supplies for a brighter academic future." },
  { id: 4, type: "photo", title: "Grassroots Engagement", src: p4, desc: "Connecting directly with local communities to fulfill vital developmental needs." },
  { id: 5, type: "photo", title: "Nurturing Young Minds", src: p5, desc: "Creating joyful environments and opportunities for students to thrive." },
  { id: 6, type: "photo", title: "Sustainable Community Welfare", src: p6, desc: "Executing targeted 360-degree development programs across our focus regions." },
  { id: 7, type: "video", title: "Beneficiary Testimonial 1", src: v1, desc: "Real experiences and gratitude shared by members of our community." },
  { id: 8, type: "video", title: "Beneficiary Testimonial 2", src: v2, desc: "Testimonial video highlighting the impact of our educational and welfare drives." },
  { id: 9, type: "video", title: "Beneficiary Testimonial 3", src: v3, desc: "Capturing the joy and positive change brought to children and families." },
  { id: 10, type: "video", title: "Beneficiary Testimonial 4", src: v4, desc: "Direct feedback from our on-ground donation and support programs." },
  { id: 11, type: "video", title: "Beneficiary Testimonial 5", src: v5, desc: "Sharing stories of hope, growth, and empowerment." },
  { id: 12, type: "video", title: "Beneficiary Testimonial 6", src: v6, desc: "Community members expressing appreciation for our 360-degree model." }
];

function Impact() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredMedia = impactMediaItems.filter(item => {
    if (activeTab === "all") return true;
    return item.type === activeTab;
  });

  return (
    <div className="impact-page" style={{ padding: "40px 5% 80px 5%", maxWidth: "1280px", margin: "0 auto" }}>
      
      {/* Top Section: Measuring Success By Lives Transformed */}
      <section style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #ECFEFF 100%)", padding: "50px 40px", borderRadius: "28px", border: "1px solid #BFDBFE", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "40px", alignItems: "center", marginBottom: "60px" }}>
        <div>
          <span className="section-label">OUR IMPACT</span>
          <h1 style={{ color: "#1E3A8A", fontSize: "36px", fontWeight: "800", lineHeight: "1.2", margin: "10px 0 20px 0" }}>
            Measuring Success By <br /><span style={{ color: "#06B6D4" }}>Lives Transformed.</span>
          </h1>
          <p style={{ color: "#4B5563", fontSize: "16px", lineHeight: "1.8", marginBottom: "20px" }}>
            Through a comprehensive 360-degree approach, Global Foundation is driving measurable, positive change across rural and marginalized communities.
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", background: "#FFFFFF", borderRadius: "20px", border: "1px solid #E5E7EB", color: "#2563EB", fontSize: "14px", fontWeight: "700" }}>
            <Heart size={16} color="#06B6D4" /> Verified Grassroots Reach
          </div>
        </div>
        <div style={{ borderRadius: "20px", overflow: "hidden", height: "300px", boxShadow: "0 15px 30px rgba(0,0,0,0.08)", border: "3px solid #FFFFFF" }}>
          <img 
            src={p1} 
            alt="Global Foundation Impact" 
            style={{ width: "100%", height: "100%", objectFit: "cover" }} 
          />
        </div>
      </section>

      {/* Middle Section: Real On-Ground Impact Gallery (Photos & Testimonial Videos) */}
      <section style={{ marginBottom: "60px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px", marginBottom: "30px" }}>
          <div>
            <span className="section-label">REAL STORIES & MOMENTS</span>
            <h2 style={{ color: "#1E3A8A", fontSize: "28px", fontWeight: "800", margin: "5px 0 0 0" }}>
              On-Ground Donations & Happy Smiles
            </h2>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button 
              onClick={() => setActiveTab("all")} 
              style={{ padding: "8px 16px", borderRadius: "10px", border: "1px solid #D1D5DB", background: activeTab === "all" ? "#1E3A8A" : "#FFFFFF", color: activeTab === "all" ? "#FFFFFF" : "#374151", fontWeight: "700", cursor: "pointer", fontSize: "13px" }}
            >
              All Media
            </button>
            <button 
              onClick={() => setActiveTab("photo")} 
              style={{ padding: "8px 16px", borderRadius: "10px", border: "1px solid #D1D5DB", background: activeTab === "photo" ? "#1E3A8A" : "#FFFFFF", color: activeTab === "photo" ? "#FFFFFF" : "#374151", fontWeight: "700", cursor: "pointer", fontSize: "13px" }}
            >
              Photos
            </button>
            <button 
              onClick={() => setActiveTab("video")} 
              style={{ padding: "8px 16px", borderRadius: "10px", border: "1px solid #D1D5DB", background: activeTab === "video" ? "#1E3A8A" : "#FFFFFF", color: activeTab === "video" ? "#FFFFFF" : "#374151", fontWeight: "700", cursor: "pointer", fontSize: "13px" }}
            >
              Testimonial Videos
            </button>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px" }}>
          {filteredMedia.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              style={{ background: "#FFFFFF", borderRadius: "20px", overflow: "hidden", border: "1px solid #E5E7EB", boxShadow: "0 10px 25px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column" }}
            >
              <div style={{ height: "220px", position: "relative", overflow: "hidden", background: "#F1F5F9" }}>
                {item.type === "video" ? (
                  <video src={item.src} controls style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <img src={item.src} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                )}
                <div style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)", padding: "6px 10px", borderRadius: "20px", color: "#FFFFFF", fontSize: "11px", fontWeight: "700", display: "flex", alignItems: "center", gap: "4px", pointerEvents: "none" }}>
                  {item.type === "video" ? <Play size={12} fill="#FFFFFF" /> : <ImageIcon size={12} />}
                  {item.type.toUpperCase()}
                </div>
              </div>
              <div style={{ padding: "20px", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <h3 style={{ color: "#1E3A8A", fontSize: "18px", fontWeight: "800", marginBottom: "8px" }}>{item.title}</h3>
                  <p style={{ color: "#4B5563", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom Section: The 360° Model & Why Our Approach Works */}
      <section style={{ background: "linear-gradient(135deg, #FEF3C7 0%, #FFFBEB 100%)", padding: "50px 40px", borderRadius: "28px", border: "1px solid #FDE68A", display: "flex", flexDirection: "column", gap: "20px" }}>
        <span className="section-label" style={{ color: "#D97706" }}>THE 360° MODEL</span>
        <h2 style={{ color: "#1E3A8A", fontSize: "28px", fontWeight: "800", margin: 0 }}>Why Our Approach Works</h2>
        <p style={{ color: "#4B5563", fontSize: "16px", lineHeight: "1.8", maxWidth: "800px", margin: 0 }}>
          True empowerment does not happen in isolation. By tackling education, health, water access, economic development, and social welfare simultaneously, we create self-sustaining communities capable of long-term growth.
        </p>
        <div>
          <Link to="/projects" className="primary-button" style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", marginTop: "10px" }}>
            Explore All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Impact;