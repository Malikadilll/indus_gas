import React from "react";

function Network() {
  const stats = [
    { label: "Distributors", value: "500+", icon: "🏪" },
    { label: "Cylinders in Circulation", value: "80,000+", icon: "🔋" },
    { label: "Owned Bowsers", value: "05", icon: "🚛" }, // Updated value to 05
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
          <span className="hero-pretitle">NATIONWIDE LOGISTICS</span>
          <h1>Our Distribution Network</h1>
          <p>Connecting energy to every corner of Pakistan</p>
          <div className="red-accent-center"></div>
        </div>
      </section>

      {/* COMPLIANCE SECTION */}
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
                operate in close proximity to the end consumer.
              </p>
            </div>
            <div className="compliance-image-box">
               <img src="/Photos/CyllinderFillingArea.jpeg" alt="LPG Cylinder Filling Area" className="compliance-img" />
               <div className="compliance-box-overlay">
                  <div className="cert-badge">OGRA APPROVED</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats-section">
        <div className="stats-bg-overlay"></div>
        <div className="container stats-container">
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

      {/* LOGISTICS BANNER */}
      <section className="logistics-banner">
          <div className="banner-overlay">
              <div className="banner-text">
                  <h3>Reliable Fleet, Uninterrupted Supply</h3>
                  <p>Our owned fleet of high-capacity bowsers ensures safe transit 24/7.</p>
              </div>
          </div>
      </section>

      {/* ZONAL COVERAGE */}
      <section className="zones-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="tagline">OPERATIONAL FOOTPRINT</span>
            <h2>Strategic Zonal Operations</h2>
            <div className="red-accent-center"></div>
          </div>
          
          <div className="zones-grid">
            {zones.map((zone, index) => (
              <div className="zone-card" key={index}>
                <div className="zone-indicator"></div>
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
          min-height: 400px;
          background: url('/Photos/BowzerNextToPump.jpeg') no-repeat center/cover;
          position: relative;
          display: flex; align-items: center; justify-content: center; color: white; text-align: center;
        }
        .network-hero .hero-overlay {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.4));
        }
        .network-hero-content { position: relative; z-index: 2; padding: 0 20px; }
        .hero-pretitle { color: #d94b2b; font-weight: 800; letter-spacing: 4px; font-size: 14px; margin-bottom: 10px; display: block; }
        .network-hero-content h1 { font-size: clamp(32px, 7vw, 56px); font-weight: 900; margin: 0; text-transform: uppercase; }
        .network-hero-content p { font-size: clamp(16px, 2vw, 20px); opacity: 0.9; margin-top: 10px; }
        .red-accent-center { width: 80px; height: 6px; background: #d94b2b; margin: 25px auto; }

        /* COMPLIANCE SECTION */
        .compliance { padding: 100px 10%; }
        .container { max-width: 1200px; margin: auto; }
        .compliance-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .tagline { color: #d94b2b; font-weight: 700; letter-spacing: 2px; font-size: 13px; text-transform: uppercase; }
        .compliance-text h2 { font-size: clamp(28px, 5vw, 42px); font-weight: 900; color: #1a1a1a; line-height: 1.1; margin: 15px 0; }
        .compliance-text p { color: #555; line-height: 1.8; margin-bottom: 20px; font-size: 17px; }
        .compliance-image-box { position: relative; border-radius: 8px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        .compliance-img { width: 100%; height: 350px; object-fit: cover; display: block; }
        .cert-badge { background: #d94b2b; color: white; padding: 6px 18px; font-weight: 800; font-size: 12px; border-radius: 50px; position: absolute; bottom: 20px; left: 20px; }

        /* STATS SECTION - REDUCED SIZES */
        .stats-section { 
            padding: 100px 10%; 
            background: url('/Photos/StorageUnit3.jpeg') no-repeat center/cover; 
            position: relative; color: white; text-align: center; 
        }
        .stats-bg-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(26, 26, 26, 0.9); }
        .stats-container { position: relative; z-index: 2; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 40px; }
        
        .stat-card { padding: 20px; }
        .stat-icon { font-size: 40px; margin-bottom: 12px; line-height: 1; display: block; opacity: 0.9; }
        .stat-card h3 { font-size: 32px; font-weight: 900; color: #d94b2b; margin-bottom: 8px; }
        .stat-card p { font-size: 12px; color: #ccc; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; }

        /* LOGISTICS BANNER */
        .logistics-banner {
            height: 350px;
            background: url('/Photos/ShotOfAllBowzers.jpeg') no-repeat center/cover;
            background-attachment: fixed;
            position: relative;
        }
        .banner-overlay {
            position: absolute; width: 100%; height: 100%;
            background: rgba(217, 75, 43, 0.7);
            display: flex; align-items: center; justify-content: center; color: white; text-align: center; padding: 0 20px;
        }
        .banner-text h3 { font-size: clamp(24px, 4vw, 32px); font-weight: 900; margin-bottom: 10px; }
        .banner-text p { font-size: clamp(14px, 2vw, 18px); font-weight: 500; opacity: 0.9; }

        /* ZONES SECTION */
        .zones-section { padding: 100px 10%; background: #fff; }
        .section-header-centered { text-align: center; margin-bottom: 60px; }
        .zones-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; }
        .zone-card { background: #fdfdfd; padding: 40px; border: 1px solid #eee; transition: 0.4s; position: relative; }
        .zone-indicator { position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: #eee; transition: 0.4s; }
        .zone-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.05); border-color: #d94b2b; }
        .zone-card:hover .zone-indicator { background: #d94b2b; }
        .zone-card h4 { font-size: 22px; color: #1a1a1a; margin-bottom: 15px; font-weight: 800; }
        .zone-card:hover h4 { color: #d94b2b; }
        .zone-card p { color: #666; font-size: 15px; line-height: 1.7; }

        /* RESPONSIVE ADDITIONS */
        @media (max-width: 992px) {
          .compliance { padding: 60px 5%; }
          .compliance-grid { grid-template-columns: 1fr; gap: 40px; }
          .stats-section { padding: 60px 5%; }
          .zones-section { padding: 60px 5%; }
          .logistics-banner { height: 300px; background-attachment: scroll; }
        }

        @media (max-width: 480px) {
          .network-hero { height: 40vh; }
          .stat-card h3 { font-size: 28px; }
          .stat-icon { font-size: 32px; }
          .zone-card { padding: 30px 20px; }
        }
      `}</style>
    </div>
  );
}

export default Network;