import React from "react";

function Contact() {
  return (
    <div className="contact-wrapper">
      {/* HEADER SECTION */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="contact-hero-content">
          <span className="hero-pretitle">GET IN TOUCH</span>
          <h1>Contact Us</h1>
          <p>Get in touch with our team for inquiries, distribution, or support.</p>
          <div className="red-accent-center"></div>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            
            {/* LEFT: BENTO CONTACT INFO GRID */}
            <div className="contact-info-panel">
              <span className="tagline">REACH OUT</span>
              <h2>Our Headquarters</h2>
              <p className="sub-text">We are strategically located in the heart of Islamabad's business hub.</p>
              
              <div className="contact-info-bento">
                {/* LOCATION CARD */}
                <div className="info-card location">
                  <div className="card-header">
                    <div className="icon-box">📍</div>
                    <h3>Location</h3>
                  </div>
                  <p>Office No # 4, 1st Floor Safdar Mansion, Fazal-e-Haq Road, Blue Area, Islamabad.</p>
                  <div className="bg-icon-watermark">📍</div>
                </div>

                {/* PHONE 1 CARD */}
                <div className="info-card">
                  <div className="card-header">
                    <div className="icon-box">📞</div>
                    <h3>Phone</h3>
                  </div>
                  <p>0314 5140932</p>
                  <div className="bg-icon-watermark">📞</div>
                </div>

                {/* EMAIL CARD */}
                <div className="info-card">
                  <div className="card-header">
                    <div className="icon-box">📧</div>
                    <h3>Email</h3>
                  </div>
                  <p>info@indusgas.com</p>
                  <div className="bg-icon-watermark">📧</div>
                </div>

                {/* PHONE 2 CARD */}
                <div className="info-card">
                  <div className="card-header">
                    <div className="icon-box">📞</div>
                    <h3>Phone</h3>
                  </div>
                  <p>0309 3335125</p>
                  <div className="bg-icon-watermark">📞</div>
                </div>
              </div>

              {/* REINFORCEMENT IMAGE BOX */}
              <div className="contact-image-reinforcement">
                  <img src="/Photos/BowzerNextToStorageUnit.jpeg" alt="Logistics Infrastructure" />
                  <div className="image-label">24/7 Dispatch & Support</div>
              </div>
            </div>

            {/* RIGHT: CONTACT FORM */}
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Saad" />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="name@company.com" />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <select>
                    <option>General Inquiry</option>
                    <option>Become a Distributor</option>
                    <option>Commercial LPG Query</option>
                    <option>Support</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea rows="5" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="submit-btn">SEND MESSAGE</button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FIXED MAP SECTION */}
      <section className="map-section">
        <div className="map-container">
          <iframe 
            title="Indus Gas Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.570044565706!2d73.0769665762514!3d33.7209375351989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf838290dddd%3A0x15178685d6826592!2sSafdar%20Mansion!5e0!3m2!1sen!2spk!4v1714100000000!5m2!1sen!2spk" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </section>

      <style>{`
        .contact-wrapper { font-family: 'Inter', sans-serif; background: #fff; overflow-x: hidden; }

        /* HERO SECTION */
        .contact-hero { 
          height: 45vh; 
          min-height: 400px;
          background: url('/Photos/LPGPlantShot.jpeg') no-repeat center/cover; 
          position: relative; 
          display: flex; align-items: center; justify-content: center; color: white; text-align: center;
        }
        .contact-hero .hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); }
        .contact-hero-content { position: relative; z-index: 2; padding: 0 20px; }
        .hero-pretitle { color: #d94b2b; font-weight: 800; letter-spacing: 4px; font-size: 14px; display: block; margin-bottom: 10px; }
        .contact-hero-content h1 { font-size: clamp(32px, 8vw, 56px); font-weight: 900; text-transform: uppercase; margin: 0; }
        .contact-hero-content p { font-size: clamp(16px, 2vw, 18px); margin-top: 15px; opacity: 0.9; }
        .red-accent-center { width: 80px; height: 6px; background: #d94b2b; margin: 25px auto; }

        /* MAIN LAYOUT */
        .contact-main { padding: 100px 10%; }
        .container { max-width: 1200px; margin: auto; }
        .contact-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 80px; }
        
        .tagline { color: #d94b2b; font-weight: 700; letter-spacing: 2px; font-size: 13px; text-transform: uppercase; }
        .contact-info-panel h2 { font-size: clamp(28px, 5vw, 42px); font-weight: 900; margin: 15px 0 20px; line-height: 1.1; }
        .sub-text { color: #666; margin-bottom: 40px; font-size: 17px; }

        /* BENTO GRID */
        .contact-info-bento { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 40px; }
        .info-card { 
          background: #f8f9fa; 
          padding: 30px; 
          border-radius: 12px; 
          transition: all 0.4s ease; 
          position: relative; 
          overflow: hidden; 
          border: 1px solid #eee;
          display: flex;
          flex-direction: column;
        }
        .card-header { display: flex; align-items: center; gap: 15px; }
        .icon-box { font-size: 24px; color: #d94b2b; }
        .info-card h3 { margin: 0; font-size: 19px; font-weight: 800; }
        .info-card p { margin: 15px 0 0 0; font-size: 15px; line-height: 1.6; font-weight: 500; color: #444; z-index: 2; position: relative; }
        .location { grid-row: span 2; }
        
        .bg-icon-watermark { position: absolute; right: -10px; bottom: -10px; font-size: 80px; opacity: 0.05; transform: rotate(-15deg); color: #d94b2b; z-index: 1; }
        
        .info-card:hover { transform: translateY(-8px); background: #d94b2b !important; color: white !important; border-color: #d94b2b; }
        .info-card:hover .icon-box, .info-card:hover p, .info-card:hover h3 { color: white !important; }
        .info-card:hover .bg-icon-watermark { color: white !important; opacity: 0.2; }

        /* IMAGE REINFORCEMENT */
        .contact-image-reinforcement { position: relative; border-radius: 12px; overflow: hidden; height: 250px; }
        .contact-image-reinforcement img { width: 100%; height: 100%; object-fit: cover; }
        .image-label { 
            position: absolute; bottom: 0; left: 0; width: 100%; 
            background: rgba(26, 26, 26, 0.8); color: white; padding: 15px 25px; 
            font-weight: 700; font-size: 14px; 
        }

        /* FORM STYLES */
        .contact-form-container { background: #fff; padding: 50px; border-radius: 12px; box-shadow: 0 30px 60px rgba(0,0,0,0.08); border: 1px solid #f0f0f0; }
        .form-group { margin-bottom: 25px; }
        .form-group label { display: block; font-size: 14px; font-weight: 800; margin-bottom: 10px; text-transform: uppercase; color: #1a1a1a; }
        .form-group input, .form-group select, .form-group textarea { 
            width: 100%; padding: 15px; border: 1px solid #e0e0e0; border-radius: 6px; 
            font-family: inherit; font-size: 15px; transition: 0.3s;
        }
        .form-group input:focus, .form-group textarea:focus { border-color: #d94b2b; outline: none; }
        .submit-btn { 
            width: 100%; padding: 18px; background: #d94b2b; color: white; border: none; 
            border-radius: 6px; font-weight: 800; cursor: pointer; transition: 0.3s; 
            letter-spacing: 2px; text-transform: uppercase; 
        }
        .submit-btn:hover { background: #b83d23; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(217, 75, 43, 0.3); }

        /* MAP SECTION */
        .map-section { line-height: 0; }

        /* RESPONSIVE */
        @media (max-width: 992px) {
          .contact-main { padding: 60px 5%; }
          .contact-grid { grid-template-columns: 1fr; gap: 60px; }
          .contact-info-panel { text-align: center; }
          .contact-info-bento { grid-template-columns: 1fr 1fr; }
          .location { grid-row: auto; grid-column: span 2; }
          .contact-image-reinforcement { height: 300px; }
          .card-header { justify-content: center; }
        }

        @media (max-width: 600px) {
          .contact-info-bento { grid-template-columns: 1fr; }
          .location { grid-column: auto; }
          .contact-form-container { padding: 30px 20px; }
          .contact-image-reinforcement { height: 250px; }
          .card-header { justify-content: flex-start; }
          .contact-info-panel { text-align: left; }
        }
      `}</style>
    </div>
  );
}

export default Contact;