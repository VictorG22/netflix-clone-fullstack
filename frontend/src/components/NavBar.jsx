import React, { useState } from "react";
import { navLinks } from "../constants";
import { HelpCircle, LogOut, Search, Settings } from "lucide-react";
import Logo from "../assets/logo.png";
import { Link } from "react-router";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";

const NavBar = () => {
  const { user, logout } = useAuthStore();
  const [showMenu, setShowMenu] = useState(false);

  const avatarUrl = user
    ? `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
        user.username
      )}`
    : "";

    const handleLogout = async () => {
      const {message} = await logout();
      toast.success(message)
      setShowMenu(false);
    }

  return (
    <nav
      className="bg-black text-gray-200 flex justify-between items-center
     p-4 h-20 text-sm md:text-[16px] font-medium text-nowrap"
    >
      <Link to={"/"}>
        <img
          src={Logo}
          alt="Logo"
          className="w-24 cursor-pointer transform transition duration-300 hover:-translate-y-1 hover:hover:brightness-125"
        />
      </Link>

      <ul className="hidden xl:flex space-x-6">
        {navLinks.map(({ label }) => (
          <li
            key={label}
            className="cursor-pointer transform hover:text-[#e50914] transition-all duration-300"
          >
            {label}
          </li>
        ))}
      </ul>

      <div className="flex items-center space-x-4 relative">
        <div className="relative hidden md:inline-flex">
          <input
            type="text"
            className="bg-[#333333] px-4 py-2 rounded-full"
            placeholder="Search..."
          />
          <Search className="absolute top-2 right-4 w-5 h-5" />
        </div>

        <Link to={user ? "ai-recommendations" : "signin"}>
        <button className="bg-[#e50914] px-5 py-2 text-white cursor-pointer rounded-4xl hover:scale-105 hover:bg-white hover:text-[#e50914] transition duration-300">
          Get AI Movie Picks
        </button>
        </Link>
        
        {!user ? (
          <Link to={"/signin"}>
            <button className="border border-[#333333] px-4 py-2 cursor-pointer">
              Sign In
            </button>
          </Link>
        ) : (
          <div className="text-white">
            <img
              src={avatarUrl}
              alt="user's profile pic"
              className="w-10 h-10 rounded-full border-2 border-[#e50914] cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />

            {showMenu && (
              <div className="absolute right-0 mt-2 w-64 bg-[#232323] bg-opacity-95 rounded-lg z-50 shadow-lg py-4 px-3 flex flex-col gap-2 border border-[#333333]">
                <div className="flex flex-col items-center mb-2">
                  <span className="text-white font-semibold text-base">{user.username}</span>
                  <span className="text-xs text-gray-400">{user.email}</span>
                </div>

                <button className="flex items-center px-4 py-3 rounded-lg text-white bg-[#181818] hover:bg-[#1d1c1c] gap-3 cursor-pointer">
                  <HelpCircle className="w-5 h-5"/>
                  Help Center
                </button>
                <button className="flex items-center px-4 py-3 rounded-lg text-white bg-[#181818] hover:bg-[#1d1c1c] gap-3 cursor-pointer">
                  <Settings className="w-5 h-5"/>
                  Settings
                </button>
                <button onClick={handleLogout} className="flex items-center px-4 py-3 rounded-lg text-white bg-[#181818] hover:bg-[#1d1c1c] gap-3 cursor-pointer">
                  <LogOut className="w-5 h-5"/>
                  Log out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
