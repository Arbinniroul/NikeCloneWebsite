import { Button } from "../components/ui/button"


const MemberBenefit= ({photoSrc,btnValue,description,info}) => {
  return (
 <div className="relative min-w-[450px] h-[550px] bg-white rounded-lg mb-10 font-sans cursor-pointer  ">
      <img
        className="relative text-xl  font-bold bg-black  w-full h-full  object-cover"
        src={photoSrc}
      />
      <div className="absolute bottom-0 left-0 p-16">
        <div className="flex flex-col gap-3 text-white">
      <p className="text-xl">{info}</p>
      <h1 className="text-2xl">{description}</h1>
        </div>
        <Button className="bg-white text-black rounded-full text-xl px-5 py-5 hover:bg-gray-300 cursor-pointer mt-3">{btnValue}</Button>



      </div>

    </div>
  )
}

export default MemberBenefit