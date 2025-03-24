

const IconCards = ({photoSrc}) => {
  return (
<div className="min-w-[450px] h-[550px] bg-white rounded-lg mb-10 font-sans cursor-pointer "> 
<img
        className="text-xl  font-bold bg-black h-[490px]   object-cover"
        src={photoSrc}

        
      />
    </div>
  )
}

export default IconCards