import React from 'react';
import Card1 from './MaxCard';
import Card2 from './LatestCard';

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
      

     
      
      {
        turn === '1'? (
       <Card1 photoSrc={photoSrc} info={info}/>
        ) : (
         <Card2 photoSrc={photoSrc} info={info} toTitleCase={toTitleCase} description={description} price={price}/>
        )
      }
   
    </div>
  );
};

export default MaxCard;