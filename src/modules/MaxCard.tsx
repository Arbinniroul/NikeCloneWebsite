

const Card1 = ({photoSrc,info}) => {
  return (
    <div>
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