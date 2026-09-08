import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
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
} from "lucide-react";

const projectDetails = {
  education: {
    number: "01",
    title: "Education",
    icon: GraduationCap,
    color: "#2563EB",
    bg: "#EFF6FF",
    text: [
      "Education plays a pivotal role in shaping the future of children.",
      "India has one of the largest education systems in the world. However, numerous challenges continue to hinder access to quality education, particularly for marginalized communities.",
      "Global Foundation explores how education can significantly impact children's lives and contribute to a brighter future.",
      "Education can support girls with equal access to learning opportunities, help prevent early marriages and restricted domestic roles, and create pathways towards independence.",
      "We also work with communities and leaders to challenge harmful beliefs, break gender stereotypes and create safer environments where children can learn and grow.",
    ],
  },
  "water-sanitation": {
    number: "02",
    title: "Water & Sanitation",
    icon: Droplets,
    color: "#06B6D4",
    bg: "#ECFEFF",
    text: [
      "Global Foundation works to support rural communities in India with better access to water and sanitation.",
      "Access to safe water is essential for healthy communities and a better quality of life.",
      "Our work focuses on supporting individual and community sanitation facilities while encouraging proper maintenance and responsible use of these essential resources.",
    ],
  },
  "health-nutrition": {
    number: "03",
    title: "Health & Nutrition",
    icon: HeartPulse,
    color: "#10B981",
    bg: "#ECFDF5",
    text: [
      "Global Foundation addresses important health and nutrition challenges faced by communities in India.",
      "Our initiatives promote nutritious food, healthy eating habits and access to healthcare.",
      "Special attention is given to children, pregnant women and marginalized communities who may face greater barriers to proper nutrition and healthcare.",
    ],
  },
  "economic-development": {
    number: "04",
    title: "Economic Development",
    icon: Users,
    color: "#F59E0B",
    bg: "#FEF3C7",
    text: [
      "Global Foundation supports economic development by creating opportunities for entrepreneurship, employment and skill development.",
      "We focus especially on marginalized communities that face socio-economic challenges.",
      "Through skills, resources and opportunities such as microfinance, our goal is to encourage sustainable livelihoods, empowerment and inclusive economic development.",
    ],
  },
  "widow-women-welfare": {
    number: "05",
    title: "Widow Women Welfare",
    icon: HandHeart,
    color: "#EC4899",
    bg: "#FCE7F3",
    text: [
      "Global Foundation works to support widow women with dignity, care and opportunities.",
      "Our support can include financial assistance, skill development, legal assistance and counselling.",
      "Savings and loan associations can also help women access financial opportunities and work towards greater independence.",
    ],
  },
  elderly: {
    number: "06",
    title: "Elderly & Old Age Care",
    icon: Home,
    color: "#D97706",
    bg: "#FEF3C7",
    text: [
      "Global Foundation works towards the wellbeing of elderly people, including senior citizens who may require additional care and support.",
      "Our focus includes healthcare, housing and emotional wellbeing.",
      "Old age homes, medical support, social activities and awareness of senior citizens' rights can help promote dignity, companionship and a better quality of life.",
    ],
  },
  "orphans-special-children": {
    number: "07",
    title: "Orphans, Special Children & Disabilities",
    icon: Baby,
    color: "#3B82F6",
    bg: "#EFF6FF",
    text: [
      "Global Foundation supports orphans, special-needs children and people with disabilities.",
      "Our work focuses on care, education, rehabilitation and access to useful services and resources.",
      "We aim to encourage inclusion and create opportunities that help children and individuals live with greater dignity and confidence.",
    ],
  },
  "animal-welfare": {
    number: "08",
    title: "Animal Welfare",
    icon: Heart,
    color: "#F43F5E",
    bg: "#FFE4E6",
    text: [
      "Global Foundation promotes compassionate and responsible care for animals.",
      "Our animal welfare focus includes rescue, rehabilitation, shelters, medical care and sterilization initiatives.",
      "We also support awareness and advocacy efforts that encourage communities to protect animals and understand their welfare needs.",
    ],
  },
  "farmers-welfare": {
    number: "09",
    title: "Farmers Welfare",
    icon: Sparkles,
    color: "#059669",
    bg: "#ECFDF5",
    text: [
      "Global Foundation supports farmers and rural communities through sustainable agriculture and community development initiatives.",
      "Training, useful resources and better access to markets can help farmers improve agricultural productivity.",
      "Our goal is to contribute to stronger rural livelihoods and more sustainable farming communities.",
    ],
  },
  environment: {
    number: "10",
    title: "Environment",
    icon: Leaf,
    color: "#16A34A",
    bg: "#DCFCE7",
    text: [
      "Global Foundation is committed to environmental protection and conservation.",
      "Environmental initiatives can include wildlife protection, habitat restoration and awareness about sustainable practices.",
      "We believe protecting natural resources and encouraging responsible environmental practices is essential for future generations.",
    ],
  },
};

function ProjectDetails() {
  const { slug } = useParams();
  const project = projectDetails[slug];

  if (!project) {
    return (
      <section style={{ padding: "80px 5%", textAlign: "center" }}>
        <h1 style={{ color: "#1E3A8A", fontSize: "32px", marginBottom: "16px" }}>Project Not Found</h1>
        <Link to="/projects" className="primary-button">
          Back to Projects
        </Link>
      </section>
    );
  }

  const Icon = project.icon;

  return (
    <div style={{ padding: "40px 5% 80px 5%", maxWidth: "1000px", margin: "0 auto" }}>
      <div style={{ marginBottom: "30px" }}>
        <Link to="/projects" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: project.color, textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>
          <ArrowLeft size={18} /> Back to Projects
        </Link>
      </div>

      <div style={{ background: "#FFFFFF", padding: "48px", borderRadius: "20px", border: "1px solid #E5E7EB", boxShadow: "0 10px 25px rgba(0,0,0,0.04)", marginBottom: "40px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <span style={{ fontSize: "16px", fontWeight: "800", color: project.color }}>Project #{project.number}</span>
          <div style={{ width: "54px", height: "54px", borderRadius: "14px", background: project.bg, color: project.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon size={28} />
          </div>
        </div>

        <span className="section-label">FOCUS AREA</span>
        <h1 style={{ color: "#1E3A8A", fontSize: "36px", marginBottom: "30px" }}>{project.title}</h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {project.text.map((paragraph, index) => (
            <p key={index} style={{ color: "#1F2937", fontSize: "17px", lineHeight: "1.8", marginBottom: "0", fontWeight: "400" }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div style={{ background: project.bg, padding: "40px", borderRadius: "20px", border: `1px solid ${project.color}`, textAlign: "center" }}>
        <h2 style={{ color: "#1E3A8A", fontSize: "24px", marginBottom: "10px" }}>Want To Support This Cause?</h2>
        <p style={{ color: "#374151", fontSize: "16px", marginBottom: "20px", fontWeight: "500" }}>
          Every contribution, connection and helping hand can create a meaningful difference for {project.title.toLowerCase()}.
        </p>
        <Link to="/get-involved" className="primary-button">
          Get Involved
        </Link>
      </div>
    </div>
  );
}

export default ProjectDetails;