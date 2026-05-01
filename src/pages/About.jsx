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
          <span className="hero-pretitle">ESTABLISHED EXCELLENCE</span>
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
                  {/* Image changed from Opening Ceremony */}
                  <img 
                    src="/Photos/PeopleNextToCyllinders.jpeg" 
                    alt="Indus Gas Infrastructure" 
                    className="ceremony-img" 
                  />
                  <div className="experience-badge">
                    <span className="years">15+</span>
                    <span className="exp-text">Years of Quality</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION BOXES */}
      <section className="vision-mission">
        <div className="vision-grid">
          <div className="vision-box-image">
            <img src="/Photos/PeopleNextToCyllinders.jpeg" alt="Our Staff" />
            <div className="vision-overlay-box">
                <div className="icon">🚀</div>
                <h3>Our Mission</h3>
                <p>To power Pakistan's growth by delivering safe, efficient, and affordable LPG solutions to every corner of the country.</p>
            </div>
          </div>
          <div className="vision-box red-bg">
            <div className="icon white-icon">🛡️</div>
            <h3>Safety First</h3>
            <p>Uncompromised safety protocols in handling and storage, ensuring peace of mind for our commercial and domestic partners.</p>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE HIGHLIGHT */}
      <section className="infrastructure-highlight">
          <div className="container">
              <div className="infra-grid">
                  <div className="infra-card">
                      <img src="/Photos/SafetyBoard.jpeg" alt="Safety Board" />
                      <h4>Strict Compliance</h4>
                  </div>
                  <div className="infra-card">
                      <img src="/Photos/StorageUnit1.jpeg" alt="Massive LPG Storage" />
                      <h4>High Capacity Storage</h4>
                  </div>
                  <div className="infra-card">
                      <img src="/Photos/CyllinderFillingArea2.jpeg" alt="Active Filling Area" />
                      <h4>Efficient Operations</h4>
                  </div>
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
          height: 45vh;
          min-height: 400px;
          background: url('/Photos/LPGPlantShot.jpeg') no-repeat center/cover;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        .about-hero .hero-overlay {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.4));
        }
        .about-hero-content { position: relative; z-index: 2; text-align: center; padding: 0 20px; }
        .hero-pretitle { color: #d94b2b; font-weight: 800; letter-spacing: 4px; font-size: 14px; display: block; margin-bottom: 10px; }
        .about-hero-content h1 { font-size: clamp(40px, 8vw, 60px); font-weight: 900; margin: 0; text-transform: uppercase; }
        .red-accent-center { width: 80px; height: 6px; background: #d94b2b; margin: 20px auto; }

        /* CONTENT SECTION */
        .about-content { padding: 100px 10%; }
        .container { max-width: 1200px; margin: auto; }
        .content-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 80px; align-items: center; }
        .tagline { color: #d94b2b; font-weight: 700; letter-spacing: 2px; font-size: 13px; }
        .text-section h2 { font-size: clamp(30px, 5vw, 42px); font-weight: 900; color: #1a1a1a; margin: 15px 0 25px; line-height: 1.1; }
        .text-section p { color: #555; line-height: 1.8; margin-bottom: 20px; font-size: 17px; }

        /* REFINED IMAGE BOX */
        .styled-image-box { position: relative; background: #f9f9f9; padding: 10px; border-radius: 8px; box-shadow: 30px 30px 0 #f9f9f9; }
        .ceremony-img { 
          width: 100%; 
          height: auto; 
          max-height: 450px; 
          object-fit: cover; 
          border-radius: 4px; 
          display: block;
        }

        .experience-badge { 
            position: absolute; bottom: -20px; left: -20px; 
            background: #d94b2b; color: white; padding: 20px; 
            border-radius: 4px; box-shadow: 0 10px 20px rgba(0,0,0,0.2);
            display: flex; flex-direction: column; align-items: center;
            z-index: 2;
        }
        .experience-badge .years { font-size: 32px; font-weight: 900; line-height: 1; }
        .experience-badge .exp-text { font-size: 10px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; }

        /* VISION MISSION MIX */
        .vision-mission { padding: 0 10% 80px; }
        .vision-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 0; border-radius: 12px; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.1); }
        .vision-box-image { position: relative; height: 400px; }
        .vision-box-image img { width: 100%; height: 100%; object-fit: cover; }
        .vision-overlay-box { 
            position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
            background: rgba(0,0,0,0.7); display: flex; flex-direction: column; 
            justify-content: center; padding: 60px; color: white;
        }
        .vision-box { padding: 60px; display: flex; flex-direction: column; justify-content: center; }
        .red-bg { background: #d94b2b; color: white; }
        .vision-box h3 { font-size: 28px; font-weight: 800; margin: 20px 0; }
        .vision-box p { line-height: 1.7; opacity: 0.9; }

        /* INFRASTRUCTURE HIGHLIGHT */
        .infrastructure-highlight { padding: 60px 10%; background: #f4f4f4; }
        .infra-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .infra-card { position: relative; height: 300px; border-radius: 8px; overflow: hidden; }
        .infra-card img { width: 100%; height: 100%; object-fit: cover; transition: 0.4s; }
        .infra-card h4 { 
            position: absolute; bottom: 0; left: 0; width: 100%; 
            background: linear-gradient(transparent, rgba(0,0,0,0.9)); 
            color: white; padding: 25px 20px; margin: 0; font-size: 16px; font-weight: 700;
        }
        .infra-card:hover img { transform: scale(1.1); }

        /* MANAGEMENT */
        .management { padding: 100px 10%; text-align: center; }
        .section-header h2 { font-size: clamp(32px, 6vw, 48px); font-weight: 900; margin-bottom: 15px; }
        .management .red-accent { width: 70px; height: 6px; background: #d94b2b; margin: 0 auto 70px; }
        .team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; }
        .team-card { background: white; padding: 50px 30px; border: 1px solid #eee; transition: 0.4s; position: relative; }
        .team-card:hover { transform: translateY(-15px); border-color: #d94b2b; box-shadow: 0 30px 50px rgba(0,0,0,0.05); }
        .profile-placeholder { width: 100px; height: 100px; background: #f8f8f8; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px; font-size: 40px; color: #ccc; }
        .team-card h4 { font-size: 22px; margin-bottom: 8px; font-weight: 800; }
        .team-card p { color: #d94b2b; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; }

        /* RESPONSIVE OVERRIDES */
        @media (max-width: 992px) {
          .about-content { padding: 60px 5%; }
          .content-grid { grid-template-columns: 1.1fr; gap: 40px; }
          .vision-grid { grid-template-columns: 1fr; }
          .infra-grid { grid-template-columns: 1fr; }
          .infra-card { height: 350px; }
          .styled-image-box { box-shadow: 15px 15px 0 #f9f9f9; margin-right: 15px; }
          .experience-badge { left: -10px; bottom: -10px; padding: 15px; }
          .vision-mission { padding: 0 5% 60px; }
          .vision-overlay-box, .vision-box { padding: 40px 20px; }
          .management { padding: 60px 5%; }
          .infrastructure-highlight { padding: 60px 5%; }
        }

        @media (max-width: 480px) {
          .about-hero { height: 35vh; min-height: 300px; }
          .experience-badge { padding: 10px; }
          .experience-badge .years { font-size: 24px; }
        }
      `}</style>
    </div>
  );
}

export default About;