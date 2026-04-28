import React from "react";

function Contact() {
  return (
    <div className="contact-wrapper">
      {/* HEADER SECTION */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="contact-hero-content">
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
            </div>

            {/* RIGHT: CONTACT FORM */}
            <div className="contact-form-container">
              <form className="contact-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" />
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
          height: 40vh; 
          min-height: 300px;
          background: url('/BG.jpg') no-repeat center/cover; 
          position: relative; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          color: white; 
          text-align: center; 
          padding: 0 20px;
        }
        .contact-hero .hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); }
        .contact-hero-content { position: relative; z-index: 2; }
        .contact-hero-content h1 { font-size: clamp(32px, 8vw, 48px); font-weight: 800; margin: 0; }
        .red-accent-center { width: 60px; height: 5px; background: #d94b2b; margin: 20px auto; }

        /* MAIN LAYOUT */
        .contact-main { padding: 80px 10%; }
        .container { max-width: 1200px; margin: auto; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
        
        .tagline { color: #d94b2b; font-weight: 700; letter-spacing: 2px; font-size: 13px; }
        .contact-info-panel h2 { font-size: clamp(28px, 5vw, 36px); font-weight: 800; margin: 15px 0; line-height: 1.2; }
        .sub-text { color: #666; margin-bottom: 40px; }

        /* BENTO GRID */
        .contact-info-bento { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .info-card { 
          background: #f4faff; 
          padding: 25px; 
          border-radius: 12px; 
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); 
          position: relative; 
          overflow: hidden; 
          cursor: pointer; 
          color: #1a1a1a; 
          z-index: 1; 
        }
        .card-header { display: flex; align-items: center; gap: 12px; }
        .icon-box { font-size: 22px; color: #d94b2b; transition: transform 0.3s ease, color 0.3s ease; }
        .info-card h3 { margin: 0; font-size: 18px; font-weight: 700; color: inherit; transition: color 0.3s ease; }
        .info-card p { margin: 12px 0 0 0; color: inherit; font-size: 14px; line-height: 1.5; opacity: 0.8; transition: color 0.3s ease; }
        .location { grid-row: span 2; }
        
        .bg-icon-watermark { position: absolute; right: -10px; bottom: -10px; font-size: 80px; opacity: 0.05; transform: rotate(-15deg); color: #d94b2b; transition: all 0.4s ease; z-index: -1; }
        
        /* HOVER EFFECTS */
        .info-card:hover { transform: translateY(-8px); box-shadow: 0 15px 30px rgba(217, 75, 43, 0.2); background: #d94b2b; color: white; }
        .info-card:hover .icon-box { transform: scale(1.2); color: #fff; }
        .info-card:hover .bg-icon-watermark { color: white; opacity: 0.15; }

        /* FORM STYLES */
        .contact-form-container { background: #fff; padding: 40px; border-radius: 8px; box-shadow: 0 20px 50px rgba(0,0,0,0.05); border: 1px solid #eee; }
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; font-size: 14px; font-weight: 700; margin-bottom: 8px; }
        .form-group input, .form-group select, .form-group textarea { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 4px; font-family: inherit; font-size: 14px; }
        .submit-btn { width: 100%; padding: 15px; background: #d94b2b; color: white; border: none; border-radius: 4px; font-weight: 700; cursor: pointer; transition: 0.3s; letter-spacing: 1px; }
        .submit-btn:hover { background: #b83d23; transform: translateY(-2px); }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 992px) {
          .contact-main { padding: 60px 5%; }
          .contact-grid { grid-template-columns: 1fr; gap: 50px; }
          .contact-info-panel { text-align: center; }
          .contact-form-container { padding: 30px 20px; }
        }

        @media (max-width: 650px) {
          .contact-info-bento { grid-template-columns: 1fr; }
          .location { grid-row: span 1; }
          .info-card { padding: 20px; }
        }
      `}</style>
    </div>
  );
}

export default Contact;