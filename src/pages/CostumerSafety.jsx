import React from "react";

function Safety() {
  const safetyTips = [
    {
      title: "Upright Position",
      desc: "Always keep cylinders in an upright position on a flat surface to ensure the safety valve functions correctly.",
      icon: "⬆️"
    },
    {
      title: "Ventilation",
      desc: "Keep kitchen windows and vents open while cooking to allow for proper air circulation.",
      icon: "🪟"
    },
    {
      title: "Regulator Control",
      desc: "Always turn the regulator valve to the 'OFF' position when the cylinder is not in use, especially at night.",
      icon: "🔘"
    },
    {
      title: "Soap Test",
      desc: "Check for leaks regularly by applying soap solution to the valves. Formation of bubbles indicates a leak.",
      icon: "🧼"
    },
    {
      title: "No Open Flames",
      desc: "Never check for gas leaks using matches, lighters, or any other open flame.",
      icon: "🚫"
    }
  ];

  return (
    <div className="safety-wrapper">
      {/* HEADER SECTION */}
      <section className="safety-hero">
        <div className="hero-overlay"></div>
        <div className="safety-hero-content">
          <span className="hero-pretitle">SAFETY STANDARDS</span>
          <h1>Customer Safety First</h1>
          <p>Your safety is our top priority. Learn how to handle LPG responsibly.</p>
          <div className="red-accent-center"></div>
        </div>
      </section>

      {/* WHAT IS LPG? */}
      <section className="lpg-facts">
        <div className="container">
          <div className="facts-grid">
            <div className="facts-text">
              <span className="tagline">TECHNICAL KNOWLEDGE</span>
              <h2>Understanding LPG</h2>
              <p>
                LPG (Liquefied Petroleum Gas) is a colorless liquid that evaporates into a gas. 
                While it naturally has no smell, a distinct "odorant" is added to help users 
                detect even the smallest leaks immediately.
              </p>
              <div className="warning-box">
                <strong>⚠️ Critical Fact:</strong> LPG is heavier than air. In the event of a leak, 
                it can accumulate in low-lying areas (like floors or basements).
              </div>
            </div>
            <div className="facts-image-container">
               <img src="/Photos/CyllindersMoreThan100.jpeg" alt="LPG Cylinder Storage" className="side-image" />
               <div className="image-accent-border"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY TIPS CHECKLIST */}
      <section className="safety-tips">
        <div className="container">
          <div className="section-header">
            <span className="tagline">BEST PRACTICES</span>
            <h2>Safety Prescriptions</h2>
            <div className="red-accent"></div>
          </div>

          <div className="tips-grid">
            {safetyTips.map((tip, index) => (
              <div className="tip-card" key={index}>
                <div className="tip-icon-box">{tip.icon}</div>
                <div className="tip-info">
                  <h3>{tip.title}</h3>
                  <p>{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY ACTION */}
      <section className="emergency">
        <div className="container">
          <div className="emergency-flex">
            <div className="emergency-card">
              <h2>In Case of a Leak</h2>
              <p>If you detect a leak via the soap test or smell:</p>
              <ul>
                <li>Immediately turn off the regulator.</li>
                <li>Disconnect the cylinder from the stove/appliance.</li>
                <li>Move the cylinder to an open, well-ventilated outdoor area.</li>
                <li>Contact your local Indus Gas distributor immediately.</li>
              </ul>
            </div>
            <div className="emergency-visual">
                <img src="/Photos/safety.jpg" alt="Cylinder Safety" />
                <div className="sos-overlay">EMERGENCY GUIDE</div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .safety-wrapper { font-family: 'Inter', sans-serif; background: #fff; overflow-x: hidden; }

        /* HERO SECTION */
        .safety-hero {
          height: 50vh;
          min-height: 400px;
          background: url('/Photos/StorageUnit3.jpeg') no-repeat center/cover;
          position: relative;
          display: flex; align-items: center; justify-content: center; color: white; text-align: center;
        }
        .safety-hero .hero-overlay {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.4));
        }
        .safety-hero-content { position: relative; z-index: 2; padding: 0 20px; }
        .hero-pretitle { color: #d94b2b; font-weight: 800; letter-spacing: 4px; font-size: 14px; margin-bottom: 10px; display: block; }
        .safety-hero-content h1 { font-size: clamp(32px, 8vw, 56px); font-weight: 900; margin: 0; text-transform: uppercase; }
        .red-accent-center { width: 80px; height: 6px; background: #d94b2b; margin: 25px auto; }

        /* LPG FACTS */
        .lpg-facts { padding: 100px 10%; background: #fcfcfc; }
        .container { max-width: 1200px; margin: auto; }
        .facts-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .facts-text h2 { font-size: clamp(28px, 5vw, 42px); font-weight: 900; margin: 15px 0 25px; line-height: 1.1; }
        .facts-text p { color: #555; line-height: 1.8; margin-bottom: 25px; font-size: 17px; }
        
        .warning-box {
          background: #fff3f3;
          border-left: 6px solid #d94b2b;
          padding: 30px;
          color: #d94b2b;
          line-height: 1.6;
          font-size: 16px;
          font-weight: 500;
        }

        .facts-image-container { position: relative; }
        .side-image { width: 100%; border-radius: 8px; box-shadow: 20px 20px 0 #eee; z-index: 2; position: relative; }

        /* SAFETY TIPS */
        .safety-tips { padding: 100px 10%; }
        .section-header { text-align: center; margin-bottom: 70px; }
        .section-header h2 { font-size: clamp(32px, 6vw, 48px); font-weight: 900; margin-bottom: 15px; }
        .safety-tips .red-accent { width: 80px; height: 6px; background: #d94b2b; margin: 0 auto; }

        .tips-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; }
        .tip-card {
          display: flex; gap: 25px; padding: 40px; background: white;
          border: 1px solid #eee; transition: 0.4s; align-items: flex-start;
        }
        .tip-card:hover { border-color: #d94b2b; transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.05); }
        .tip-icon-box { font-size: 50px; line-height: 1; flex-shrink: 0; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1)); }
        .tip-info h3 { font-size: 22px; margin-bottom: 12px; color: #1a1a1a; font-weight: 800; }
        .tip-info p { font-size: 15px; color: #666; line-height: 1.7; }

        /* EMERGENCY SECTION */
        .emergency { padding: 0 10% 100px; }
        .emergency-flex { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border-radius: 12px; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.1); }
        
        .emergency-card { background: #1a1a1a; color: white; padding: 60px; }
        .emergency-card h2 { color: #d94b2b; font-size: clamp(28px, 4vw, 36px); margin-bottom: 25px; font-weight: 900; }
        .emergency-card ul { list-style: none; padding: 0; margin-top: 25px; }
        .emergency-card li { margin-bottom: 18px; padding-left: 35px; position: relative; color: #ccc; font-size: 16px; line-height: 1.5; }
        .emergency-card li::before { content: "✔"; position: absolute; left: 0; color: #d94b2b; font-weight: bold; font-size: 20px; }

        .emergency-visual { position: relative; height: 100%; }
        .emergency-visual img { width: 100%; height: 100%; object-fit: cover; }
        .sos-overlay { 
            position: absolute; top: 20px; right: 20px; background: #d94b2b; 
            color: white; padding: 10px 20px; font-weight: 900; font-size: 12px; letter-spacing: 2px;
        }

        /* RESPONSIVE ADDITIONS */
        @media (max-width: 992px) {
          .lpg-facts { padding: 60px 5%; }
          .facts-grid { grid-template-columns: 1fr; gap: 40px; }
          .side-image { box-shadow: 10px 10px 0 #eee; }
          
          .safety-tips { padding: 60px 5%; }
          .tips-grid { grid-template-columns: 1fr; }
          .tip-card { padding: 30px 20px; }
          
          .emergency { padding: 0 5% 60px; }
          .emergency-flex { grid-template-columns: 1fr; }
          .emergency-card { padding: 40px 30px; }
          .emergency-visual { height: 350px; order: -1; } /* Image moves above text on mobile */
        }

        @media (max-width: 480px) {
          .safety-hero { height: 40vh; }
          .warning-box { padding: 20px; }
          .tip-card { flex-direction: column; gap: 15px; }
        }
      `}</style>
    </div>
  );
}

export default Safety;