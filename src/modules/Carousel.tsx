import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";
import { PhotoSrc } from "../constants";
import { type CarouselApi } from "../components/ui/carousel";
import React, { useEffect, useState } from "react";

const CarouselComponent = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Update the current slide and total count when the carousel API is ready
  useEffect(() => {
    if (!api) {
      return;
    }

    // Set the total number of slides
    setCount(api.scrollSnapList().length);

    // Set the current slide index
    setCurrent(api.selectedScrollSnap() + 1);

    // Listen for slide changes
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className=" max-h-screen w-full bg-gray-50">
      <div className="max-w-full relative ">
        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            loop: true, // Enable infinite loop
            autoplay: true, // Enable auto-scroll
            delay: 3000, // Auto-scroll interval (3 seconds)
          }}
        >
          {/* Carousel Content */}
          <CarouselContent className="w-full">
            {PhotoSrc.map(({ image }) => (
              <CarouselItem key={image.toString()} className="relative">
                {/* Image */}
                <img
                  src={image}
                  alt="shoes"
                  className="w-full h-[500px] object-cover rounded-lg"
                />
                {/* Overlay for Buttons */}
                <div className="absolute top-7 inset-0 flex items-center justify-between px-6">

              
                  <CarouselPrevious className="z-10 bg-white/80 p-3 rounded-full shadow-md hover:bg-white transition-colors duration-200" />

                  <CarouselNext className="z-10 bg-white/80 p-3 rounded-full shadow-md hover:bg-white transition-colors duration-200" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Slide Counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {current} / {count}
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;