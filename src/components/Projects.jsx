import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Droplets, HeartPulse, TrendingUp, Users, Shield, Award, Sparkles } from "lucide-react";
import { projectImages } from "../data/projectImages";

const projectSectors = [
  { 
    id: "education", 
    title: "Education Initiative", 
    icon: BookOpen, 
    image: projectImages.education, 
    color: "#2563EB", 
    bg: "#EFF6FF", 
    desc: "Education plays a pivotal role in shaping the future of the children’s. India has one of the largest education systems in the world. However, there are numerous challenges that hinder the access and quality of education for many children, particularly those in marginalized communities. Education have emerged as pillars that work tirelessly to change the education landscape in India. Global Foundation explores how an education can significantly impact the lives of children and contribute to a brighter future for the nation. An education also provides support systems for girls, ensuring that they have equal access to education and are not forced into early marriages or restricted to domestic roles. Additionally, organizations can collaborate with local communities and leaders to challenge and transform deep-rooted beliefs that hinder the progress of female education. Through these efforts, an education can contribute to breaking gender stereotypes and creating a safer environment for all children to thrive academically and personally." 
  },
  { 
    id: "water-sanitation", 
    title: "Water & Sanitary", 
    icon: Droplets, 
    image: projectImages["water-sanitation"], 
    color: "#06B6D4", 
    bg: "#ECFEFF", 
    desc: "Global Foundation are an NGO that helps rural India with water and sanitation needs. We provide access to water, individual and community sanitation facilities, and also help maintain these facilities in the areas where we work." 
  },
  { 
    id: "health-nutrition", 
    title: "Health & Nutrition", 
    icon: HeartPulse, 
    image: projectImages["health-nutrition"], 
    color: "#10B981", 
    bg: "#ECFDF5", 
    desc: "Global Foundation play a vital role in addressing health and nutrition challenges, particularly in India, by implementing various programs and initiatives. These organizations focus on improving access to nutritious food, promoting healthy eating habits, and providing healthcare services, especially for children, pregnant women, and marginalized communities." 
  },
  { 
    id: "economic-development", 
    title: "Economic Development", 
    icon: TrendingUp, 
    image: projectImages["economic-development"], 
    color: "#F59E0B", 
    bg: "#FEF3C7", 
    desc: "Global Foundation has a vital role in economic development by supporting entrepreneurship, generating employment, providing skill development, and promoting microfinance initiatives, particularly in marginalized communities. They act as catalysts for growth by empowering individuals and communities, fostering inclusive and sustainable development, and addressing socio-economic challenges." 
  },
  { 
    id: "elderly", 
    title: "Elderly (Old aged People)", 
    icon: Shield, 
    image: projectImages.elderly, 
    color: "#D97706", 
    bg: "#FEF3C7", 
    desc: "Global Foundation in Hyderabad provide a range of services to support senior citizens, including healthcare, housing, and emotional well-being. The organizations often run old age homes, offer medical support, organize social activities, and advocate for the rights of the elderly." 
  },
  { 
    id: "widow-women-welfare", 
    title: "Widow Women’s Welfares", 
    icon: Users, 
    image: projectImages["widow-women-welfare"], 
    color: "#EC4899", 
    bg: "#FCE7F3", 
    desc: "Global foundation is dedicated to the welfare of widows, offering various forms of support including financial aid, skill development, legal assistance, and counselling and support through savings and loan associations." 
  },
  { 
    id: "orphans-special-children", 
    title: "Orphans, Special children’s & Disabilities", 
    icon: Award, 
    image: projectImages["orphans-special-children"], 
    color: "#3B82F6", 
    bg: "#EFF6FF", 
    desc: "Global Foundation will be supporting orphans, children with special needs, and those with disabilities, providing them with care, education, and rehabilitation. These organizations strive to improve the lives of vulnerable children by offering a range of services and resources." 
  },
  { 
    id: "animal-welfare", 
    title: "Animals Welfares", 
    icon: Sparkles, 
    image: projectImages["animal-welfare"], 
    color: "#F43F5E", 
    bg: "#FFE4E6", 
    desc: "Global foundation plays a l role in rescuing, rehabilitating, and advocating for animals. The organizations often run shelters, provide medical care, conduct sterilization programs, and work towards legal advocacy and public awareness. In Hyderabad we will take support from the organizations like the Blue Cross of Hyderabad, People for Animals, and the Telangana State Animal Welfare Board are actively involved in these efforts." 
  },
  { 
    id: "farmers-welfare", 
    title: "Farmers Welfare", 
    icon: TrendingUp, 
    image: projectImages["farmers-welfare"], 
    color: "#059669", 
    bg: "#ECFDF5", 
    desc: "Global foundation a Non-governmental organizations (NGOs) play a vital role in supporting farmers' welfare in India, particularly in areas like sustainable agriculture, access to resources, and community development. We engage with many NGOs focus on providing farmers with training, resources, and access to markets, contributing to increased crop yields and improved livelihoods." 
  },
  { 
    id: "environment", 
    title: "Environment", 
    icon: Sparkles, 
    image: projectImages.environment, 
    color: "#16A34A", 
    bg: "#DCFCE7", 
    desc: "Global foundation and Several non-governmental organizations (NGOs) in India are actively working on environmental protection and conservation. Some of the prominent ones include the Wildlife Protection Society of India (WPSI), the Environmentalist Foundation of India (EFI), and the Wildlife Trust of India (WTI). These organizations focus on various aspects of environmental conservation, such as wildlife protection, habitat restoration, and promoting sustainable practices." 
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects-page" style={{ padding: "40px 5% 80px 5%", maxWidth: "1280px", margin: "0 auto" }}>
      <section style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #ECFEFF 100%)", padding: "50px 40px", borderRadius: "28px", border: "1px solid #BFDBFE", marginBottom: "60px", textAlign: "center" }}>
        <span className="section-label">OUR CORE INITIATIVES</span>
        <h1 style={{ color: "#1E3A8A", fontSize: "38px", fontWeight: "800", margin: "10px 0 15px 0" }}>
          10 Pillars of Sustainable Development
        </h1>
        <p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.7", maxWidth: "700px", margin: "0 auto", fontWeight: "600" }}>
          Explore our comprehensive community projects designed to bring 360-degree transformation to rural lives.
        </p>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
        {projectSectors.map((project, index) => {
          const IconComponent = project.icon;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              style={{ background: project.bg, borderRadius: "20px", overflow: "hidden", border: `1px solid ${project.color}33`, boxShadow: "0 10px 25px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
            >
              <div>
                <div style={{ height: "220px", overflow: "hidden", position: "relative" }}>
                  <img src={project.image} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "24px" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#FFFFFF", color: project.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
                    <IconComponent size={22} />
                  </div>
                  <h3 style={{ color: "#1E3A8A", fontSize: "20px", fontWeight: "800", marginBottom: "10px" }}>{project.title}</h3>
                  <p style={{ color: "#334155", fontSize: "14px", lineHeight: "1.6", margin: 0, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden", fontWeight: "600" }}>{project.desc}</p>
                </div>
              </div>
              <div style={{ padding: "0 24px 24px 24px" }}>
                <button
                  onClick={() => setSelectedProject(project)}
                  style={{ background: "none", border: "none", color: project.color, fontSize: "14px", fontWeight: "800", display: "inline-flex", alignItems: "center", gap: "6px", cursor: "pointer", padding: 0 }}
                >
                  Explore Project <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {selectedProject && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: "20px" }}>
          <div style={{ background: "#FFFFFF", padding: "40px", borderRadius: "24px", maxWidth: "700px", width: "100%", maxHeight: "85vh", overflowY: "auto", position: "relative", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
            <h2 style={{ color: "#1E3A8A", fontSize: "26px", fontWeight: "800", marginBottom: "16px" }}>{selectedProject.title}</h2>
            <p style={{ color: "#334155", fontSize: "15px", lineHeight: "1.8", marginBottom: "30px", whiteSpace: "pre-line", fontWeight: "600" }}>{selectedProject.desc}</p>
            <button
              onClick={() => setSelectedProject(null)}
              style={{ background: "#1E3A8A", color: "#FFFFFF", border: "none", padding: "12px 24px", borderRadius: "12px", fontWeight: "700", cursor: "pointer" }}
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;