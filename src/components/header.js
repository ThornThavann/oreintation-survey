import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans">

      <nav className="bg-blue-900 text-white px-6 py-3">
        <div className="flex justify-between items-center">
          <img src="/pse-logo.png" alt="PSE Logo" className="h-10" />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl focus:outline-none"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:justify-between md:items-center gap-4 md:gap-10 mt-4 md:mt-0 text-sm`}
        >
          <a href="/about" className="hover:underline">អំពីយើង</a>

          {/* Dropdown */}
          <div className="group relative">
            <button className="hover:underline">សាលាជំនាញ</button>
            <div className="hidden group-hover:block absolute top-full left-0 mt-2 w-48 bg-white text-black shadow-lg rounded z-10">
              <a href="/salon" className="block px-5 py-2 hover:bg-gray-100">សាលា សាឡន</a>
              <a href="/business" className="block px-5 py-2 hover:bg-gray-100">សាលា ពណិជ្ជសាស្រ្ត</a>
              <a href="/mechanic" className="block px-5 py-2 hover:bg-gray-100">សាលា មេកានិក</a>
              <a href="/construction" className="block px-5 py-2 hover:bg-gray-100">សាលា សំណង់</a>
              <a href="/shortcourse" className="block px-5 py-2 hover:bg-gray-100">សាលា ជំនាញវគ្គខ្លី</a>
            </div>
          </div>

          <a
            href="/account"
            className=" text-white px- py-1 ​ ">
            ព៍ត៌មានបន្ថែម
          </a>
        </div>
      </nav>

   <div className="relative flex items-center p">
  <img
    src="/pse-campus.jpg"
    alt="PSE Campus"
    className="w-full h-[300px] md:h-[400px] object-cover"
  />
</div>


      <div className="bg-blue-900 text-white py-2 px-2 text-start text-sm">
        អំពីប៉េអេសអឺ 
      </div>
    </div>
  );
};

export default Header;
