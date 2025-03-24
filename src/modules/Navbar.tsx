import { Navlinks, NavLinks01 } from "../constants"
import logo from "../assets/favicon.ico";
import { Badge, Heart, Search } from "lucide-react";
interface NavItem{
label:string,
 href:string,
}
const Navbar = () => {
  return (
    <div className="flex w-full flex-col  h-32">
      <div className="flex w-full items-center justify-end px-12 bg-gray-100 h-12">

        <ul className="flex ">
          {
            NavLinks01.map((item:NavItem) => (
              <li key={item.label} className="border-l-2 px-3 text-sm font-semibold">

                <a href={item.href}>{item.label}</a>

              </li>
            ))
          }
        </ul>

      </div>
      <div className=" flex justify-between items-center h-20 px-14">
        <div>
          <img src={logo} alt="" className="h-10 w-20" />
        </div>

        <ul className=" flex ml-36 gap-8 max-lg:hidden text-xl font-semibold" >
          {
            Navlinks.map((item:NavItem) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))
          }
        </ul>
        <div className="flex   gap-5  items-center mr-5">
          <div className="flex  bg-gray-300  rounded-full mr-2">
            <div className="h-10 w-10 flex justify-center items-center  hover:bg-gray-400 rounded-full ">
              <Search />
            </div>
            <input type="text" className="border-none outline-none px-2 py-1 w-36" placeholder="Search" />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-500 cursor-pointer">
          <Heart size={30}  />
            
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <Badge size={30} />

            
          </div>
        </div>
      </div>


    </div>
  )
}

export default Navbar