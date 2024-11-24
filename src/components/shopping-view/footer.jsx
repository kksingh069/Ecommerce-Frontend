import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
export default function Footer() {
  return (
    <>
      <style>
        {`
          .footer {
            background: linear-gradient(180deg, #000000 0%, #1a1a1a 100%);
            color: #ffffff;
            padding: 80px 0 40px;
            font-family: system-ui, -apple-system, sans-serif;
          }

          .footer-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

          .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
          }

         
          .brand-name {
            font-size: 28px;
            font-weight: 700;
            background: linear-gradient(45deg, #00e6b8 0%, #00a3e6 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 20px;
          }

          .brand-description {
            color: #a3a3a3;
            line-height: 1.6;
            margin-bottom: 25px;
          }

          .social-icons {
            display: flex;
            gap: 15px;
          }

          .social-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .social-icon:hover {
            background: #00e6b8;
            transform: translateY(-3px);
          }

          .footer-section {
            margin-bottom: 30px;
          }

          .section-title {
            color: #ffffff;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 25px;
            position: relative;
            padding-bottom: 10px;
          }

          .section-title::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 40px;
            height: 2px;
            background: #00e6b8;
          }

          .link-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .link-item {
            margin-bottom: 12px;
          }

          .link {
            color: #a3a3a3;
            text-decoration: none;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }

          .link:hover {
            color: #00e6b8;
            transform: translateX(5px);
          }

          .contact-info {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 15px;
            color: #a3a3a3;
          }

          .contact-icon {
            min-width: 40px;
            height: 40px;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .footer-bottom {
            margin-top: 20px;
            padding-top: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
            color: #a3a3a3;
          }

          .bottom-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 15px;
          }

          .bottom-link {
            color: #a3a3a3;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .bottom-link:hover {
            color: #00e6b8;
          }

          @media (max-width: 768px) {
            .footer-grid {
              grid-template-columns: 1fr;
            }

            .bottom-links {
              flex-direction: column;
              gap: 10px;
            }
          }
        `}
      </style>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="brand-section">
              <div className="brand-name">Love Veda</div>
              <p className="brand-description">
                Crafting sustainable and eco-friendly products for a better tomorrow. 
                Join us in making a difference in the world.
              </p>
              <div className="social-icons">
                <div className="social-icon">
                  <Facebook size={20} />
                </div>
                <div className="social-icon">
                  <Instagram size={20} />
                </div>
                <div className="social-icon">
                  <Twitter size={20} />
                </div>
                <div className="social-icon">
                  <Linkedin size={20} />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3 className="section-title">Quick Links</h3>
              <ul className="link-list">
                <li className="link-item">
                  <a href="/about" className="link">About Us</a>
                </li>
                <li className="link-item">
                  <a href="/products" className="link">Our Products</a>
                </li>
                <li className="link-item">
                  <a href="/blog" className="link">Blog & News</a>
                </li>
                <li className="link-item">
                  <a href="/careers" className="link">Careers</a>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div className="footer-section">
              <h3 className="section-title">Our Products</h3>
              <ul className="link-list">
                <li className="link-item">
                  <a href="/soap" className="link">Natural Soap</a>
                </li>
                <li className="link-item">
                  <a href="/face-wash" className="link">Face Wash</a>
                </li>
                <li className="link-item">
                  <a href="/shampoo" className="link">Organic Shampoo</a>
                </li>
                <li className="link-item">
                  <a href="/body-lotion" className="link">Body Lotion</a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="footer-section">
              <h3 className="section-title">Contact Us</h3>
              <div className="contact-info">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <div>Email Us:</div>
                  <a href="mailto:contact@lovevedda.com" className="link">contact@lovevedda.com</a>
                </div>
              </div>
              <div className="contact-info">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <div>Call Us:</div>
                  <a href="tel:+441234567890" className="link">+44 (0) 123 456 7890</a>
                </div>
              </div>
              <div className="contact-info">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <div>Visit Us:</div>
                  <address>213 Lane, London, United Kingdom</address>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Love Vedda. All rights reserved.</p>
            <div className="bottom-links">
              <a href="/terms" className="bottom-link">Terms & Conditions</a>
              <a href="/privacy" className="bottom-link">Privacy Policy</a>
              <a href="/sitemap" className="bottom-link">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
