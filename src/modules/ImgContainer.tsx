import { Button } from "../components/ui/button";


interface ImgContainerProps {
  imgUrl?: string[];
  id: string;
}

const ImgContainer = ({ imgUrl = [], id }: ImgContainerProps) => {
  switch (id) {
    case "0":
      return (
        <div className="px-14">
          <div className="relative">
            <img src={imgUrl[0]} alt="dog" className='relative w-full h-auto object-cover' />
          <div className="absolute bottom-0 left-0 p-15">
            <div className="text-white flex flex-col gap-4">
             <p className="text-2xl -mb-5"> Nike Sabrina 2X TITAN</p>
             <h1 className="font-extrabold text-8xl tracking-tighter font-stretch-semi-condensed">MAKE SPACE</h1>
             <p className="text-xl">The greater shooters make spaces for their shot--and everyone else's </p>
             <Button className="bg-white text-black w-fit rounded-full px-6 py-6 text-[19px] border-none hover:bg-gray-200 mt-5" variant={"default"}>Shop</Button>
            </div>
          </div>
          </div>
        </div>
      );
    case "1":
      return (
        <div className='w-full h-fit px-14 mt-20'>
          <h1 className="mb-8 text-3xl">Don't Miss</h1>
          <img src={imgUrl[0]} alt="dog" className='w-full h-auto object-cover' />
        </div>
      );
    default:
      return null;
  }
};

export default ImgContainer;