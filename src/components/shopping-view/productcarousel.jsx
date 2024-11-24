import React, { useState, useEffect } from "react";
import "../css/product.css";

const Carousel = ({ featureImageList }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [featureImageList.length]);

  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + featureImageList.length) % featureImageList.length
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
  };

  return (
    <div className="carousel-container relative w-full h-[600px] overflow-hidden">
      {featureImageList && featureImageList.length > 0
        ? featureImageList.map((slide, index) => (
            <img
              src={slide.image}
              key={index}
              className={`carousel-slide ${
                index === currentSlide ? "active-slide" : "inactive-slide"
              } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
              alt={`Slide ${index + 1}`}
            />
          ))
        : null}
      <button
        onClick={handlePrev}
        className="carousel-button carousel-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="carousel-button carousel-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
