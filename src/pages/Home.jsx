import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const clients = [
    { name: "KFC", url: "/KFC_logo.png" },
    { name: "Gloria Jeans", url: "/gloriajeans_logo.png" },
    { name: "OPTP", url: "/optp_logo.png" },
    { name: "Chaman", url: "/chaman_logo.png" },
    { name: "Fibbi", url: "/Fibbi_logo.png" },
  ];

  return (
    <div className="home-wrapper">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-subtitle">ENERGY THAT POWERS THE FUTURE</span>
          <h1>Clean & Reliable LPG Solutions</h1>
          <p>
            Indus Gas Private Limited provides seamless procurement, storage, and 
            distribution of LPG across Pakistan with uncompromised safety standards.
          </p>
          <div className="hero-btns">
            <button className="primary-btn" onClick={() => navigate("/network")}>OUR SERVICES</button>
            <button className="secondary-btn" onClick={() => navigate("/contact")}>CONTACT US</button>
          </div>
        </div>
      </section>

      {/* CORE OPERATIONS */}
      <section className="services">
        <div className="container">
          <div className="services-header">
            <span className="tagline">WHAT WE DO</span>
            <h2>Our Core Operations</h2>
            <div className="red-accent"></div>
          </div>
          
          <div className="service-grid">
            <div className="service-card">
              <div className="card-number">01</div>
              <div className="icon">🛡️</div>
              <h3>Procurement</h3>
              <p>Direct sourcing from the most reliable LPG producers globally, ensuring a consistent supply chain for the local market.</p>
              <div className="card-footer" onClick={() => navigate("/network")}>Learn More →</div>
            </div>

            <div className="service-card active-card">
              <div className="card-number">02</div>
              <div className="icon">🏗️</div>
              <h3>Storage</h3>
              <p>Operating state-of-the-art storage terminals equipped with advanced monitoring and fire-safety systems.</p>
              <div className="card-footer" onClick={() => navigate("/network")}>Learn More →</div>
            </div>

            <div className="service-card">
              <div className="card-number">03</div>
              <div className="icon">🚛</div>
              <h3>Distribution</h3>
              <p>A specialized fleet of bowsers delivering bulk LPG and cylinders to commercial and industrial hubs nationwide.</p>
              <div className="card-footer" onClick={() => navigate("/network")}>Learn More →</div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT SECTION - REFRESHED LOGIC */}
      <section className="clients-section">
        <p className="section-tag">TRUSTED BY INDUSTRY LEADERS</p>
        <div className="logo-slider">
          <div className="logo-track">
            {/* Duplicating the list for a seamless infinite scroll */}
            {[...clients, ...clients].map((client, index) => (
              <div className="logo-item" key={index}>
                <img src={client.url} alt={client.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .home-wrapper { font-family: 'Inter', sans-serif; overflow-x: hidden; background: #fff; width: 100%; }

        /* HERO SECTION */
        .hero { 
          min-height: 90vh; 
          position: relative; 
          background: url('/BG.jpg') no-repeat center/cover;
          display: flex; 
          align-items: center; 
          color: white; 
          padding: 60px 10%; 
        }
        .hero-overlay { 
          position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
          background: linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.3)); 
        }
        .hero-content { position: relative; z-index: 2; max-width: 800px; }
        .hero-subtitle { color: #d94b2b; font-weight: 800; letter-spacing: 4px; font-size: 14px; display: block; margin-bottom: 15px; }
        .hero-content h1 { font-size: clamp(32px, 7vw, 64px); margin: 0 0 25px 0; line-height: 1.1; font-weight: 900; }
        .hero-content p { font-size: clamp(16px, 2vw, 18px); line-height: 1.6; margin-bottom: 40px; opacity: 0.9; }
        
        .hero-btns { display: flex; flex-wrap: wrap; gap: 15px; }
        .primary-btn, .secondary-btn { padding: 18px 40px; font-weight: 700; border: none; cursor: pointer; transition: 0.3s; }
        .primary-btn { background: #d94b2b; color: white; }
        .secondary-btn { background: transparent; color: white; border: 2px solid white; }

        /* CORE OPERATIONS SECTION */
        .services { padding: 100px 10%; background: #fcfcfc; }
        .tagline { color: #d94b2b; font-weight: 700; letter-spacing: 2px; font-size: 13px; }
        .services-header h2 { font-size: clamp(28px, 5vw, 48px); margin: 10px 0; color: #1a1a1a; font-weight: 800; }
        .red-accent { width: 80px; height: 6px; background: #d94b2b; margin-bottom: 70px; }

        .service-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
          gap: 30px; 
        }
        
        .service-card { padding: 60px 40px; background: white; border: 1px solid #f0f0f0; transition: 0.4s; position: relative; }
        .card-number { position: absolute; right: 20px; top: 10px; font-size: 80px; font-weight: 900; color: rgba(0,0,0,0.03); }
        .service-card .icon { font-size: 45px; margin-bottom: 25px; display: block; }
        .service-card h3 { font-size: 26px; margin-bottom: 20px; font-weight: 700; }
        .service-card p { color: #666; line-height: 1.7; margin-bottom: 30px; }
        
        .card-footer { font-weight: 700; color: #d94b2b; cursor: pointer; transition: 0.3s; display: inline-block; }
        .card-footer:hover { transform: translateX(5px); color: #b83d23; }

        .service-card:hover { transform: translateY(-15px); border-color: #d94b2b; box-shadow: 0 20px 40px rgba(0,0,0,0.05); }

        /* CLIENT SECTION - LOGO COLOR LOGIC */
        .clients-section { padding: 80px 0; background: #fff; border-top: 1px solid #eee; overflow: hidden; width: 100%; }
        .section-tag { text-align: center; font-size: 12px; letter-spacing: 3px; color: #888; font-weight: 700; margin-bottom: 50px; }
        
        .logo-slider { width: 100%; overflow: hidden; }
        .logo-track { display: flex; width: max-content; animation: scroll 30s linear infinite; }
        
        .logo-item { width: 250px; display: flex; justify-content: center; align-items: center; padding: 0 30px; }
        
        .logo-item img { 
          width: 140px; 
          height: 80px; 
          object-fit: contain; 
          filter: grayscale(0%); /* FULL COLOR BY DEFAULT */
          transition: 0.3s ease;
          opacity: 1;
        }
        
        /* BLACK AND WHITE ONLY ON HOVER */
        .logo-item img:hover { 
          filter: grayscale(100%); 
          opacity: 0.7;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }

        /* MOBILE FIXES */
        @media (max-width: 768px) {
          .hero { padding: 100px 5% 60px; text-align: center; justify-content: center; min-height: auto; }
          .hero-btns { justify-content: center; }
          .hero-btns button { width: 100%; }
          .services { padding: 60px 5%; }
          .service-card { padding: 40px 25px; }
          .logo-item { width: 200px; }
          .logo-item img { width: 100px; height: 60px; }
        }
      `}</style>
    </div>
  );
}

export default Home;