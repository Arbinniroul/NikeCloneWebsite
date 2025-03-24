import React, { useEffect, useRef } from 'react';
import img1 from '../assets/nikec1.jpg';
import img2 from '../assets/nikec2.webp';
import img3 from '../assets/nikec3.jpeg';

import img5 from '../assets/nikec5.jpg';

const CarouselComponent = () => {
  const images = [img1, img2, img3, img5];
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeCarousel = async () => {
      const { Carousel } = await import('flowbite');
      
      if (carouselRef.current) {
        const carousel = new Carousel(carouselRef.current, {
          interval: 3000,
          defaultPosition: 0,
        });

        // Initialize controls
        carousel.init();

        // Cleanup on unmount
        return () => {
          carousel.destroy();
        };
      }
    };

    initializeCarousel();
  }, []);

  return (

  <div 
      id="image-carousel" 
      ref={carouselRef}
      className="relative w-full min-h-[85vh] md:h-96" 
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="relative h-full overflow-hidden rounded-lg">
        {/* Slides */}
        {images.map((image, index) => (
          <div
            key={index}
            className="hidden duration-700 ease-in-out "
            data-carousel-item
          >
            <img
              src={image}
              className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/50"
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>

  
  );
};

export default CarouselComponent;