import React from "react";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Droplets, 
  HeartPulse, 
  Users, 
  HandHeart, 
  Home, 
  Baby, 
  Heart, 
  Sparkles, 
  Leaf, 
  ArrowRight 
} from "lucide-react";

const categoriesList = [
  { title: "Education", icon: GraduationCap, slug: "education", desc: "Shaping children's futures through learning and skill access.", color: "#2563EB", bg: "#EFF6FF" },
  { title: "Water & Sanitation", icon: Droplets, slug: "water-sanitation", desc: "Safe drinking water and hygienic facilities for rural areas.", color: "#06B6D4", bg: "#ECFEFF" },
  { title: "Health & Nutrition", icon: HeartPulse, slug: "health-nutrition", desc: "Healthcare and nutritional support for vulnerable communities.", color: "#10B981", bg: "#ECFDF5" },
  { title: "Economic Development", icon: Users, slug: "economic-development", desc: "Livelihoods, skill training, and financial independence.", color: "#F59E0B", bg: "#FEF3C7" },
  { title: "Widow Women Welfare", icon: HandHeart, slug: "widow-women-welfare", desc: "Dignity, financial aid, and counseling for women.", color: "#EC4899", bg: "#FCE7F3" },
  { title: "Elderly & Old Age Care", icon: Home, slug: "elderly", desc: "Healthcare, housing, and companionship for senior citizens.", color: "#D97706", bg: "#FEF3C7" },
  { title: "Orphans & Special Children", icon: Baby, slug: "orphans-special-children", desc: "Care, rehabilitation, and inclusive opportunities.", color: "#3B82F6", bg: "#EFF6FF" },
  { title: "Animal Welfare", icon: Heart, slug: "animal-welfare", desc: "Rescue, medical care, and humane treatment of animals.", color: "#F43F5E", bg: "#FFE4E6" },
  { title: "Farmers Welfare", icon: Sparkles, slug: "farmers-welfare", desc: "Sustainable agriculture and rural productivity support.", color: "#059669", bg: "#ECFDF5" },
  { title: "Environment", icon: Leaf, slug: "environment", desc: "Conservation, habitat protection, and sustainable practices.", color: "#16A34A", bg: "#DCFCE7" }
];

function Categories() {
  return (
    <div className="categories-page" style={{ padding: "40px 5% 80px 5%", maxWidth: "1280px", margin: "0 auto" }}>
      <section className="categories-hero" style={{ marginBottom: "40px" }}>
        <span className="section-label">FOCUS CATEGORIES</span>
        <h1>Our Core <span>Areas of Action</span></h1>
        <p>
          Global Foundation operates across 10 vital sectors to ensure a complete, 360-degree approach to community transformation.
        </p>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
        {categoriesList.map((cat) => {
          const Icon = cat.icon;
          return (
            <div key={cat.slug} style={{ background: "#FFFFFF", padding: "28px", borderRadius: "16px", border: "1px solid #E5E7EB", boxShadow: "0 10px 25px rgba(0,0,0,0.04)" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: cat.bg, color: cat.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <Icon size={24} />
              </div>
              <h3 style={{ color: "#1E3A8A", fontSize: "20px", marginBottom: "8px" }}>{cat.title}</h3>
              <p style={{ color: "#4B5563", fontSize: "14px", marginBottom: "16px" }}>{cat.desc}</p>
              <Link to={`/projects/${cat.slug}`} style={{ color: cat.color, textDecoration: "none", fontWeight: "600", fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;