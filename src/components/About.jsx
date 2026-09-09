import React from "react";
import { motion } from "framer-motion";
import { Target, Compass, Flag, Award, CheckCircle2, Layers } from "lucide-react";

function About() {
  return (
    <div className="about-page" style={{ padding: "40px 5% 80px 5%", maxWidth: "1280px", margin: "0 auto" }}>
      {/* Hero Header */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px", alignItems: "center", marginBottom: "60px", background: "linear-gradient(135deg, #EFF6FF 0%, #ECFEFF 100%)", padding: "40px 20px", borderRadius: "28px", border: "1px solid #BFDBFE" }}>
        <div>
          <span className="section-label">ABOUT US</span>
          <h1 style={{ color: "#1E3A8A", fontSize: "36px", lineHeight: "1.2", margin: "15px 0", fontWeight: "800" }}>
            Change A Life, <br />
            <span style={{ color: "#06B6D4" }}>Build a Future.</span>
          </h1>
          <p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.7", marginBottom: "16px", fontWeight: "600" }}>
            <span style={{ color: "#990000", fontWeight: "800" }}>Global Foundation</span> is a non-profit organization dedicated to creating positive change in society. This work to support communities, help people in need, and address important social challenges through various initiatives and programs.
          </p>
          <p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.7", marginBottom: "24px", fontWeight: "600" }}>
            <span style={{ color: "#990000", fontWeight: "800" }}>Global Foundation</span> is committed to improving lives and building stronger communities by focusing on areas such as education, healthcare, food, shelter, community development, and humanitarian support. Through the support of volunteers, donors, and well-wishers, we strive to reach people who need help and provide them with opportunities for a better and more dignified future.
          </p>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "700", color: "#1E3A8A", fontSize: "15px" }}>
              <CheckCircle2 size={20} color="#10B981" /> Regd. No. 1083/2021
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ width: "100%", height: "300px", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.08)", border: "1px solid #E5E7EB" }}
        >
          <img src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=1000&q=80" alt="Global Foundation Rural Community Development" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </motion.div>
      </section>

      {/* Vision & Mission (Orange) */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", marginBottom: "30px" }}>
        <div style={{ background: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)", padding: "40px", borderRadius: "24px", border: "1px solid #FED7AA", boxShadow: "0 10px 25px rgba(0,0,0,0.03)" }}>
          <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "#FFFFFF", color: "#F97316", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}><Target size={28} /></div>
          <span className="section-label" style={{ color: "#EA580C" }}>VISION</span>
          <h2 style={{ color: "#1E3A8A", fontSize: "24px", margin: "10px 0 16px 0", fontWeight: "800" }}>Our Vision</h2>
          <p style={{ color: "#334155", fontSize: "15px", lineHeight: "1.7", margin: 0, fontWeight: "600" }}>
            <span style={{ color: "#990000", fontWeight: "800" }}>Global Foundation</span> with a Vision to empower rural lives through a unique 360-degree development model. Which covers four key thematic areas namely Education, Water & Sanitation, Health & Nutrition and Economic Development.
          </p>
        </div>

        <div style={{ background: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)", padding: "40px", borderRadius: "24px", border: "1px solid #FED7AA", boxShadow: "0 10px 25px rgba(0,0,0,0.03)" }}>
          <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "#FFFFFF", color: "#F97316", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}><Compass size={28} /></div>
          <span className="section-label" style={{ color: "#EA580C" }}>MISSION</span>
          <h2 style={{ color: "#1E3A8A", fontSize: "24px", margin: "10px 0 16px 0", fontWeight: "800" }}>Our Mission</h2>
          <p style={{ color: "#334155", fontSize: "15px", lineHeight: "1.7", margin: 0, fontWeight: "600" }}>
            We facilitate exchange of resources, opportunities and competencies between businesses, communities through public-private partnerships that contribute to long term sustainable livelihood development benefiting the difficult-to reach sections of young people.
          </p>
        </div>
      </section>

      {/* Goals & Aims (Blue) */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", marginBottom: "30px" }}>
        <div style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)", padding: "40px", borderRadius: "24px", border: "1px solid #BFDBFE", boxShadow: "0 10px 25px rgba(0,0,0,0.03)" }}>
          <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "#FFFFFF", color: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}><Flag size={28} /></div>
          <span className="section-label" style={{ color: "#2563EB" }}>GOALS</span>
          <h2 style={{ color: "#1E3A8A", fontSize: "24px", margin: "10px 0 16px 0", fontWeight: "800" }}>Our Goals</h2>
          <ul style={{ color: "#334155", fontSize: "15px", lineHeight: "1.7", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px", margin: 0, fontWeight: "600" }}>
            <li>To benefit the needy, irrespective of caste, creed, race, religion, sex and language.</li>
            <li>To support children in need of care and protection and to help destitute poor, neglected needy and orphan children.</li>
            <li>To help the poor and the needy in achieving self-reliance, carry out charitable, development and relief work in co-operation with Government, Strategic Alliances and Organizations.</li>
          </ul>
        </div>

        <div style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)", padding: "40px", borderRadius: "24px", border: "1px solid #BFDBFE", boxShadow: "0 10px 25px rgba(0,0,0,0.03)" }}>
          <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "#FFFFFF", color: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}><Award size={28} /></div>
          <span className="section-label" style={{ color: "#2563EB" }}>AIMS</span>
          <h2 style={{ color: "#1E3A8A", fontSize: "24px", margin: "10px 0 16px 0", fontWeight: "800" }}>Our Aims</h2>
          <ul style={{ color: "#334155", fontSize: "15px", lineHeight: "1.7", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px", margin: 0, fontWeight: "600" }}>
            <li>Our aim is to ensure that this model can be replicated across India and to the world.</li>
            <li>Our common goal is empowering rural India.</li>
            <li>Transforming individuals</li>
            <li>Education amenities to the downtrodden and destitute</li>
            <li>Providing drinking water, sanitation and health care services to rural India.</li>
            <li>Responding to the natural disasters globally</li>
          </ul>
        </div>
      </section>

      {/* Objectives (Yellow) */}
      <section style={{ background: "linear-gradient(135deg, #FEFCE8 0%, #FEF08A 100%)", padding: "40px", borderRadius: "24px", border: "1px solid #FEF08A", boxShadow: "0 10px 25px rgba(0,0,0,0.03)", marginBottom: "30px" }}>
        <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "#FFFFFF", color: "#CA8A04", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}><Layers size={28} /></div>
        <span className="section-label" style={{ color: "#CA8A04" }}>OBJECTIVES</span>
        <h2 style={{ color: "#1E3A8A", fontSize: "26px", margin: "10px 0 20px 0", fontWeight: "800" }}>Our Objectives</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ background: "#FFFFFF", padding: "20px", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.05)" }}>
            <p style={{ color: "#334155", fontSize: "15px", lineHeight: "1.6", margin: 0, fontWeight: "600" }}>
              <strong>1.</strong> Creating joyful, Empowering Education which enhances livelihood options, creating socially and environmentally conscious citizens who are catalysts for change.
            </p>
          </div>
          <div style={{ background: "#FFFFFF", padding: "20px", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.05)" }}>
            <p style={{ color: "#334155", fontSize: "15px", lineHeight: "1.6", margin: 0, fontWeight: "600" }}>
              <strong>2.</strong> <span style={{ color: "#990000", fontWeight: "800" }}>Global Foundation</span> will ensure that every household in its geography has a toilet of their own and receives liters of potable water/ day through taps installed at homes.
            </p>
          </div>
          <div style={{ background: "#FFFFFF", padding: "20px", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.05)" }}>
            <p style={{ color: "#334155", fontSize: "15px", lineHeight: "1.6", margin: 0, fontWeight: "600" }}>
              <strong>3.</strong> Ensuring universal access to public and private healthcare services for our rural communities.
            </p>
          </div>
          <div style={{ background: "#FFFFFF", padding: "20px", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.05)" }}>
            <p style={{ color: "#334155", fontSize: "15px", lineHeight: "1.6", margin: 0, fontWeight: "600" }}>
              <strong>4.</strong> To ensure every household achieves an annual income of minimum 2 Lakhs per annul through engaging in multiple livelihoods.
            </p>
          </div>
          <div style={{ background: "#FFFFFF", padding: "20px", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.05)" }}>
            <p style={{ color: "#334155", fontSize: "15px", lineHeight: "1.6", margin: 0, fontWeight: "600" }}>
              <strong>5.</strong> Our joint efforts have led to significant transformation where it’s most needed and that’s what keeps us going. Together, we strive to make the world a better place.
            </p>
          </div>
          <div style={{ background: "#FFFFFF", padding: "20px", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.05)" }}>
            <p style={{ color: "#334155", fontSize: "15px", lineHeight: "1.6", margin: 0, fontWeight: "600" }}>
              <strong>6.</strong> The <span style={{ color: "#990000", fontWeight: "800" }}>Global Foundation</span> with better Village community will be empowered with the capability to transform their own lives. They will be able to create choices for themselves and their families.
            </p>
          </div>
        </div>
      </section>

      {/* Strategies (Violet) */}
      <section style={{ background: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)", padding: "40px", borderRadius: "24px", border: "1px solid #DDD6FE", boxShadow: "0 10px 25px rgba(0,0,0,0.03)" }}>
        <span className="section-label" style={{ color: "#7C3AED" }}>STRATEGIES</span>
        <h2 style={{ color: "#1E3A8A", fontSize: "26px", margin: "10px 0 20px 0", fontWeight: "800" }}>Our Strategies</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ borderLeft: "4px solid #7C3AED", paddingLeft: "16px" }}>
            <h4 style={{ color: "#1E3A8A", fontSize: "17px", fontWeight: "700", marginBottom: "6px" }}>1) Physical</h4>
            <p style={{ color: "#334155", fontSize: "15px", lineHeight: "1.6", margin: 0, fontWeight: "600" }}>
              To provide the needy with basic amenities like cloths, drinking water, books, pens, shoes, diapers, first aid, feminine products and other school/college supplies. Our team will go the place, and find out the needs. Ensure to provide the required needs for a better living.
            </p>
          </div>
          <div style={{ borderLeft: "4px solid #7C3AED", paddingLeft: "16px" }}>
            <h4 style={{ color: "#1E3A8A", fontSize: "17px", fontWeight: "700", marginBottom: "6px" }}>2) Emotional</h4>
            <p style={{ color: "#334155", fontSize: "15px", lineHeight: "1.6", margin: 0, fontWeight: "600" }}>
              Children are losing their beloved ones. Due to long term sickness, corona virus, other health problems etc. When children grow, out of parents control. They are becoming the antisocial elements. These people don’t have trust and hope on their lives. We as a <span style={{ color: "#990000", fontWeight: "800" }}>Global Foundation</span> want to deal with the disturb teens and children in the society with parental counseling and motivation to uplift them to become better society.
            </p>
          </div>
          <div style={{ borderLeft: "4px solid #7C3AED", paddingLeft: "16px" }}>
            <h4 style={{ color: "#1E3A8A", fontSize: "17px", fontWeight: "700", marginBottom: "6px" }}>3) Education and Life skills</h4>
            <p style={{ color: "#334155", fontSize: "15px", lineHeight: "1.6", margin: 0, fontWeight: "600" }}>
              In present days people are neglecting education, nearly half of orphans who age out of orphanages/schools do not go to a college will end up homeless, become involved in crime and drugs, and get lost in the corruption of human trafficking etc. We as a <span style={{ color: "#990000", fontWeight: "800" }}>Global Foundation</span> set up orphans/youngsters to have a successful future by teaching them to set goals, assisting with their educational and supplementing it with tutorials, exam preparation. Teaching them with basic English language etc
            </p>
          </div>
          <div style={{ borderLeft: "4px solid #7C3AED", paddingLeft: "16px" }}>
            <h4 style={{ color: "#1E3A8A", fontSize: "17px", fontWeight: "700", marginBottom: "6px" }}>4) Moral Supports</h4>
            <p style={{ color: "#334155", fontSize: "15px", lineHeight: "1.6", margin: 0, fontWeight: "600" }}>
              We <span style={{ color: "#990000", fontWeight: "800" }}>Global Foundation</span> will be an eye on need to help in deed.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "30px", padding: "24px", background: "#FFFFFF", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.05)" }}>
          <p style={{ color: "#334155", fontSize: "15px", lineHeight: "1.7", margin: "0 0 16px 0", fontWeight: "600" }}>
            Our philosophy states that India lives in her villages and we cannot rise to our true potential as a country without a fundamental transformation in the lives of people in rural India. At the <span style={{ color: "#990000", fontWeight: "800" }}>GLOBAL Foundation</span> we believe that the partnership of rural India with corporate, young urban India, the Government and other foundations is the key to create a permanent and irreversible change for good.
          </p>
          <p style={{ color: "#334155", fontSize: "15px", lineHeight: "1.7", margin: 0, fontWeight: "600" }}>
            We aim at bringing together the best global practices, corporate thinking and accountability, the highest standards of corporate governance to create a model of sustainable development, which is a benchmark in the industry and can be replicated at scale. We strongly believe in collaboration and working with multiple partners including other foundations, NGOs, corporate and the government.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;