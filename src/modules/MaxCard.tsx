import React from 'react';

interface MaxCardProps {
  photoSrc: string;
  info?: string;
  price?: number;
  description?: string; 
  turn?: string; 
}

const MaxCard: React.FC<MaxCardProps> = ({ photoSrc, info,price,description='',turn}) => {
  const toTitleCase = (str: string): string => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
  return (
    <div className="min-w-[400px] h-[550px] bg-white rounded-lg mb-32 font-sans ">
      

      <img
        className="text-xl font-bold bg-black h-[490px] w-full object-cover"
        src={photoSrc}
        alt={info}
      />
      <p className="  mt-10 text-2xl"  >{info}</p>
      {
        turn === '1'? (
         <div>

         </div>
        ) : (
          <div>
  <p className="text-gray-500 mt-1 text-lg">{toTitleCase(description)} shoes</p>
  <p className="font-semibold  mt-3 text-lg"><span>MRP price: $</span>{price}</p>
          </div>
        
        )
      }
   
    </div>
  );
};

export default MaxCard;