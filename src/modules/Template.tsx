import React from 'react'
import { Button } from '../components/ui/button'

const Template = () => {
  return (
    <div className='flex px-10 justify-center items-center h-[200px] mt-10 cursor-pointer mb-10'>
     <div className='flex flex-col gap-5  justify-center items-center'>
        <p className='font-bold tracking-wide text-center text-xl -mb-2'>Jordan Draft Jacket</p>
        <h1 className='font-extrabold text-6xl tracking-tighter '>FIRST PICKUP ENERGY</h1>
        <p className='text-xl -mt-3  mb-2'>The hooded zip-up at the top of the class</p>
        <Button className='bg-black text-white w-fit rounded-full px-6 py-6 text-[19px] border-none cursor-pointer hover:bg-gray-800 '>Shop</Button>
     </div>
    </div>
  )
}

export default Template