import React from "react";

function Network() {
  const stats = [
    { label: "Distributors", value: "500+", icon: "🏪" },
    { label: "Cylinders in Circulation", value: "80,000+", icon: "🔋" },
    { label: "Owned Bowsers", value: "25", icon: "🚛" },
    { label: "Zones Covered", value: "All over Pakistan", icon: "📍" },
  ];

  const zones = [
    { title: "North Zone", regions: "Islamabad, Rawalpindi, KPK, Gilgit-Baltistan" },
    { title: "Central Zone", regions: "Lahore, Faisalabad, Multan, Sargodha" },
    { title: "South Zone", regions: "Karachi, Hyderabad, Sukkur, Gawadar" },
    { title: "Western Zone", regions: "Quetta, Hub, Loralai, Zhob" },
  ];

  return (
    <div className="network-wrapper">
      {/* HEADER SECTION */}
      <section className="network-hero">
        <div className="hero-overlay"></div>
        <div className="network-hero-content">
          <h1>Our Distribution Network</h1>
          <p>Connecting energy to every corner of Pakistan</p>
          <div className="red-accent-center"></div>
        </div>
      </section>

      {/* MISSION & COMPLIANCE */}
      <section className="compliance">
        <div className="container">
          <div className="compliance-grid">
            <div className="compliance-text">
              <span className="tagline">NATIONAL REACH</span>
              <h2>Certified Excellence in Energy Logistics</h2>
              <p>
                Indus Gas Private Limited holds a comprehensive license to operate across all 
                provinces of Pakistan. Our distribution strategy is built on the foundation of 
                <strong> OGRA-approved</strong> infrastructure and international safety standards.
              </p>
              <p>
                By dividing our network into strategic zones, we ensure that our distributors 
                operate in close proximity to the end consumer, minimizing lead times and 
                maximizing service reliability.
              </p>
            </div>
            <div className="compliance-box">
              <div className="cert-badge">OGRA APPROVED</div>
              <p>All cylinders are manufactured as per international standards, ensuring a safe energy experience for domestic and industrial users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card" key={index}>
                <div className="stat-icon">{stat.icon}</div>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONAL COVERAGE */}
      <section className="zones-section">
        <div className="container">
          <div className="section-header">
            <h2>Strategic Zonal Operations</h2>
            <div className="red-accent"></div>
          </div>
          <div className="zones-grid">
            {zones.map((zone, index) => (
              <div className="zone-card" key={index}>
                <h4>{zone.title}</h4>
                <p>{zone.regions}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .network-wrapper { font-family: 'Inter', sans-serif; background: #fff; overflow-x: hidden; }

        /* HERO SECTION */
        .network-hero {
          height: 45vh;
          min-height: 350px;
          background: url('/BG.jpg') no-repeat center/cover;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
          padding: 0 20px;
        }
        .network-hero .hero-overlay {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0,0,0,0.75);
        }
        .network-hero-content { position: relative; z-index: 2; }
        .network-hero-content h1 { font-size: clamp(32px, 7vw, 48px); font-weight: 800; margin: 0; }
        .network-hero-content p { font-size: clamp(16px, 2vw, 18px); opacity: 0.8; margin-top: 10px; }
        .red-accent-center { width: 60px; height: 5px; background: #d94b2b; margin: 20px auto; }

        /* COMPLIANCE SECTION */
        .compliance { padding: 80px 10%; }
        .container { max-width: 1200px; margin: auto; }
        .compliance-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 60px; align-items: center; }
        .tagline { color: #d94b2b; font-weight: 700; letter-spacing: 2px; font-size: 13px; }
        .compliance-text h2 { font-size: clamp(28px, 5vw, 36px); font-weight: 800; margin: 15px 0; color: #1a1a1a; line-height: 1.2; }
        .compliance-text p { color: #555; line-height: 1.8; margin-bottom: 20px; }
        
        .compliance-box {
          background: #f9f9f9;
          padding: 40px;
          border-left: 5px solid #d94b2b;
          border-radius: 4px;
        }
        .cert-badge {
          background: #d94b2b;
          color: white;
          display: inline-block;
          padding: 5px 15px;
          font-weight: 800;
          font-size: 12px;
          border-radius: 50px;
          margin-bottom: 15px;
        }

        /* STATS SECTION */
        .stats-section { padding: 80px 10%; background: #1a1a1a; color: white; text-align: center; }
        .stats-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
            gap: 40px; 
        }
        .stat-icon { font-size: 40px; margin-bottom: 15px; }
        .stat-card h3 { font-size: 32px; font-weight: 800; color: #d94b2b; margin-bottom: 5px; }
        .stat-card p { font-size: 14px; color: #aaa; text-transform: uppercase; letter-spacing: 1px; }

        /* ZONES SECTION */
        .zones-section { padding: 80px 10%; background: #fcfcfc; }
        .section-header h2 { font-size: clamp(30px, 6vw, 42px); font-weight: 800; margin-bottom: 10px; }
        .zones-section .red-accent { width: 60px; height: 5px; background: #d94b2b; margin-bottom: 50px; }
        
        .zones-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
            gap: 30px; 
        }
        .zone-card {
          background: white;
          padding: 35px;
          border: 1px solid #eee;
          transition: 0.3s;
        }
        .zone-card:hover { border-color: #d94b2b; transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
        .zone-card h4 { font-size: 20px; color: #d94b2b; margin-bottom: 15px; font-weight: 700; }
        .zone-card p { color: #666; font-size: 15px; line-height: 1.6; }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 992px) {
          .compliance { padding: 60px 5%; }
          .compliance-grid { grid-template-columns: 1fr; gap: 40px; text-align: center; }
          .compliance-box { text-align: left; }
          
          .stats-section { padding: 60px 5%; }
          .zones-section { padding: 60px 5%; }
        }

        @media (max-width: 576px) {
          .stats-grid { grid-template-columns: 1fr; gap: 50px; }
          .zone-card { padding: 25px; }
          .compliance-box { padding: 30px 20px; }
        }
      `}</style>
    </div>
  );
}

export default Network;