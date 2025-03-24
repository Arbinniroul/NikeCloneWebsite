import React from 'react';
import { staticPhotos, URL, webPhotos } from '../constants';
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

  const photos=webPhotos && Array.isArray(webPhotos)?webPhotos : [];
  const webImg=photos.map((products) => products.imageUrl);
  
  return (
    <div>
      <Navbar />
      <CarouselComponent />
      <div className='ml-10' >
        <Scroller title="Find Your Max" photoSrc={imageUrls} info={heads} price={[]} turn='1'/>
      </div>
      <ImgContainer imgUrl={[webImg[0]]} id="0" />
      <Scroller
        title="Latest & Greatest"
        photoSrc={imageURLs}
        info={names}
        price={prices}
        description={descriptions }
        turn='2'  
      />
      <ImgContainer imgUrl={[webImg[1]]} id="1" />

       
    </div>
  );
};

export default Home;