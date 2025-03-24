import React from 'react';
import MaxCard from './MaxCard';

interface ScrollerProps {
  photoSrc?: string[];
  info?: string[];
  price?: number[];
}

const Scroller: React.FC<ScrollerProps> = ({ photoSrc = [], info = [], price = [] }) => {
  return (
    <div className="mx-auto my-10 mt-32 ml-14 ">
      <p className="text-3xl mb-6 tracking-tight">Find Your Max</p>
      <div className="flex gap-6 overflow-x-auto">
        {photoSrc.map((src, index) => (
          <MaxCard
            key={index}
            photoSrc={src}
            info={info[index]}
            price={price[index]} // Pass the price to MaxCard
          />
        ))}
      </div>
    </div>
  );
};

export default Scroller;