import React from "react";
import { motion } from "framer-motion";
import { Images, ArrowRight, ShieldCheck } from "lucide-react";
import { projectImages } from "../data/projectImages";

const galleryCategories = [
  { title: "Education Initiative", category: "Education", image: projectImages.education, color: "#2563EB", bg: "#EFF6FF" },
  { title: "Water & Sanitation Drive", category: "Water & Sanitation", image: projectImages["water-sanitation"], color: "#06B6D4", bg: "#ECFEFF" },
  { title: "Health & Nutrition Camp", category: "Health & Nutrition", image: projectImages["health-nutrition"], color: "#10B981", bg: "#ECFDF5" },
  { title: "Economic Development Program", category: "Economic Development", image: projectImages["economic-development"], color: "#F59E0B", bg: "#FEF3C7" },
  { title: "Widow Women Welfare Support", category: "Widow Women Welfare", image: projectImages["widow-women-welfare"], color: "#EC4899", bg: "#FCE7F3" },
  { title: "Elderly & Old Age Care", category: "Elderly Care", image: projectImages.elderly, color: "#D97706", bg: "#FEF3C7" },
  { title: "Orphans & Special Children", category: "Special Support", image: projectImages["orphans-special-children"], color: "#3B82F6", bg: "#EFF6FF" },
  { title: "Animal Welfare Program", category: "Animal Welfare", image: projectImages["animal-welfare"], color: "#F43F5E", bg: "#FFE4E6" },
  { title: "Farmers Welfare Initiative", category: "Farmers Welfare", image: projectImages["farmers-welfare"], color: "#059669", bg: "#ECFDF5" },
  { title: "Environmental Protection", category: "Environment", image: projectImages.environment, color: "#16A34A", bg: "#DCFCE7" },
];

function Gallery() {
  return (
    <div className="gallery-page" style={{ padding: "40px 5% 80px 5%", maxWidth: "1280px", margin: "0 auto" }}>
      <section className="gallery-hero" style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #ECFEFF 100%)", padding: "50px 40px", borderRadius: "28px", border: "1px solid #BFDBFE", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "40px", alignItems: "center", marginBottom: "60px" }}>
        <div>
          <span className="section-label">OUR GALLERY</span>
          <h1 style={{ color: "#1E3A8A", fontSize: "40px", fontWeight: "800", lineHeight: "1.2", margin: "12px 0" }}>
            Moments That <span style={{ color: "#06B6D4" }}>Create Impact.</span>
          </h1>
          <p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.7", marginBottom: "24px", fontWeight: "600" }}>
            Explore real photographs and visual snapshots from our 10 core project areas showcasing our community initiatives and ground activities.
          </p>
          <div style={{ display: "flex", gap: "16px" }}>
            <div style={{ background: "#FFFFFF", padding: "10px 18px", borderRadius: "12px", display: "flex", alignItems: "center", gap: "8px", fontWeight: "700", color: "#1E3A8A", fontSize: "14px", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
              <ShieldCheck size={18} color="#2563EB" /> Field Operations Visuals
            </div>
          </div>
        </div>
        <div style={{ borderRadius: "20px", overflow: "hidden", height: "260px", boxShadow: "0 15px 30px rgba(0,0,0,0.08)", border: "3px solid #FFFFFF" }}>
          <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1000&q=80" alt="Global Foundation Gallery Hero" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </section>

      <section className="gallery-section">
        <div className="gallery-heading" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
          <div>
            <span className="section-label">PROJECT SNAPSHOTS</span>
            <h2 style={{ color: "#1E3A8A", fontSize: "28px", fontWeight: "800" }}>10 Core Project Galleries</h2>
          </div>
          <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "#ECFDF5", color: "#10B981", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Images size={24} />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {galleryCategories.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              style={{ background: item.bg, borderRadius: "16px", overflow: "hidden", border: `1px solid ${item.color}33`, boxShadow: "0 10px 25px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
            >
              <div>
                <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                  <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "24px" }}>
                  <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: "20px", background: "#FFFFFF", color: item.color, fontSize: "12px", fontWeight: "700", marginBottom: "10px", boxShadow: "0 2px 6px rgba(0,0,0,0.04)" }}>
                    {item.category}
                  </span>
                  <h3 style={{ color: "#1E3A8A", fontSize: "20px", marginBottom: "10px", fontWeight: "800" }}>{item.title}</h3>
                  <p style={{ color: "#334155", fontSize: "14px", marginBottom: "0", lineHeight: "1.6", fontWeight: "600" }}>Real photographs and moments captured during our field operations.</p>
                </div>
              </div>
              <div style={{ padding: "0 24px 24px 24px" }}>
                <span style={{ color: item.color, fontSize: "14px", fontWeight: "800", display: "inline-flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
                  View Photos <ArrowRight size={16} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gallery;