import React, { memo } from 'react';
import { staticPhotos, staticShoes, URL, webPhotos,SportImages, MemberBenefits } from '../constants';
import CarouselComponent from '../modules/Carousel';
import ImgContainer from '../modules/ImgContainer';
import Navbar from '../modules/Navbar';
import Scroller from '../modules/Scroller';
import Template from '../modules/template';
import Footer from '../modules/Footer';


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
  
  const shoeIcons=staticShoes && Array.isArray(staticShoes)?staticShoes :[];
  const shoeIconsImgs=shoeIcons.map((products) => products.imageUrl);

  const Sports=SportImages && Array.isArray(SportImages)?SportImages :[];
  const sportImgs=Sports.map((products) => products.imageUrl);
  const btnValue=Sports.map((product) => product.buttonValue)

  const memberBenefits=MemberBenefits && Array.isArray(MemberBenefits)?MemberBenefits :[];
  const memberBenefitsImgs=memberBenefits.map((products) => products.imageUrl);
  const buttonValue=memberBenefits.map((product) => product.buttonValue);
  const descriptionVal=memberBenefits.map((product) => product.description);
  const heading=memberBenefits.map((product) => product.title);


  return (
    <div >
      <Navbar />
      <CarouselComponent />
<div className='px-16 pr-16'>
<Scroller title="Find Your Max" photoSrc={imageUrls} info={heads} price={[]} turn='1'/>
</div>
      

      <ImgContainer imgUrl={[webImg[0]]} id="0" />
      <Scroller
        title="The Latest & Greatest"
        photoSrc={imageURLs}
        info={names}
        price={prices}
        description={descriptions }
        turn='2'  
      />
      <ImgContainer imgUrl={[webImg[1]]} id="1" />
      <Template/>

        
        <div className='px-16 pr-16'>
        <Scroller photoSrc={shoeIconsImgs} title='Shop By Icons' info={[]} price={[]} turn='3' />
        <Scroller photoSrc={sportImgs} turn='4' title='Shop by Sport' btnValue={btnValue}/>

      


      <Scroller photoSrc={memberBenefitsImgs} turn='5' title='Member Benefits' btnValue={buttonValue} description={descriptionVal} info={heading}/>

      </div>
      <Footer/>
    </div>
  );
};

export default Home;