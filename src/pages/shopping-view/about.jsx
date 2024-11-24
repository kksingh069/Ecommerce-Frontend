import React from "react";
import banner from "@/assets/main-image.png.webp";
import groupi from "@/assets/group-doodle.svg";
import Footer from "@/components/shopping-view/footer";

const About = () => {
  return (
    <div>
      <style>
        {`
        .about-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f9f9f9;
}

.about-container {
  display: flex;
 
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.about-content {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about-overline {
 font-size: 1.4rem;
    line-height: 2.2rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    font-weight: 400;
    color: #5b627d;
}

.about-title {
    font-size: calc(1.325rem + 0.9vw); /* Responsive font size */
    
    line-height: 1.2;
    color: #222;
}


.about-text p {
  font-size: 16px;
  line-height: 1.5;
  color: #666;
}

.about-btn {
     padding: 10px 20px;
    background-color: #5e5cfa;
  border: none;
  color: #fff;
  font-size: 16px;
  width:40%;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.about-btn:hover {
  background-color: #0056b3;
}

.about-image-container {
  flex: 1 1 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.image-wrapper {
  max-width: 100%;
}

/* Main Section Styles */
.communication-section {
  padding-bottom: 120px;
  background-color: #fff; /* Adjust background color if needed */
}

/* Container Styles */
.communication-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Row Styles */
.communication-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
}

/* Title and Text Section */
.communication-text {
  flex: 0 0 45%;
      padding: 26px 0px;
}

.communication-title {
         font-size: calc(1.925rem + 0.9vw);
    color: #333;
    line-height: normal;
}

.communication-description {
  flex: 0 0 50%;
  padding: 26px 0px;
}

.communication-paragraph {
     font-size: 16px;
    max-width: 600px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
    color: #555;
}

/* Spacer Styles */
.communication-spacer {
  height: 40px;
}

/* Divider Styles */
.communication-divider {
  height: 1px;
  background-color: #DDE1F0;
  margin: 40px 0;
}

/* Cards Section */
.communication-cards {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.communication-card {
  flex: 1;
  text-align: center;
      padding: 20px 8px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
   transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
}
.communication-card:hover {
    transform: scale(1.05);
    background-color: #f0f8ff; /* Light blue background on hover */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
.card-title {
 font-size: 30px;
    /* font-weight: 500; */
    color: #222;
    margin-bottom: 10px;
}

.card-paragraph {
  font-size: 16px;
  line-height: 1.6;
  color: #666;
}
.communication-section{
background-color: #f3f5fa;
}
@media (max-width: 768px) {
  .about-container {
    flex-direction: column;
    gap: 1.5rem;
    padding: 0 10px;
  }

  .about-content {
    flex: 1 1 100%;
    gap: 1rem;
  }

  .about-image-container {
    flex: 1 1 100%;
    display: flex;
    justify-content: center;
  }

  .about-title {
    font-size: 1.5rem;
  }

  .communication-row {
    flex-direction: column;
    align-items: center;
  }

  .communication-text {
    flex: 1 1 100%;
    text-align: center;
  }

  .communication-description {
    flex: 1 1 100%;
    padding-top: 1rem;
    text-align: center;
  }

  .communication-cards {
    flex-direction: column;
    gap: 20px;
  }

  .communication-card {
    width: 100%;
    text-align: center;
  }

  .communication-title {
    font-size: 2rem;
  }

  .communication-paragraph {
    font-size: 14px;
  }

  .card-title {
    font-size: 32px;
  }
}

/* For screen widths of 480px and below */
@media (max-width: 480px) {
  .about-title {
    font-size: 1.3rem;
  }

  .communication-title {
    font-size: 1.3rem;
  }

  .card-title {
    font-size: 20px;
  }

  .card-paragraph {
    font-size: 14px;
  }

  .about-btn {
    font-size: 14px;
    padding: 8px 16px;
    width: 60%;
  }

  .communication-text,
  .communication-description {
    padding: 15px 0;
  }

  .communication-paragraph {
    font-size: 14px;
    line-height: 1.5;
  }

  .communication-card {
    width: 100%;
    padding: 15px;
    text-align: center;
  }
    .communication-spacer {
    height: auto;
}
    .about-section {
   padding-top:0 !important;
}
}
        `}
      </style>
      <section
        className="about-section fluid-height"
        style={{ paddingTop: "80px" }}
      >
        <div className="about-container">
          <div className="about-content">
            <h1 className="about-overline">About Us</h1>
            <h2 className="about-title">
              Discover the power of nature with Love Veda – your trusted partner
              in holistic self-care.
            </h2>
            <div className="about-text">
              <p>
                At Love Veda, we are passionate about crafting premium soaps and
                shampoos inspired by the wisdom of Ayurveda. Our mission is to
                bring the purity of nature to your daily routine, promoting
                wellness and rejuvenation for your body and soul.
              </p>
              <p>
                Every product we create is a harmonious blend of traditional
                Ayurvedic recipes and modern innovations, ensuring effective and
                sustainable care. We believe self-care goes beyond beauty – it’s
                about nourishing your mind, body, and spirit with natural,
                toxin-free ingredients.
              </p>
            </div>
            <button type="button" className="about-btn">
              Explore Our Products
            </button>
          </div>

          <div className="about-image-container">
            <div
              className="image-wrapper"
              style={{ position: "relative", maxWidth: "500px" }}
            >
              <picture>
                <source
                  type="image/webp"
                  data-srcset="/wp-content/themes/vidyard-website/img/pages/company/about-us/main-image.png.webp"
                />
                <img src={banner} alt="" style={{ width: "100%" }} />
              </picture>
            </div>
          </div>
        </div>
      </section>
      <section
        id="communication"
        className="communication-section"
        style={{
          backgroundImage: `url(${groupi})`,
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          backgroundSize: "120px",
        }}
      >
        <div className="communication-container">
          <div className="communication-row">
            <div className="communication-text">
              <h3 className="communication-title">
                Crafted for your skin and hair, powered by nature
              </h3>
            </div>
            <div className="communication-description">
              <p className="communication-paragraph">
                At Love Veda, we believe in the power of nature to nurture your
                skin and hair. Our soaps and shampoos are made with the finest
                ingredients that are gentle yet effective, providing you with a
                luxurious and natural experience.
                <br />
                <br />
                We use carefully selected botanicals and essential oils,
                creating products that cleanse and nourish, leaving your skin
                and hair feeling soft, fresh, and rejuvenated.
                <br />
                <br />
                We’re committed to sustainability and ethical sourcing, ensuring
                that each product not only benefits you but also the planet.
                With Love Veda, indulge in the natural goodness for healthier
                skin and hair every day.
              </p>
            </div>
          </div>
          <div className="communication-spacer"></div>
          <div className="communication-divider"></div>
          <div className="communication-cards">
            <div className="communication-card">
              <h2 className="card-title">100% Natural Ingredients</h2>
              <p className="card-paragraph">
                We use only natural, plant-based ingredients in our soaps and
                shampoos to provide your skin and hair with the best care nature
                has to offer.
              </p>
            </div>
            <div className="communication-card">
              <h2 className="card-title">Eco-friendly Packaging</h2>
              <p className="card-paragraph">
                At Love Veda, we are committed to sustainability. Our products
                are packaged in eco-friendly, recyclable materials to reduce our
                environmental impact.
              </p>
            </div>
            <div className="communication-card">
              <h2 className="card-title">Cruelty-Free</h2>
              <p className="card-paragraph">
                We believe in beauty without cruelty. Our products are never
                tested on animals, ensuring that they are ethical and gentle on
                all living beings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default About;
