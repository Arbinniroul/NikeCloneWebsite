import { useState } from "react";
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative flex w-full flex-col h-32">
      {/* Top Navigation */}
      <div className="relative flex w-full items-center justify-end px-4 sm:px-12 bg-gray-100 h-12">
        <ul className="flex">
          {NavLinks01.map((item: NavItem) => (
            <li key={item.label} className="border-l-2 px-3 text-sm font-semibold">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Navigation */}
      <div className="flex justify-between items-center h-20 px-4 sm:px-14 bg-white">
        {/* Logo */}
        <div className="bg-white p-2 rounded-lg">
          <img src={logo} alt="Logo" className="h-10 w-20" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex ml-36 gap-8 text-xl font-semibold">
          {Navlinks.map((item: NavItem) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-gray-200 cursor-pointer"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Icons (Search, Heart, Badge) */}
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white w-full absolute top-32 left-0 shadow-lg z-50">
          <ul className="flex flex-col items-center py-4">
            {Navlinks.map((item: NavItem) => (
              <li key={item.label} className="w-full text-center py-3 hover:bg-gray-100">
                <a href={item.href} className="block text-lg font-semibold">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center p-4 border-t">
            <div className="flex bg-gray-300 rounded-full mb-4 w-full max-w-xs">
              <div className="h-10 w-10 flex justify-center items-center hover:bg-gray-400 rounded-full">
                <Search />
              </div>
              <input
                type="text"
                className="border-none outline-none px-2 py-1 flex-grow bg-transparent"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                <Heart size={30} />
              </div>
              <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                <Badge size={30} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;