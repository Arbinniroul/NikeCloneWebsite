

const Card2 = ({photoSrc,info,toTitleCase,description,price}) => {
  return (
    <div> 
        <div>
    <img
className="text-xl font-bold bg-black h-[450px] min-w-[500px]   object-cover"
src={photoSrc}
alt={info}

/>
<p className="  mt-10 text-2xl"  >{info}</p>
<p className="text-gray-500 mt-1 text-lg">{toTitleCase(description)} shoes</p>
<p className="font-semibold  mt-3 text-lg"><span>MRP price: $</span>{price}</p>
 </div>
</div>
  )
}

export default Card2