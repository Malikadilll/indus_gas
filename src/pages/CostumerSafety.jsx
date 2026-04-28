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
                it can accumulate in low-lying areas (like floors or basements) if ventilation is inadequate.
              </div>
            </div>
            <div className="facts-image">
               <div className="safety-illustration">
                  <div className="circle-bg"></div>
                  <span className="main-icon">🛡️</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY TIPS CHECKLIST */}
      <section className="safety-tips">
        <div className="container">
          <div className="section-header">
            <h2>Safety Prescriptions</h2>
            <p>Adopt these essential habits to ensure a safe energy experience at home or work.</p>
            <div className="red-accent"></div>
          </div>

          <div className="tips-grid">
            {safetyTips.map((tip, index) => (
              <div className="tip-card" key={index}>
                <div className="tip-icon">{tip.icon}</div>
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
          <div className="emergency-card">
            <h2>In Case of a Leak</h2>
            <p>If you detect a leak via the soap test or smell:</p>
            <ul>
              <li>Immediately turn off the regulator.</li>
              <li>Disconnect the cylinder from the stove/appliance.</li>
              <li>Move the cylinder to an open, well-ventilated outdoor area.</li>
              <li>Contact your local Indus Gas distributor immediately for assistance.</li>
            </ul>
          </div>
        </div>
      </section>

      <style>{`
        .safety-wrapper { font-family: 'Inter', sans-serif; background: #fff; overflow-x: hidden; }

        /* HERO SECTION */
        .safety-hero {
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
        .safety-hero .hero-overlay {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0,0,0,0.8);
        }
        .safety-hero-content { position: relative; z-index: 2; }
        .safety-hero-content h1 { font-size: clamp(32px, 7vw, 48px); font-weight: 800; margin: 0; }
        .safety-hero-content p { font-size: clamp(16px, 2vw, 18px); opacity: 0.9; margin-top: 10px; }
        .red-accent-center { width: 60px; height: 5px; background: #d94b2b; margin: 20px auto; }

        /* LPG FACTS */
        .lpg-facts { padding: 80px 10%; background: #fcfcfc; }
        .container { max-width: 1200px; margin: auto; }
        .facts-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 60px; align-items: center; }
        .tagline { color: #d94b2b; font-weight: 700; letter-spacing: 2px; font-size: 13px; }
        .facts-text h2 { font-size: clamp(28px, 5vw, 36px); font-weight: 800; margin: 15px 0; line-height: 1.2; }
        .facts-text p { color: #555; line-height: 1.8; margin-bottom: 25px; }
        
        .warning-box {
          background: #fff3f3;
          border-left: 5px solid #d94b2b;
          padding: 25px;
          color: #d94b2b;
          line-height: 1.6;
          font-size: 15px;
        }

        .safety-illustration {
          position: relative;
          height: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .circle-bg {
          position: absolute;
          width: 200px; height: 200px;
          background: #f0f0f0;
          border-radius: 50%;
          animation: pulse 4s infinite;
        }
        .main-icon { font-size: clamp(60px, 10vw, 100px); z-index: 2; }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }

        /* SAFETY TIPS */
        .safety-tips { padding: 80px 10%; }
        .section-header { text-align: center; margin-bottom: 60px; }
        .section-header h2 { font-size: clamp(30px, 6vw, 42px); font-weight: 800; margin-bottom: 10px; }
        .safety-tips .red-accent { width: 60px; height: 5px; background: #d94b2b; margin: 0 auto; }

        .tips-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
            gap: 25px; 
        }
        .tip-card {
          display: flex;
          gap: 20px;
          padding: clamp(20px, 3vw, 30px);
          background: #fff;
          border: 1px solid #eee;
          transition: 0.3s;
        }
        .tip-card:hover { border-color: #d94b2b; transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
        .tip-icon { font-size: 35px; flex-shrink: 0; }
        .tip-info h3 { font-size: 20px; margin-bottom: 10px; color: #1a1a1a; font-weight: 700; }
        .tip-info p { font-size: 14px; color: #666; line-height: 1.6; }

        /* EMERGENCY SECTION */
        .emergency { padding: 0 10% 80px; }
        .emergency-card {
          background: #1a1a1a;
          color: white;
          padding: clamp(30px, 6vw, 60px);
          border-radius: 4px;
          text-align: center;
        }
        .emergency-card h2 { color: #d94b2b; font-size: clamp(24px, 5vw, 32px); margin-bottom: 20px; font-weight: 800; }
        .emergency-card ul { 
          list-style: none; 
          padding: 0; 
          display: inline-block; 
          text-align: left; 
          margin-top: 15px;
        }
        .emergency-card li { 
          margin-bottom: 15px; 
          padding-left: 30px; 
          position: relative; 
          color: #ccc;
          font-size: 15px;
          line-height: 1.4;
        }
        .emergency-card li::before {
          content: "✔";
          position: absolute;
          left: 0;
          color: #d94b2b;
          font-weight: bold;
        }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 992px) {
          .lpg-facts, .safety-tips, .emergency { padding-left: 5%; padding-right: 5%; }
          .facts-grid { grid-template-columns: 1fr; gap: 40px; text-align: center; }
          .facts-text { order: 2; }
          .facts-image { order: 1; }
          .warning-box { text-align: left; }
        }

        @media (max-width: 576px) {
          .tip-card { flex-direction: column; text-align: center; align-items: center; }
          .tip-info h3 { font-size: 18px; }
          .emergency-card ul { display: block; }
        }
      `}</style>
    </div>
  );
}

export default Safety;