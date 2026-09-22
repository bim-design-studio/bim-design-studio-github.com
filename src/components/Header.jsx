import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaList, FaCloudDownloadAlt, FaShoppingCart, FaBook } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref to track the menu container

  // 1. Handle Scroll Transparency
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Handle Clicking Outside to close the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If menu is open and the click is NOT on the menu or the toggle button
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 p-3 transition-all duration-300 ${isScrolled
        ? "bg-slate-300/80 backdrop-blur-md shadow-md"
        : "bg-slate-300"
        }`}
    >
      <div className="flex justify-between items-center px-4 md720:px-10 relative gap-4">
        {/* Logo */}
        <Link to="/">
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Logo"
              className="w-[50px] h-[50px] min-w-[50px] min-h-[50px] bg-slate-50 rounded-full"
            />
          </div>
        </Link>

        {/* This div wraps the toggle and the list so 'Click Outside' knows they are related */}
        <div className="flex items-center gap-2" ref={menuRef}>

          {/* Navigation Links */}
          <ul
            className={`
              /* Base Styles */
              flex items-center gap-2 transition-all duration-300 ease-in-out
              
              /* Mobile Dropdown Styles - Slides out from behind the header */
              absolute top-full left-0 w-full bg-slate-300 p-5 shadow-lg flex-col items-start origin-top z-[-1]
              
              /* Mobile Open/Close Animation States */
              ${isMenuOpen
                ? "opacity-100 translate-y-0 visible backdrop-blur-md"
                : "opacity-0 -translate-y-4 invisible pointer-events-none"
              }
              
              /* Desktop Overrides */
              md720:static md720:flex-row md720:p-0 md720:shadow-none md720:w-auto md720:bg-transparent md720:opacity-100 md720:translate-y-0 md720:visible md720:pointer-events-auto md720:z-auto
            `}
          >
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="w-full md720:w-auto">
              <li className="font-sans text-slate-700 hover:text-white hover:bg-[#ff7a7a] rounded-lg px-3 py-1 duration-300 hover:scale-105">
                Home
              </li>
            </Link>

            <div className="hidden md720:block h-4 w-[1px] bg-slate-400 self-center"></div>

            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="w-full md720:w-auto">
              <li className="font-sans text-slate-700 hover:text-white hover:bg-[#ff7a7a] rounded-lg px-3 py-1 duration-300 hover:scale-105">
                About
              </li>
            </Link>

            <div className="hidden md720:block h-4 w-[1px] bg-slate-400 self-center"></div>

            <Link to="/services" onClick={() => setIsMenuOpen(false)} className="w-full md720:w-auto">
              <li className="font-sans text-slate-700 hover:text-white hover:bg-[#ff7a7a] rounded-lg px-3 py-1 duration-300 hover:scale-105">
                Services
              </li>
            </Link>

            <div className="hidden md720:block h-4 w-[1px] bg-slate-400 self-center"></div>

            <Link to="/portfolio" onClick={() => setIsMenuOpen(false)} className="w-full md720:w-auto">
              <li className="font-sans text-slate-700 hover:text-white hover:bg-[#ff7a7a] rounded-lg px-3 py-1 duration-300 hover:scale-105">
                Portfolio
              </li>
            </Link>

            <div className="hidden md720:block h-4 w-[1px] bg-slate-400 self-center"></div>

            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="w-full md720:w-auto">
              <li className="font-sans text-slate-700 hover:text-white hover:bg-[#ff7a7a] rounded-lg px-3 py-1 duration-300 hover:scale-105">
                Contact
              </li>
            </Link>
          </ul>

          {/* Menu Toggle Button */}
          <FaList
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-500 text-xl self-center md720:hidden cursor-pointer hover:text-[#ff7a7a] duration-300 hover:scale-110"
          />

          {/* Vertical Divider */}
          <div className="bg-slate-400 w-0.5 h-7 mx-1 self-center"></div>

          {/* Utility Icons */}
          <div className="flex items-center gap-4">
            <Link
              to="/downloads"
              className="text-slate-500 text-lg hover:text-[#ff7a7a] duration-300 hover:scale-110"
            >
              <FaCloudDownloadAlt />
            </Link>
            <Link
              to="/marketplace"
              className="text-slate-500 text-lg hover:text-[#ff7a7a] duration-300 hover:scale-110"
            >
              <FaShoppingCart />
            </Link>
            <Link
              to="/blogs"
              className="text-slate-500 text-lg hover:text-[#ff7a7a] duration-300 hover:scale-110"
            >
              <FaBook />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}