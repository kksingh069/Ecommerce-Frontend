import React from "react";
import "../css/home-stat.css";
// import video from "@/assets/v-1"
import newpart from "@/assets/warranty.webp";
import soapone from "@/assets/soap-1.jpg";
import soaptwo from "@/assets/soap-2.jpg";
import soathree from "@/assets/soap-3.jpg";
import soapfour from "@/assets/soap-4.jpg";
import soapfive from "@/assets/soap-5.jpg";
// import vodo from "@/assets/v-1.MP4"
import promo from "@/assets/vedaa-home.png";

export default function App() {
  return (
    <div>
      <section className="feature-products">
        <div className="inside-part-feature"> 
        <h2 className="feature-title">About Love Vedaa</h2>
        <div className="feature-container">
          <div className="video-wrapper">
            <img src={promo} alt="Promo Image" className="hero-image" />
          </div>
          <div className="feature-text-wrapper">
            <h1 className="feature-heading">
              Pure, Natural, and Caring
              <br className="feature-hidden-on-lg" />
              The Love Vedaa Experience
            </h1>
            <p className="feature-description">
              At Love Vedaa, we believe that nature holds the secret to beauty
              and well-being. Our journey began with a simple idea: to bring
              back the goodness of nature into everyday care. Inspired by
              age-old traditions and modern needs, our range of soaps and
              shampoos is designed to nurture your skin and hair without
              compromising on quality or safety.
            </p>
            <p className="feature-description">
              Every product we create is made with thoughtfully sourced
              ingredients, free from harsh chemicals, parabens, and sulfates.
              From refreshing herbal scents to deeply moisturizing formulas,
              Love Vedaa promises a luxurious self-care experience while staying
              eco-conscious. Our commitment to sustainability ensures that we
              care for the planet as much as we care for you.
            </p>
            <p className="feature-description">
              Love Vedaa is more than a brand; it's a celebration of self-love,
              wellness, and harmony with nature. Whether you're looking for
              gentle cleansing, soothing hydration, or a touch of indulgence,
              our products are crafted to cater to all your needs.
            </p>
            <div className="button-group">
              <div className="button-container-1">
                <button className="primary-button" type="button">
                  Discover Our Products
                </button>
              </div>
              {/* <div className="button-container-2">
                <button className="secondary-button" type="button">
                  Learn About Our Values
                </button>
              </div> */}
            </div>
          </div>
        </div>
        </div>
      </section>

      <div className="feature-container-new">
        <img src={newpart} alt="" />
      </div>
      <div
       
      >
        <div
          className="outer-container"
          style={{
            background: "white",
            padding: "40px",
            margin: "25px 20px",
          
            
          }}
        >
          <h2
            className="gallery-heading"
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "30px",
              color: "#333",
              textAlign: "center",
              fontFamily: "inherit",
            }}
          >
            Our Luxury Soap Collection
          </h2>
          <div
            style={{
              display: "flex",
              gap: "20px", // Reduced from 30px
            }}
          >
            {}
            <div
              style={{
                flex: "0 1 70%",
                display: "flex",
                flexWrap: "wrap",
                gap: "20px", // Reduced from 30px
              }}
            >
              {/* First Row */}
              <div
                style={{
                  flex: "0 1 calc(50% - 10px)", // Adjusted for smaller gap
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "15px", // Slightly reduced
                  boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                  background: "#fff",
                  padding: "12px", // Reduced from 15px
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                }}
                className="image-container"
              >
                <img
                  src={soapone}
                  alt="Soap One"
                  style={{
                    width: "100%",
                    height: "200px", // Reduced from 250px
                    objectFit: "cover",
                    borderRadius: "12px",
                    transition: "transform 0.4s ease",
                  }}
                />
                <div className="overlay">
                  <h3>Luxury Soap Collection</h3>
                  <p>Natural Handmade Soap</p>
                </div>
              </div>

              <div
                style={{
                  flex: "0 1 calc(50% - 10px)",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "15px",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                  background: "#fff",
                  padding: "12px",
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                }}
                className="image-container"
              >
                <img
                  src={soaptwo}
                  alt="Soap Two"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    transition: "transform 0.4s ease",
                  }}
                />
                <div className="overlay">
                  <h3>Aromatic Essence</h3>
                  <p>Organic Bath Soap</p>
                </div>
              </div>

              {/* Second Row */}
              <div
                style={{
                  flex: "0 1 calc(50% - 10px)",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "15px",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                  background: "#fff",
                  padding: "12px",
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                }}
                className="image-container"
              >
                <img
                  src={soathree}
                  alt="Soap Three"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    transition: "transform 0.4s ease",
                  }}
                />
                <div className="overlay">
                  <h3>Pure Serenity</h3>
                  <p>Premium Bath Soap</p>
                </div>
              </div>

              <div
                style={{
                  flex: "0 1 calc(50% - 10px)",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "15px",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                  background: "#fff",
                  padding: "12px",
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                }}
                className="image-container"
              >
                <img
                  src={soapfive}
                  alt="Soap Four"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "12px",
                   
                  }}
                />
                <div className="overlay">
                  <h3>Natural Bliss</h3>
                  <p>Herbal Bath Soap</p>
                </div>
              </div>
            </div>

            {/* Right side - Fifth Image */}
            <div
              style={{
                flex: "0 1 25%",
                position: "relative",
                overflow: "hidden",
                borderRadius: "15px",
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                background: "#fff",
                padding: "12px",
                height: "fit-content",
                alignSelf: "center",
                
                cursor: "pointer",
              }}
              className="image-container"
            >
              <img
                src={soapfour}
                alt="Soap Five"
                style={{
                  width: "100%",
                  height: "420px", // Reduced from 530px
                  objectFit: "cover",
                  borderRadius: "12px",
                 
                }}
              />
              <div className="overlay">
                <h3>Royal Collection</h3>
                <p>Signature Bath Soap</p>
              </div>
            </div>

            <style>
              {`
            .outer-container {
              background: white;
                border-radius:8px;
            
            }

            .image-container:hover {
              
              box-shadow: 0 12px 24px rgba(0,0,0,0.15);
            }

            .image-container:hover img {
              transform: scale(1.05);
            }

            .overlay {
              position: absolute;
              bottom: 36px;  // Reduced from 30px
              left: 25px;
              right: 25px;
              border-radius:8px;
              background: rgba(255, 255, 255, 0.95);
              padding: 15px;  // Reduced from 20px
              border-radius: 8px;
             
              transform: translateY(20px);
              transition: all 0.4s ease;
              text-align: center;
            }

            .overlay h3 {
              margin: 0;
              margin-bottom: 6px;
              color: #333;
              font-size: 1.3rem;  // Reduced from 1.5rem
            }

            .overlay p {
              margin: 0;
              color: #666;
              font-size: 0.9rem;  // Reduced from 1rem
            }

            

            /* Media Queries */
            @media (max-width: 1200px) {
              .image-container img {
                height: 180px !important;
              }
              .image-container:last-child img {
                height: 380px !important;
              }
              .outer-container {
                padding: 30px;
              }
            }

            @media (max-width: 992px) {
              div[style*="display: flex"] {
                flex-direction: column;
              }
              div[style*="flex: 0 1 70%"] {
                flex: 1 1 100% !important;
              }
              div[style*="flex: 0 1 25%"] {
                flex: 1 1 100% !important;
              }
              .image-container:last-child img {
                height: 200px !important;
              }
              .outer-container {
                padding: 20px;
              }
            }

            @media (max-width: 768px) {
              div[style*="flex: 0 1 calc(50% - 10px)"] {
                flex: 1 1 100% !important;
              }
              .overlay {
                opacity: 1;
                transform: translateY(0);
              }
              .image-container img {
                height: 160px !important;
              }
            }

            @media (max-width: 480px) {
              .overlay h3 {
                font-size: 1.1rem;
              }
              .overlay p {
                font-size: 0.8rem;
              }
              .outer-container {
                padding: 15px;
                margin: 10px;
              }
            }
              .hero-image {
  
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: rotateHero 15s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.7, 0, 0.4 , 1);
  filter: brightness(1.05) contrast(1.1);
  
}
  .inside-part-feature{
  background:#fff;
  border-radius:8px;
  }
          `}
            </style>
          </div>
        </div>
      </div>
    </div>
  );
}
