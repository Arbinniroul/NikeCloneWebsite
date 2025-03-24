import React from 'react';
import Card1 from './MaxCard';
import Card2 from './LatestCard';
import IconCards from './IconCards';
import SportCard from './SportCard';
import MemberBenefit from './MemberBenefit';


interface MaxCardProps {
  photoSrc: string;
  info?: string;
  price?: number;
  description?: string; 
  turn?: string; 
  title?:string;
  btnValue?:string;

}

const MaxCard: React.FC<MaxCardProps> = ({ photoSrc, info, price, description = '', turn ,title,btnValue}) => {
  const toTitleCase = (str: string): string => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  switch (turn) {
    case "1":
      return <div><Card1 photoSrc={photoSrc} info={info} title={title} />;</div>
    case "2":
      return (
        <div>
 <Card2 title={title}
          photoSrc={photoSrc} 
          info={info} 
          toTitleCase={toTitleCase} 
          description={description} 
          price={price}
        />
        </div>
       
      );
      case "3":
        return <div><IconCards photoSrc={photoSrc}  /></div>;
      case "4":
        return <div><SportCard photoSrc={photoSrc} btnValue={btnValue}  /></div>;
        case "5":
          return <div><MemberBenefit photoSrc={photoSrc} btnValue={btnValue} description={description} info={info}  /></div>;
  
    default:
      return <div><IconCards photoSrc={photoSrc}  /></div>;; 
  }
};

export default MaxCard;