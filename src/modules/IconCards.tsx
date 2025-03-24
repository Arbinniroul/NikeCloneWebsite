

const IconCards = ({photoSrc}) => {
  return (
<div className="min-w-[450px] h-[400px] bg-white rounded-lg mb-32  font-sans cursor-pointer  "> 
<img
        className="text-xl  font-bold bg-black  w-full   object-cover "
        src={photoSrc}
        
      />
    </div>
  )
}

export default IconCards