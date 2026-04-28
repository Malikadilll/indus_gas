import React from "react";

function About() {
  const management = [
    { name: "Mr. Qasim Bashir", role: "CEO & Director" },
    { name: "Mr. Afzal Ahmed", role: "Director" },
    { name: "Mr. Imtiaz Ahmed", role: "Director" },
  ];

  return (
    <div className="about-wrapper">
      {/* MINI HERO / HEADER */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="about-hero-content">
          <h1>About Us</h1>
          <div className="red-accent-center"></div>
        </div>
      </section>

      {/* COMPANY PROFILE */}
      <section className="about-content">
        <div className="container">
          <div className="content-grid">
            <div className="text-section">
              <span className="tagline">WHO WE ARE</span>
              <h2>A Legacy of Excellence in LPG Marketing</h2>
              <p>
                <strong>Indus Gas Private Limited</strong> is a premier LPG Marketing and Distribution 
                Company in Pakistan. Backed by a group heritage of over 15 years in the energy sector, 
                we bring unparalleled expertise in Procurement, Storage, Handling, and Distribution.
              </p>
              <p>
                Our mission is to provide clean and affordable energy to both domestic and commercial 
                users in the safest way possible. With a dedicated network of LPG distributors, 
                robust road transport, and a rapidly growing cylinder infrastructure, we are committed 
                to quality and safety above all else.
              </p>
            </div>
            <div className="image-section">
               <div className="styled-image-box">
                  <img src="/BG.jpg" alt="Indus Gas Infrastructure" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION BOXES */}
      <section className="vision-mission">
        <div className="vision-grid">
          <div className="vision-box">
            <div className="icon">🚀</div>
            <h3>Our Mission</h3>
            <p>To power Pakistan's growth by delivering safe, efficient, and affordable LPG solutions to every corner of the country.</p>
          </div>
          <div className="vision-box red-bg">
            <div className="icon white-icon">🛡️</div>
            <h3>Safety First</h3>
            <p>Uncompromised safety protocols in handling and storage, ensuring peace of mind for our commercial and domestic partners.</p>
          </div>
        </div>
      </section>

      {/* MANAGEMENT TEAM */}
      <section className="management">
        <div className="container">
          <div className="section-header">
            <h2>Our Management</h2>
            <p>Led by professionals with decades of rich experience in the LPG industry.</p>
            <div className="red-accent"></div>
          </div>

          <div className="team-grid">
            {management.map((member, index) => (
              <div className="team-card" key={index}>
                <div className="profile-placeholder">
                  <span>👤</span>
                </div>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .about-wrapper { font-family: 'Inter', sans-serif; background: #fff; overflow-x: hidden; }

        /* ABOUT HERO */
        .about-hero {
          height: 40vh;
          min-height: 300px;
          background: url('/BG.jpg') no-repeat center/cover;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        .about-hero .hero-overlay {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0,0,0,0.7);
        }
        .about-hero-content { position: relative; z-index: 2; text-align: center; padding: 0 20px; }
        .about-hero-content h1 { 
            font-size: clamp(36px, 8vw, 52px); 
            font-weight: 800; 
            margin: 0; 
            letter-spacing: 2px; 
        }
        .red-accent-center { width: 60px; height: 5px; background: #d94b2b; margin: 15px auto; }

        /* CONTENT SECTION */
        .about-content { padding: 80px 10%; }
        .container { max-width: 1200px; margin: auto; }
        .content-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 60px; align-items: center; }
        .tagline { color: #d94b2b; font-weight: 700; letter-spacing: 2px; font-size: 13px; }
        .text-section h2 { 
            font-size: clamp(28px, 5vw, 38px); 
            font-weight: 800; 
            color: #1a1a1a; 
            margin: 15px 0 25px; 
            line-height: 1.2; 
        }
        .text-section p { color: #555; line-height: 1.8; margin-bottom: 20px; font-size: 16px; }

        .styled-image-box {
          position: relative;
          border-left: 10px solid #d94b2b;
          padding-left: 20px;
        }
        .styled-image-box img { width: 100%; border-radius: 4px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }

        /* VISION MISSION BOXES */
        .vision-mission { padding: 0 10% 80px; }
        .vision-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
        .vision-box { padding: clamp(30px, 5vw, 60px); background: #f9f9f9; border-radius: 4px; transition: 0.3s; }
        .vision-box h3 { font-size: 24px; margin: 20px 0; font-weight: 700; }
        .vision-box p { color: #666; line-height: 1.6; }
        .icon { font-size: 40px; }
        .red-bg { background: #d94b2b; color: white; }
        .red-bg p { color: rgba(255,255,255,0.9); }

        /* MANAGEMENT */
        .management { padding: 80px 10%; background: #fcfcfc; text-align: center; }
        .section-header h2 { font-size: clamp(30px, 6vw, 42px); font-weight: 800; margin-bottom: 10px; }
        .section-header p { color: #888; margin-bottom: 20px; font-size: 15px; }
        .management .red-accent { width: 60px; height: 5px; background: #d94b2b; margin: 0 auto 60px; }

        .team-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); 
          gap: 30px; 
        }
        .team-card {
          background: white;
          padding: 40px 20px;
          border-radius: 4px;
          border: 1px solid #eee;
          transition: 0.3s;
        }
        .team-card:hover { transform: translateY(-10px); border-color: #d94b2b; box-shadow: 0 15px 30px rgba(0,0,0,0.05); }
        .profile-placeholder {
          width: 80px; height: 80px; background: #f0f0f0; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px; font-size: 30px;
        }
        .team-card h4 { font-size: 19px; margin-bottom: 5px; color: #1a1a1a; font-weight: 700; }
        .team-card p { color: #d94b2b; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 992px) {
          .about-content, .vision-mission, .management { padding-left: 5%; padding-right: 5%; }
          .content-grid { grid-template-columns: 1fr; gap: 40px; text-align: center; }
          .styled-image-box { border-left: none; border-top: 8px solid #d94b2b; padding-left: 0; padding-top: 20px; }
          .vision-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 480px) {
          .about-content { padding-top: 60px; padding-bottom: 60px; }
          .vision-box { padding: 30px 20px; }
          .management { padding-bottom: 60px; }
          .team-card { padding: 30px 15px; }
        }
      `}</style>
    </div>
  );
}

export default About;