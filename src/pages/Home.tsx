import React from 'react';
import { URL } from '../constants';
import CarouselComponent from '../modules/Carousel';
import ImgContainer from '../modules/ImgContainer';
import Navbar from '../modules/Navbar';
import Scroller from '../modules/Scroller';



const Home: React.FC = () => {
  const names: string[] = [];
  const imageURLs: string[] = [];
  const price: number[]=[]

  if (URL && Array.isArray(URL)) {
    URL.forEach((product) => {
      names.push(product.name);
      imageURLs.push(product.imageURL);
      price.push(product.price);
    });
  }

  return (
    <div>
      <Navbar />
      <CarouselComponent />
      <div className="px-20">

<Scroller/>
      </div>
      <ImgContainer />
     

      <Scroller photoSrc={imageURLs} info={names} price={price}/>


      
    </div>
  );
};

export default Home;