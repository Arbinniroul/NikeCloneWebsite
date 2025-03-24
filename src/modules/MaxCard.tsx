import React from 'react';

interface MaxCardProps {
  photoSrc: string;
  info: string;
  price: number;
}

const MaxCard: React.FC<MaxCardProps> = ({ photoSrc, info,price }) => {
  return (
    <div className="min-w-[400px] h-[550px] bg-white rounded-lg mb-32 font-sans ">
      

      <img
        className="text-xl font-bold bg-black h-[490px] w-full object-cover"
        src={photoSrc}
        alt={info}
      />
      <p className="font-semibold  mt-10 text-xl ">{info}</p>
      <p className="text-gray-500 mt-1 text-lg">{info}</p>
      <p className="font-semibold  mt-3 text-lg"><span>MRP price: $</span>{price}</p>
    </div>
  );
};

export default MaxCard;