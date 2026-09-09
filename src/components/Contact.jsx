import React, { useRef, useState } from "react";
import { MapPin, Phone, Mail, Globe, Send, MessageSquare } from "lucide-react";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    const name = formRef.current.name.value;
    const email = formRef.current.email.value;
    const phone = formRef.current.phone.value;
    const message = formRef.current.message.value;

    // Official WhatsApp phone number (without spaces or + sign for API)
    const whatsappNumber = "917989090963";
    
    const text = encodeURIComponent(
      `*New Website Inquiry*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Message:* ${message}`
    );

    // Open WhatsApp chat directly with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");

    setStatus({
      type: "success",
      message: "Redirecting to WhatsApp to send your message instantly!",
    });
    
    formRef.current.reset();
  };

  return (
    <div className="contact-page" style={{ padding: "40px 5% 80px 5%", maxWidth: "1280px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      
      {/* Colorful Vibrant Hero Section */}
      <section style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #ECFEFF 100%)", padding: "50px 40px", borderRadius: "28px", border: "1px solid #BFDBFE", marginBottom: "50px", textAlign: "center", boxShadow: "0 10px 30px rgba(37, 99, 235, 0.05)" }}>
        <span className="section-label" style={{ fontFamily: "Arial, sans-serif", background: "#FFFFFF", padding: "6px 16px", borderRadius: "20px", color: "#2563EB", fontWeight: "700", fontSize: "12px", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" }}>GET IN TOUCH</span>
        <h1 style={{ color: "#1E3A8A", fontSize: "38px", fontWeight: "800", margin: "14px 0 15px 0", fontFamily: "Arial, sans-serif" }}>
          Contact <span style={{ color: "#990000" }}>Global Foundation</span>
        </h1>
        <p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.7", maxWidth: "700px", margin: "0 auto", fontFamily: "Arial, sans-serif", fontWeight: "600" }}>
          Reach out to our teams across our international offices or drop us a message below to connect instantly via WhatsApp.
        </p>
      </section>

      {/* Main Grid: Colorful Offices & Form */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", marginBottom: "60px" }}>
        
        {/* Left Column: Colorful Office Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          
          {/* Indian Office */}
          <div style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)", padding: "30px", borderRadius: "20px", border: "1px solid #BFDBFE", boxShadow: "0 10px 25px rgba(0,0,0,0.03)" }}>
            <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: "20px", background: "#FFFFFF", color: "#2563EB", fontSize: "12px", fontWeight: "700", marginBottom: "12px", fontFamily: "Arial, sans-serif", boxShadow: "0 2px 6px rgba(0,0,0,0.04)" }}>
              HQ & Indian Office
            </span>
            <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", marginBottom: "14px" }}>
              <MapPin size={22} color="#2563EB" style={{ flexShrink: 0, marginTop: "3px" }} />
              <p style={{ color: "#334155", fontSize: "14px", lineHeight: "1.6", margin: 0, fontFamily: "Arial, sans-serif", fontWeight: "600" }}>
                H no 3-11-472, 2nd Floor, Siva Ganga Colony, LB Nagar, 500072
              </p>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "center", marginBottom: "10px" }}>
              <Phone size={18} color="#2563EB" style={{ flexShrink: 0 }} />
              <p style={{ color: "#334155", fontSize: "14px", margin: 0, fontFamily: "Arial, sans-serif", fontWeight: "600" }}>+91 7989090963, 040 45709661</p>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <Mail size={18} color="#2563EB" style={{ flexShrink: 0 }} />
              <p style={{ color: "#334155", fontSize: "14px", margin: 0, fontFamily: "Arial, sans-serif", fontWeight: "600" }}>globalfoundation083@gmail.com</p>
            </div>
          </div>

          {/* Singapore Office */}
          <div style={{ background: "linear-gradient(135deg, #ECFEFF 0%, #A5F3FC 100%)", padding: "24px 30px", borderRadius: "20px", border: "1px solid #67E8F9", boxShadow: "0 10px 25px rgba(0,0,0,0.03)" }}>
            <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: "20px", background: "#FFFFFF", color: "#0891B2", fontSize: "12px", fontWeight: "700", marginBottom: "10px", fontFamily: "Arial, sans-serif", boxShadow: "0 2px 6px rgba(0,0,0,0.04)" }}>
              Singapore Office
            </span>
            <div style={{ display: "flex", gap: "14px", alignItems: "center", marginBottom: "8px" }}>
              <Globe size={20} color="#0891B2" style={{ flexShrink: 0 }} />
              <p style={{ color: "#334155", fontSize: "14px", margin: 0, fontStyle: "italic", fontFamily: "Arial, sans-serif", fontWeight: "600" }}>
                Address coming soon...
              </p>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "center", marginBottom: "6px" }}>
              <Phone size={16} color="#0891B2" style={{ flexShrink: 0 }} />
              <p style={{ color: "#334155", fontSize: "13px", margin: 0, fontFamily: "Arial, sans-serif", fontWeight: "600" }}>+91 7989090963, 040 45709661</p>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <Mail size={16} color="#0891B2" style={{ flexShrink: 0 }} />
              <p style={{ color: "#334155", fontSize: "13px", margin: 0, fontFamily: "Arial, sans-serif", fontWeight: "600" }}>globalfoundation083@gmail.com</p>
            </div>
          </div>

          {/* USA Office */}
          <div style={{ background: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)", padding: "24px 30px", borderRadius: "20px", border: "1px solid #FCD34D", boxShadow: "0 10px 25px rgba(0,0,0,0.03)" }}>
            <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: "20px", background: "#FFFFFF", color: "#D97706", fontSize: "12px", fontWeight: "700", marginBottom: "10px", fontFamily: "Arial, sans-serif", boxShadow: "0 2px 6px rgba(0,0,0,0.04)" }}>
              USA Office
            </span>
            <div style={{ display: "flex", gap: "14px", alignItems: "center", marginBottom: "8px" }}>
              <Globe size={20} color="#D97706" style={{ flexShrink: 0 }} />
              <p style={{ color: "#334155", fontSize: "14px", margin: 0, fontStyle: "italic", fontFamily: "Arial, sans-serif", fontWeight: "600" }}>
                Address coming soon...
              </p>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "center", marginBottom: "6px" }}>
              <Phone size={16} color="#D97706" style={{ flexShrink: 0 }} />
              <p style={{ color: "#334155", fontSize: "13px", margin: 0, fontFamily: "Arial, sans-serif", fontWeight: "600" }}>+91 7989090963, 040 45709661</p>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <Mail size={16} color="#D97706" style={{ flexShrink: 0 }} />
              <p style={{ color: "#334155", fontSize: "13px", margin: 0, fontFamily: "Arial, sans-serif", fontWeight: "600" }}>globalfoundation083@gmail.com</p>
            </div>
          </div>

          {/* Kenya Office & Other Regions */}
          <div style={{ background: "linear-gradient(135deg, #ECFDF5 0%, #A7F3D0 100%)", padding: "24px 30px", borderRadius: "20px", border: "1px solid #6EE7B7", boxShadow: "0 10px 25px rgba(0,0,0,0.03)" }}>
            <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: "20px", background: "#FFFFFF", color: "#059669", fontSize: "12px", fontWeight: "700", marginBottom: "10px", fontFamily: "Arial, sans-serif", boxShadow: "0 2px 6px rgba(0,0,0,0.04)" }}>
              Kenya Office & Other Global Regions
            </span>
            <div style={{ display: "flex", gap: "14px", alignItems: "center", marginBottom: "8px" }}>
              <Globe size={20} color="#059669" style={{ flexShrink: 0 }} />
              <p style={{ color: "#334155", fontSize: "14px", margin: 0, fontStyle: "italic", fontFamily: "Arial, sans-serif", fontWeight: "600" }}>
                Additional international office locations coming soon...
              </p>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "center", marginBottom: "6px" }}>
              <Phone size={16} color="#059669" style={{ flexShrink: 0 }} />
              <p style={{ color: "#334155", fontSize: "13px", margin: 0, fontFamily: "Arial, sans-serif", fontWeight: "600" }}>+91 7989090963, 040 45709661</p>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <Mail size={16} color="#059669" style={{ flexShrink: 0 }} />
              <p style={{ color: "#334155", fontSize: "13px", margin: 0, fontFamily: "Arial, sans-serif", fontWeight: "600" }}>globalfoundation083@gmail.com</p>
            </div>
          </div>

        </div>

        {/* Right Column: WhatsApp Instant Form Card */}
        <div style={{ background: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)", padding: "40px", borderRadius: "24px", border: "1px solid #FED7AA", boxShadow: "0 10px 25px rgba(234, 88, 12, 0.05)" }}>
          <span className="section-label" style={{ fontFamily: "Arial, sans-serif", color: "#EA580C", background: "#FFFFFF", padding: "6px 14px", borderRadius: "20px", fontWeight: "700", fontSize: "12px", display: "inline-block", marginBottom: "12px", boxShadow: "0 2px 6px rgba(0,0,0,0.04)" }}>INSTANT WHATSAPP CHAT</span>
          <h2 style={{ color: "#1E3A8A", fontSize: "26px", fontWeight: "800", marginBottom: "24px", fontFamily: "Arial, sans-serif" }}>We'd Love To Hear From You</h2>
          
          <form ref={formRef} onSubmit={handleWhatsAppSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <label style={{ display: "block", color: "#374151", fontSize: "14px", fontWeight: "700", marginBottom: "8px", fontFamily: "Arial, sans-serif" }}>Full Name</label>
              <input type="text" name="name" placeholder="Enter your full name" required style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "1px solid #FED7AA", fontSize: "15px", outline: "none", fontFamily: "Arial, sans-serif", background: "#FFFFFF", boxSizing: "border-box" }} />
            </div>

            <div>
              <label style={{ display: "block", color: "#374151", fontSize: "14px", fontWeight: "700", marginBottom: "8px", fontFamily: "Arial, sans-serif" }}>Email Address</label>
              <input type="email" name="email" placeholder="Enter your email address" required style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "1px solid #FED7AA", fontSize: "15px", outline: "none", fontFamily: "Arial, sans-serif", background: "#FFFFFF", boxSizing: "border-box" }} />
            </div>

            <div>
              <label style={{ display: "block", color: "#374151", fontSize: "14px", fontWeight: "700", marginBottom: "8px", fontFamily: "Arial, sans-serif" }}>Phone Number</label>
              <input type="tel" name="phone" placeholder="Enter your phone number" style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "1px solid #FED7AA", fontSize: "15px", outline: "none", fontFamily: "Arial, sans-serif", background: "#FFFFFF", boxSizing: "border-box" }} />
            </div>

            <div>
              <label style={{ display: "block", color: "#374151", fontSize: "14px", fontWeight: "700", marginBottom: "8px", fontFamily: "Arial, sans-serif" }}>Your Message</label>
              <textarea name="message" rows="4" placeholder="How would you like to connect or support us?" required style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "1px solid #FED7AA", fontSize: "15px", outline: "none", resize: "vertical", fontFamily: "Arial, sans-serif", background: "#FFFFFF", boxSizing: "border-box" }}></textarea>
            </div>

            <button type="submit" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#25D366", color: "#FFFFFF", padding: "14px 20px", borderRadius: "12px", border: "none", fontSize: "15px", fontWeight: "700", cursor: "pointer", fontFamily: "Arial, sans-serif", boxShadow: "0 4px 12px rgba(37, 211, 102, 0.3)", transition: "all 0.2s" }}>
              Send via WhatsApp <MessageSquare size={16} />
            </button>

            {status.message && (
              <div style={{ display: "flex", gap: "10px", alignItems: "center", padding: "12px 14px", borderRadius: "10px", background: "#F0FDF4", border: "1px solid #BBF7D0", marginTop: "6px" }}>
                <MessageSquare size={18} color="#16A34A" style={{ flexShrink: 0 }} />
                <p style={{ fontSize: "13px", fontWeight: "600", color: "#166534", margin: 0, lineHeight: "1.4", fontFamily: "Arial, sans-serif" }}>
                  {status.message}
                </p>
              </div>
            )}
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;