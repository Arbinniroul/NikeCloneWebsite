
import React from 'react';
import MaxCard from './MaxCard';

const Scroller = () => {
  return (
    <div className='mx-auto my-10 px-20 ml-15 mt-32'>

      <p className='text-3xl mb-6  tracking-tight'>Find Your Max</p>


      <div className='flex gap-6 overflow-x-auto scrollbar-hide'>
        <MaxCard />
        <MaxCard />
        <MaxCard />
        <MaxCard />
        <MaxCard />
        <MaxCard />
        <MaxCard />
    
      </div>
    </div>
  );
};

export default Scroller;

