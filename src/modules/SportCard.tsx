import { Button } from "../components/ui/button"


const SportCard = ({photoSrc,btnValue}) => {
  return (
    <div className="relative min-w-[500px] h-[350px] bg-white rounded-lg mb-32 font-sans cursor-pointer"> 
  
  <img
        className=" relative text-xl  font-bold bg-black h-full w-full  object-cover"
        src={photoSrc}
    
        
      />
 <div className="absolute bottom-0 left-0 p-16">
<Button className="bg-white text-black rounded-full text-xl px-5 py-5 hover:bg-gray-300 cursor-pointer">{btnValue}</Button>
 </div>
    </div>
  )
}

export default SportCard