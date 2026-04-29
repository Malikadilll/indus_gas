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
              <div className="card-image-box">
                <img src="/Photos/BowzerFilling.jpeg" alt="LPG Procurement" />
              </div>
              <div className="card-content">
                <div className="card-number">01</div>
                <h3>Procurement</h3>
                <p>Strategic sourcing and efficient intake from global and local producers to maintain a steady energy supply.</p>
                <div className="card-footer" onClick={() => navigate("/network")}>Learn More →</div>
              </div>
            </div>

            <div className="service-card active-card">
              <div className="card-image-box">
                <img src="/Photos/StorageUnit4.jpeg" alt="LPG Storage Facility" />
              </div>
              <div className="card-content">
                <div className="card-number">02</div>
                <h3>Storage</h3>
                <p>High-capacity, safety-first storage infrastructure designed to withstand industrial demands and ensure reserves.</p>
                <div className="card-footer" onClick={() => navigate("/network")}>Learn More →</div>
              </div>
            </div>

            <div className="service-card">
              <div className="card-image-box">
                <img src="/Photos/FullPlantShot.jpeg" alt="LPG Distribution Network" />
              </div>
              <div className="card-content">
                <div className="card-number">03</div>
                <h3>Distribution</h3>
                <p>A massive nationwide logistical network ensuring that LPG reaches every industrial and commercial corner safely.</p>
                <div className="card-footer" onClick={() => navigate("/network")}>Learn More →</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT SECTION */}
      <section className="clients-section">
        <p className="section-tag">TRUSTED BY INDUSTRY LEADERS</p>
        <div className="logo-slider">
          <div className="logo-track">
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
          background: url('/Photos/BowzerNextToStorageUnit.jpeg') no-repeat center/cover;
          display: flex; 
          align-items: center; 
          color: white; 
          padding: 60px 10%; 
        }
        .hero-overlay { 
          position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
          background: linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2)); 
        }
        .hero-content { position: relative; z-index: 2; max-width: 800px; }
        .hero-subtitle { color: #d94b2b; font-weight: 800; letter-spacing: 4px; font-size: 14px; display: block; margin-bottom: 15px; }
        .hero-content h1 { font-size: clamp(32px, 7vw, 64px); margin: 0 0 25px 0; line-height: 1.1; font-weight: 900; }
        .hero-content p { font-size: clamp(16px, 2vw, 18px); line-height: 1.6; margin-bottom: 40px; opacity: 0.9; }
        
        .hero-btns { display: flex; flex-wrap: wrap; gap: 15px; }
        .primary-btn, .secondary-btn { padding: 18px 40px; font-weight: 700; border: none; cursor: pointer; transition: 0.3s; text-transform: uppercase; letter-spacing: 1px; }
        .primary-btn { background: #d94b2b; color: white; }
        .secondary-btn { background: transparent; color: white; border: 2px solid white; }

        /* CORE OPERATIONS */
        .services { padding: 100px 10%; background: #fcfcfc; }
        .tagline { color: #d94b2b; font-weight: 700; letter-spacing: 2px; font-size: 13px; }
        .services-header h2 { font-size: clamp(28px, 5vw, 48px); margin: 10px 0; color: #1a1a1a; font-weight: 800; }
        .red-accent { width: 80px; height: 6px; background: #d94b2b; margin-bottom: 70px; }

        .service-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
        .service-card { background: white; border: 1px solid #eee; transition: 0.4s; overflow: hidden; display: flex; flex-direction: column; }
        .card-image-box { width: 100%; height: 220px; overflow: hidden; }
        .card-image-box img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
        .card-content { padding: 40px; position: relative; flex-grow: 1; }
        .card-number { position: absolute; right: 25px; top: 20px; font-size: 50px; font-weight: 900; color: rgba(0,0,0,0.04); }
        .service-card h3 { font-size: 24px; margin-bottom: 15px; font-weight: 700; color: #1a1a1a; }
        .service-card p { color: #555; line-height: 1.7; margin-bottom: 25px; font-size: 15px; }
        .card-footer { font-weight: 700; color: #d94b2b; cursor: pointer; transition: 0.3s; }
        .service-card:hover { transform: translateY(-12px); border-color: #d94b2b; box-shadow: 0 25px 50px rgba(0,0,0,0.1); }
        .service-card:hover .card-image-box img { transform: scale(1.08); }

        /* CLIENT SECTION */
        .clients-section { padding: 80px 0; background: #fff; border-top: 1px solid #eee; overflow: hidden; width: 100%; }
        .section-tag { text-align: center; font-size: 12px; letter-spacing: 3px; color: #888; font-weight: 700; margin-bottom: 50px; }
        .logo-slider { width: 100%; overflow: hidden; }
        .logo-track { display: flex; width: max-content; animation: scroll 30s linear infinite; }
        .logo-item { width: 250px; display: flex; justify-content: center; align-items: center; padding: 0 30px; }
        
        .logo-item img { 
          width: 140px; 
          height: 80px; 
          object-fit: contain; 
          filter: grayscale(0%);
          transition: 0.3s ease;
          opacity: 1;
        }
        
        .logo-item img:hover { 
          filter: grayscale(100%);
          opacity: 0.7;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }

        /* RESPONSIVE DESIGN */
        
        /* TABLETS (992px and below) */
        @media (max-width: 992px) {
          .hero { padding: 80px 5%; }
          .services { padding: 80px 5%; }
        }

        /* MOBILE (768px and below) */
        @media (max-width: 768px) {
          .hero { 
            padding: 120px 5% 60px; 
            text-align: center; 
            justify-content: center;
            min-height: 80vh;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-btns { 
            justify-content: center;
            width: 100%;
          }
          .hero-btns button { 
            width: 100%; 
          }
          .hero-overlay {
            background: rgba(0, 0, 0, 0.6); /* Darker overlay for mobile readability */
          }
          
          .services { padding: 60px 5%; }
          .services-header { text-align: center; }
          .red-accent { margin: 10px auto 40px; }
          
          .service-grid {
            grid-template-columns: 1fr; /* Force 1 column on mobile */
          }
          
          .logo-item {
             width: 180px; /* Smaller items for mobile scroll */
          }
          .logo-item img {
             width: 100px;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;