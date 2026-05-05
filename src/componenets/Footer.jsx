import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* COLUMN 1: BRAND */}
        <div className="footer-col brand-col">
          <h2 className="footer-logo">INDUS GAS</h2>
          <p className="footer-desc">
            A leading LPG Marketing and Distribution Company in Pakistan with 
            extensive experience in safe procurement and handling.
          </p>
        </div>

        {/* COLUMN 2: QUICK LINKS */}
        <div className="footer-col">
          <h3>QUICK LINKS</h3>
          <ul className="footer-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/network">Network</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        {/* COLUMN 3: HEAD OFFICE */}
        <div className="footer-col">
          <h3>HEAD OFFICE</h3>
          <div className="address-lines">
            <p>Office No # 4, 1st Floor Safdar Mansion,</p>
            <p>Fazal-e-Haq Road, Blue Area,</p>
            <p>Islamabad, Pakistan.</p>
          </div>
        </div>

        {/* COLUMN 4: PLANT & CONTACT */}
        <div className="footer-col">
          <h3>PLANT & CONTACT</h3>
          <div className="address-lines">
            <p>Tapo Pir Azeem Shah, Taluka Hussain Bux Mari</p>
            <p>Tehsil & District Mirpurkhas, Sindh.</p>
          </div>
          <div className="contact-info">
            <p>📞 0300 2298760</p>
            <p>📧 info@indusgas.com.pk</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Indus Gas Private Limited. All Rights Reserved.</p>
      </div>

      <style>{`
        .footer {
          background: #1a1a1a;
          color: #fff;
          padding: 80px 0 20px 0;
          font-family: 'Inter', sans-serif;
          width: 100%;
        }

        .footer-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          /* Adjusted minmax to 220px to prevent overflow on smaller tablets */
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 40px;
          padding: 0 5%;
        }

        .footer-col h2.footer-logo {
          color: #d94b2b;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 20px;
          font-size: 24px;
        }

        .footer-col h3 {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 25px;
          color: #d94b2b;
          text-transform: uppercase;
        }

        .footer-desc {
          color: #bbb;
          line-height: 1.6;
          font-size: 14px;
          max-width: 300px;
        }

        .footer-col p {
          color: #bbb;
          font-size: 14px;
          margin-bottom: 8px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .footer-links a {
          color: #bbb;
          text-decoration: none;
          transition: 0.3s ease;
          font-size: 14px;
          display: inline-block;
        }

        .footer-links a:hover {
          color: #d94b2b;
          transform: translateX(5px);
        }

        .contact-info {
          margin-top: 20px;
          border-top: 1px solid #333;
          padding-top: 15px;
        }

        .footer-bottom {
          text-align: center;
          margin-top: 60px;
          padding: 20px 5% 0;
          border-top: 1px solid #333;
          font-size: 12px;
          color: #666;
        }

        /* TABLET VIEW */
        @media (max-width: 992px) {
          .footer-container {
            grid-template-columns: 1fr 1fr; /* 2 columns on tablets */
            gap: 50px 30px;
          }
          .footer-desc { max-width: 100%; }
        }

        /* MOBILE VIEW */
        @media (max-width: 576px) {
          .footer { padding: 60px 0 20px 0; }
          
          .footer-container {
            grid-template-columns: 1fr; /* 1 column on mobile */
            text-align: center;
            gap: 40px;
          }

          .brand-col {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .footer-links a:hover {
            transform: scale(1.1); /* Center scale instead of slide on mobile */
          }

          .contact-info {
            display: flex;
            flex-direction: column;
            align-items: center;
            border-top: 1px solid #333;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;