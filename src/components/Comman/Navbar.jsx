import React, { useState, useEffect } from "react";
import { ShoppingBag, User, Heart, X } from "lucide-react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/Img/Group53.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem("username"));

  useEffect(() => {
    const handleStorageChange = () => {
      setUsername(localStorage.getItem("username"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
  };

  return (
    <>
      <div class="bg-[#f5f5f5]">
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />

        <div
          className={`fixed top-0 left-0 h-full w-72 sm:w-80 bg-white z-50 p-6 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-8">
            <span className="font-black text-xl tracking-widest italic">
              CORE
            </span>
            <X
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>

          <div className="flex flex-col gap-6 uppercase font-bold tracking-wider text-sm">
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/Products" onClick={() => setOpen(false)}>
              Collections
            </Link>
            <Link to="/Products" onClick={() => setOpen(false)}>
              New
            </Link>
            <Link to="/Contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Link to="/About" onClick={() => setOpen(false)}>
              About
            </Link>
          </div>
        </div>

        <nav className="max-w-7xl mx-auto ">
          <div className="mx-auto px-4 py-3 sm:py-4 flex items-center justify-between relative">
            <div className="flex items-center gap-4 sm:gap-8">
              <button
                onClick={() => setOpen(true)}
                className="flex md:hidden flex-col gap-1.5"
              >
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-4 h-0.5 bg-black"></span>
                <span className="w-2 h-0.5 bg-black"></span>
              </button>

              <div className="hidden md:flex items-center gap-4 text-xs font-extrabold uppercase tracking-wide">
                <Link to="/" className="hover:text-gray-600">
                  HOME
                </Link>
                <Link to="/Products" className="hover:text-gray-600">
                  COLLECTIONS
                </Link>
                <Link to="/Products" className="hover:text-gray-600">
                  NEW
                </Link>
                <Link to="/Contact" className="hover:text-gray-600">
                  CONTACT
                </Link>
                <Link to="/About" className="hover:text-gray-600">
                  ABOUT
                </Link>
              </div>
            </div>

            <Link className="absolute left-1/2 -translate-x-1/2">
              <img
                src={logoImg}
                alt="Logo"
                className="w-9 sm:w-12 md:w-14 object-contain"
              />
            </Link>

            <div className="flex items-center gap-2 sm:gap-4">
              <button className="hidden md:flex p-4 bg-black rounded-full">
                <Heart size={20} className="text-white" />
              </button>

              <Link
                to="/cart"
                className="flex items-center bg-black rounded-full p-[3px] sm:pl-6 transition-all"
              >
                <span className="hidden sm:block text-[16px] font-bold text-white tracking-wide mr-4">
                  Cart
                </span>

                <div className="relative w-11 h-11 bg-white rounded-full flex items-center justify-center border-[0.5px] border-black">
                  <ShoppingBag
                    size={20}
                    strokeWidth={2.5}
                    className="text-black"
                  />

                  <span className="absolute top-[7px] right-[7px] w-2.5 h-2.5 bg-red-500 rounded-full border-1 border-white"></span>
                </div>
              </Link>
              {username ? (
                <div className="hidden lg:flex items-center gap-2 bg-black rounded-full px-4 py-2">
                  <User size={20} className="text-white" />
                  <span className="text-white text-sm">{username}</span>
                  <button
                    onClick={handleLogout}
                    className="text-xs bg-red-600 px-2 py-1 rounded text-white"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="p-4 bg-black rounded-full flex items-center justify-center hover:scale-105 transition"
                >
                  <User size={20} className="text-white" />
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
