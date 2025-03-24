

const Card1 = ({photoSrc,info,}) => {
  return (


 <div className="min-w-[400px] h-[550px] bg-white rounded-lg mb-32 font-sans  ">
      
          <div>
 <img
        className="text-xl  font-bold bg-black h-[490px]   object-cover"
        src={photoSrc}
        alt={info}
        
      />
      <p className="  mt-10 text-2xl"  >{info}</p>
         </div>
    </div>

   
  )
}

export default Card1