import React from "react";
import { ShieldCheck, Landmark, QrCode, Download } from "lucide-react";

function Transparency() {
  const documentsList = [
    {
      title: "NGO Darpan Registration Certificate",
      idNumber: "Unique ID: TS/2022/0313711",
      description: "Official registration details under Act 1860, Hayathnagar, Telangana.",
      fileUrl: "/NGO-Darpan.pdf",
      tag: "Registration"
    },
    {
      title: "MCA CSR Approval Letter",
      idNumber: "CSR Reg No: CSR00030879",
      description: "Approved by the Ministry of Corporate Affairs, Government of India.",
      fileUrl: "/Approval-Letter-for-form-CSR.pdf",
      tag: "CSR Compliance"
    }
  ];

  return (
    <div style={{ padding: "40px 5% 80px 5%", maxWidth: "1280px", margin: "0 auto" }}>
      {/* Page Header */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <span className="section-label">OFFICIAL COMPLIANCE & TRUST</span>
        <h1 style={{ color: "#1E3A8A", fontSize: "38px", fontWeight: "900", margin: "10px 0 15px 0" }}>
          Certifications & Transparency
        </h1>
        <p style={{ color: "#475569", fontSize: "16px", maxWidth: "700px", margin: "0 auto", lineHeight: "1.6" }}>
          Global Foundation operates with total transparency. Review our official government registrations, CSR approval documents, and direct contribution channels below.
        </p>
      </div>

      {/* Dynamic Documents Grid with Direct Embedded Previews */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "30px", marginBottom: "50px" }}>
        {documentsList.map((doc, index) => (
          <div key={index} style={{ background: "#FFFFFF", borderRadius: "20px", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", border: "1px solid #E2E8F0", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "15px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#EFF6FF", color: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h2 style={{ color: "#1E3A8A", fontSize: "17px", fontWeight: "800", margin: 0 }}>{doc.title}</h2>
                  <span style={{ color: "#059669", fontSize: "12px", fontWeight: "700" }}>{doc.idNumber}</span>
                </div>
              </div>
              <p style={{ color: "#475569", fontSize: "13px", lineHeight: "1.5", marginBottom: "15px" }}>
                {doc.description}
              </p>

              {/* Direct PDF Preview Frame */}
              <div style={{ width: "100%", height: "350px", borderRadius: "12px", overflow: "hidden", border: "1px solid #CBD5E1", background: "#F8FAFC", marginBottom: "20px" }}>
                <iframe 
                  src={`${doc.fileUrl}#view=FitH`} 
                  title={doc.title}
                  style={{ width: "100%", height: "100%", border: "none" }}
                />
              </div>
            </div>
            
            <a 
              href={doc.fileUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                justifyContent: "center", 
                gap: "8px", 
                padding: "10px 16px", 
                background: "#EFF6FF", 
                color: "#2563EB", 
                borderRadius: "10px", 
                fontWeight: "700", 
                fontSize: "14px", 
                textDecoration: "none",
                border: "1px solid #BFDBFE"
              }}
            >
              <Download size={16} /> Open Fullscreen / Download PDF
            </a>
          </div>
        ))}
      </div>

      {/* Banking & Scanner Section */}
      <div style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)", borderRadius: "24px", padding: "40px", border: "2px solid #3B82F6", boxShadow: "0 15px 35px rgba(37, 99, 235, 0.1)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "25px" }}>
          <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "#2563EB", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Landmark size={24} />
          </div>
          <div>
            <h2 style={{ color: "#1E3A8A", fontSize: "22px", fontWeight: "900", margin: 0 }}>Direct Contributions & Bank Details</h2>
            <span style={{ color: "#2563EB", fontSize: "13px", fontWeight: "700" }}>Secure banking channels for Global Foundation</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px", alignItems: "center" }}>
          
          <div style={{ background: "#FFFFFF", padding: "24px", borderRadius: "16px", boxShadow: "0 8px 20px rgba(0,0,0,0.04)", border: "1px solid #BFDBFE" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <span style={{ fontSize: "12px", color: "#64748B", fontWeight: "700", textTransform: "uppercase" }}>Account Name</span>
                <div style={{ fontSize: "16px", fontWeight: "800", color: "#1E3A8A" }}>GLOBAL FOUNDATION</div>
              </div>
              <div>
                <span style={{ fontSize: "12px", color: "#64748B", fontWeight: "700", textTransform: "uppercase" }}>Account Number</span>
                <div style={{ fontSize: "18px", fontWeight: "900", color: "#2563EB" }}>7124313865</div>
              </div>
              <div>
                <span style={{ fontSize: "12px", color: "#64748B", fontWeight: "700", textTransform: "uppercase" }}>IFSC Code</span>
                <div style={{ fontSize: "16px", fontWeight: "800", color: "#1E3A8A" }}>IDIB000H062</div>
              </div>
              <div>
                <span style={{ fontSize: "12px", color: "#64748B", fontWeight: "700", textTransform: "uppercase" }}>Official Contact</span>
                <div style={{ fontSize: "15px", fontWeight: "700", color: "#334155" }}>+91 7989090963</div>
              </div>
            </div>
          </div>

          <div style={{ background: "#FFFFFF", padding: "24px", borderRadius: "16px", boxShadow: "0 8px 20px rgba(0,0,0,0.04)", border: "1px solid #BFDBFE", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", color: "#1E3A8A", fontSize: "15px", fontWeight: "800", marginBottom: "15px" }}>
              <QrCode size={20} color="#2563EB" /> Scan to Support Our Mission
            </div>
            
            <div style={{ width: "200px", height: "200px", margin: "0 auto", background: "#F1F5F9", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", border: "2px dashed #CBD5E1", overflow: "hidden" }}>
              <img src="/scanner-qr.png" alt="Global Foundation QR Scanner" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
            <p style={{ fontSize: "12px", color: "#64748B", marginTop: "12px", fontWeight: "600" }}>
              Scan via any UPI app to contribute directly.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Transparency;