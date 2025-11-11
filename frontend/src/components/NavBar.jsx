import React from "react";
import { navLinks } from "../constants";
import { Search } from "lucide-react";
import Logo from '../assets/logo.png'
import { Link } from "react-router";


const NavBar = () => {
  return (
    <nav className="bg-black text-gray-200 flex justify-between items-center
     p-4 h-20 text-sm md:text-[16px] font-medium text-nowrap">
      <Link to={"/"}>
        <img src={Logo} alt="Logo" className="w-24 cursor-pointer transform transition duration-300 hover:-translate-y-1 hover:hover:brightness-125"/>
      </Link>

      <ul  className="hidden xl:flex space-x-6">
        {navLinks.map(({ label }) => (
          <li key={label} className="cursor-pointer transform hover:text-[#e50914] transition-all duration-300">{label}</li>
        ))}
      </ul>

      <div className="flex items-center space-x-4 relative">
        <div className="relative hidden md:inline-flex">
          <input type="text" className="bg-[#333333] px-4 py-2 rounded-full" placeholder="Search..." />
          <Search className="absolute top-2 right-4 w-5 h-5"/>
        </div>
        <button className="bg-[#e50914] px-5 py-2 text-white cursor-pointer rounded-4xl hover:scale-105 hover:bg-white hover:text-[#e50914] transition duration-300">Get AI Movie Picks</button>
        <Link to={'/signin'}>
        <button className="border border-[#333333] px-4 py-2 cursor-pointer">Sign In</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
