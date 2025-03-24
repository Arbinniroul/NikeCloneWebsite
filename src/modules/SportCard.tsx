

const SportCard = ({photoSrc,btnValue}) => {
  return (
    <div className="min-w-[600px] h-[350px] bg-white rounded-lg mb-32 font-sans "> 
  
  <img
        className="text-xl  font-bold bg-black h-[490px]   object-cover"
        src={photoSrc}
    
        
      />
    </div>
  )
}

export default SportCard