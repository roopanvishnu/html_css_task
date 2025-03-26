import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      imageUrl: 'https://images.pexels.com/photos/35600/road-sun-rays-path.jpg?cs=srgb&dl=pexels-pixabay-35600.jpg&fm=jpg',
      caption: 'First slide'
    },
    {
      id: 2,
      imageUrl: 'https://images.pexels.com/photos/35600/road-sun-rays-path.jpg?cs=srgb&dl=pexels-pixabay-35600.jpg&fm=jpg',
      caption: 'Second slide'
    },
    {
      id: 3,
      imageUrl: 'https://images.pexels.com/photos/35600/road-sun-rays-path.jpg?cs=srgb&dl=pexels-pixabay-35600.jpg&fm=jpg',
      caption: 'Third slide'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Featured Images</h2>
        
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === currentSlide ? 'active' : ''}
                aria-current={index === currentSlide ? 'true' : 'false'}
                aria-label={`Slide ${index + 1}`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
          
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div 
                key={slide.id}
                className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
              >
                <img 
                  src={slide.imageUrl} 
                  className="d-block w-100" 
                  alt={slide.caption} 
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{slide.caption}</h5>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className="carousel-control-prev" 
            type="button" 
            data-bs-target="#carouselExampleIndicators" 
            data-bs-slide="prev"
            onClick={prevSlide}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          
          <button 
            className="carousel-control-next" 
            type="button" 
            data-bs-target="#carouselExampleIndicators" 
            data-bs-slide="next"
            onClick={nextSlide}
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;