import React from 'react';
import { staticPhotos, URL } from '../constants';
import CarouselComponent from '../modules/Carousel';
import ImgContainer from '../modules/ImgContainer';
import Navbar from '../modules/Navbar';
import Scroller from '../modules/Scroller';


const Home: React.FC = () => {

  const products = URL && Array.isArray(URL) ? URL : [];
  const names = products.map((product) => product.name);
  const imageURLs = products.map((product) => product.imageURL);
  const prices = products.map((product) => product.price);
  const descriptions = products.map(
    (product) => `${product.brand} ${product.gender} ${product.category}`
  );


  const staticData = staticPhotos && Array.isArray(staticPhotos) ? staticPhotos : [];
  const heads = staticData.map((product) => product.head);
  const imageUrls = staticData.map((product) => product.imageUrl);

  return (
    <div>
      <Navbar />
      <CarouselComponent />
      <div className='ml-10' >
        <Scroller title="Find Your Max" photoSrc={imageUrls} info={heads} price={[]} turn='1'/>
      </div>
      <ImgContainer />
      <Scroller
        title="Latest & Greatest"
        photoSrc={imageURLs}
        info={names}
        price={prices}
        description={descriptions }
        turn='2'  
      />
       
    </div>
  );
};

export default Home;