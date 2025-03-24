import React from 'react';
import MaxCard from './MaxCard';

interface ScrollerProps {
  photoSrc?: string[];
  info?: string[];
  price?: number[];
  title: string;
  description?: string[];
  turn?:string;
}

const Scroller: React.FC<ScrollerProps> = ({
  photoSrc = [],
  info = [],
  price = [],
  title,
  description = [],
   turn
}) => {

  const itemCount = Math.min(photoSrc.length, info.length);

  return (
    <div className="mx-auto my-10 mt-32 ml-14">
      <p className="text-3xl mb-6 tracking-tight">{title}</p>
      <div className="flex gap-6 overflow-x-auto">
        {photoSrc.slice(0, itemCount).map((src, index) => (
          <MaxCard
            key={index} 
            photoSrc={src}
            info={info[index]}
            price={price[index]}
            description={description[index]}
            turn={turn}  
          />
        ))}
      </div>
    </div>
  );
};

export default Scroller;