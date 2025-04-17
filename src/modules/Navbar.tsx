import { useState, useEffect } from "react";
import { Navlinks, NavLinks01 } from "../constants";
import logo from "../../public/nik.png";
import { Badge, Heart, Search, Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showLowerNav, setShowLowerNav] = useState(true);
  const [atTop, setAtTop] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      

      setAtTop(currentScrollY === 0);

      if (currentScrollY === 0) {

        setShowLowerNav(true);
      } else if (currentScrollY > lastScrollY) {

        setShowLowerNav(false);
      } else {

        setShowLowerNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="relative">

      {atTop && (
        <div className="fixed top-0 w-full z-50 bg-gray-100 h-12">
          <div className="flex items-center justify-end px-4 sm:px-12 h-full">
            <ul className="flex">
              {NavLinks01.map((item: NavItem) => (
                <li key={item.label} className="border-l-2 px-3 text-sm font-semibold">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}


      <div className={`fixed w-full z-40 transition-transform duration-300 ${
        atTop ? "top-12" : "top-0"
      } ${
        showLowerNav ? "translate-y-0" : "-translate-y-full"
      }`}>
        <div className="flex justify-between items-center h-20 px-4 sm:px-14 bg-white shadow-sm">

          <div className="p-2">
            <img src={logo} alt="Logo" className="h-10 w-20" />
          </div>


          <ul className="hidden md:flex ml-36 gap-8 text-xl font-semibold">
            {Navlinks.map((item: NavItem) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>


          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-200 cursor-pointer"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>


          <div className="hidden md:flex gap-3 items-center mr-5">
            <div className="flex bg-gray-300 rounded-full mr-2">
              <div className="h-10 w-10 flex justify-center items-center hover:bg-gray-400 rounded-full">
                <Search />
              </div>
              <input
                type="text"
                className="border-none outline-none px-2 py-1 w-36 bg-transparent"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <Heart size={30} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <Badge size={30} />
            </div>
          </div>
        </div>


        {isMobileMenuOpen && (
          <div className="md:hidden bg-white w-full shadow-lg">
            <ul className="flex flex-col items-center py-4">
              {Navlinks.map((item: NavItem) => (
                <li key={item.label} className="w-full text-center py-3 hover:bg-gray-100">
                  <a href={item.href} className="block text-lg font-semibold">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>


      <div className={`${atTop ? 'h-32' : 'h-20'}`} />
    </div>
  );
};

export default Navbar;