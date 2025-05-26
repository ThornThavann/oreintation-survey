import { useState } from "react";
import Logo from "../image/logo.png";
import School from "../image/school.jpeg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans">
      {/* Top Blue Bar */}
      <div className="bg-blue-900 py-4"></div>

      {/* Navbar */}
      <nav className="text-white px-4 sm:px-6 md:px-10 py-3 max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          <img src={Logo} alt="PSE Logo" className="h-10" />

          {/* Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-blue-900 text-2xl focus:outline-none"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Menu Links */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:justify-between md:items-center gap-4 md:gap-10 mt-4 md:mt-0 text-sm`}
        >
          <a href="/about" className="hover:underline text-blue-900 font-semibold font-khmer">
            ទំព័រដើម
          </a>

          {/* Dropdown */}
          <div className="group relative">
            <button className="hover:underline text-blue-900 font-semibold font-khmer">សាលាជំនាញ</button>
            <div className="hidden group-hover:block absolute top-full left-0 mt-2 w-48 bg-white text-black shadow-lg rounded z-10">
              <a
                href="/salon"
                className="block px-5 py-2 hover:bg-gray-100 text-blue-900 font-semibold font-khmer"
              >
                សាលា សាឡន
              </a>
              <a
                href="/business"
                className="block px-5 py-2 hover:bg-gray-100 text-blue-900 font-semibold font-khmer"
              >
                សាលា ពណិជ្ជសាស្រ្ត
              </a>
              <a
                href="/mechanic"
                className="block px-5 py-2 hover:bg-gray-100 text-blue-900 font-semibold font-khmer"
              >
                សាលា មេកានិក
              </a>
              <a
                href="/construction"
                className="block px-5 py-2 hover:bg-gray-100 text-blue-900 font-semibold font-khmer"
              >
                សាលា សំណង់
              </a>
              <a
                href="/shortcourse"
                className="block px-5 py-2 hover:bg-gray-100 text-blue-900 font-semibold font-khmer"
              >
                សាលា ជំនាញវគ្គខ្លី
              </a>
            </div>
          </div>

          <a href="/account" className= "text-orange-700 font-semibold font-khmer py-1">
            ព៍ត៌មានបន្ថែម
          </a>
        </div>
      </nav>

      {/* Banner Image */}
      <div className="relative flex items-center">
        <img
          src={School}
          alt="PSE Campus"
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
      </div>


      {/* <div className="bg-blue-900 text-white py-2 px-2 text-start text-sm">
        អំពីប៉េអេសអឺ
      </div> */}
    </div>
  );
};

export default Header;
