import { useState } from "react";
import Logo from "../image/logo.png";
import School from "../image/school.jpeg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="font-sans">
      {/* Top Bar */}
      <div className="bg-blue-900 h-4 sm:h-5"></div>

      {/* Navbar */}
      <nav className="bg-white px-4 md:px-10 py-3 shadow-md">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <img src={Logo} alt="Logo" className="h-12 sm:h-16 md:h-20 w-auto" />

          {/* Menu Toggle (Mobile) */}
          <button
            className="md:hidden text-3xl text-blue-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>

          {/* Nav Links */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } absolute md:static top-20 left-0 w-full md:w-auto bg-white md:flex flex-col md:flex-row items-start md:items-center z-50 px-4 md:px-0 gap-4 md:gap-10 py-4 md:py-0 text-blue-900 font-khmer text-lg font-semibold`}
          >
            <a href="/" className="hover:underline w-full md:w-auto">
              ទំព័រដើម
            </a>

            {/* Dropdown */}
            <div className="relative w-full md:w-auto">
              <button
                className="hover:underline flex justify-between md:items-center w-full md:w-auto"
                onClick={toggleDropdown}
              >
                សាលាជំនាញ
                <span className={`ml-2 ${dropdownOpen ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>
              {dropdownOpen && (
                <div className="mt-2 bg-white border shadow-lg rounded w-full md:w-64 absolute md:static z-50 text-base">
                  <a href="/business" className="block px-4 py-2 hover:bg-gray-100">វិទ្យាស្ថាន​ ពាណិជ្ជសាស្រ្ត</a>
                  <a href="/soh" className="block px-4 py-2 hover:bg-gray-100">វិទ្យាស្ថាន បដិសណ្ឋារកិច្ច</a>
                  <a href="/mechanic" className="block px-4 py-2 hover:bg-gray-100">វិទ្យាស្ថាន​ សំណង់</a>
                  <a href="/construction" className="block px-4 py-2 hover:bg-gray-100">វិទ្យាស្ថាន​ មេកានិក</a>
                  <a href="/film" className="block px-4 py-2 hover:bg-gray-100">វិទ្យាស្ថាន​ ភាពយន្ត</a>
                </div>
              )}
            </div>

            <a href="/short-trannig" className="hover:underline flex justify-between md:items-center w-full md:w-auto">
              ជំនាញវគ្គខ្លី
            </a>
            <a href="/foundation" className="hover:underline flex justify-between md:items-center w-full md:w-auto">
              ថ្នាក់ឆ្នាំសិក្សាមូលដ្ឋាន
            </a>
            <a href="/contact" className="text-orange-700 hover:underline w-full md:w-auto">
              ព៍ត៌មានបន្ថែម
            </a> <br />
            <a href="/skillwithquestionandratings" className="text-orange-700 hover:underline w-full md:w-auto">
              ស្តង់មតិ
            </a>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <div className="relative">
        <img
          src={School}
          alt="School"
          className="w-full h-[200px] sm:h-[300px] md:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-khmer font-bold text-center px-4">
            មជ្ឈមណ្ឌលបណ្ដុះបណ្ដាលវិជ្ជាជីវៈ PSE
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
