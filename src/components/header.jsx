import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../image/logo.png";
import School from "../image/school.jpeg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    setDropdownOpen(false);
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="font-sans">
      {/* Top Bar */}
      <div className="bg-blue-900 h-4 sm:h-5"></div>

      {/* Navbar */}
      <nav className="bg-white px-4 md:px-10 py-3 shadow-md relative z-50">
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
              menuOpen ? "flex" : "hidden"
            } flex-col md:flex md:flex-row absolute md:static top-full left-0 w-full bg-white md:w-auto md:bg-transparent z-50 px-4 md:px-0 gap-4 md:gap-10 py-4 md:py-0 text-blue-900 font-khmer text-lg font-semibold`}
          >
            <a
              href="/"
              className={`hover:underline w-full md:w-auto ${
                isActive("/") ? "text-orange-700" : ""
              }`}
            >
              ទំព័រដើម
            </a>

            {/* Dropdown */}
            <div className="relative w-full md:w-auto">
              <button
                className="hover:underline flex justify-between items-center w-full"
                onClick={toggleDropdown}
              >
                សាលាជំនាញ
                <span className={`ml-2 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>
              {dropdownOpen && (
                <div className="mt-2 bg-white border shadow-lg rounded w-full md:w-64 md:absolute left-0 z-50 text-base flex flex-col">
                  <a href="/business" className={`px-4 py-2 hover:bg-gray-100 ${isActive("/business") ? "text-orange-700 font-bold" : ""}`}>
                    វិទ្យាស្ថាន​ ពាណិជ្ជសាស្រ្ត
                  </a>
                  <a href="/soh" className={`px-4 py-2 hover:bg-gray-100 ${isActive("/soh") ? "text-orange-700 font-bold" : ""}`}>
                    វិទ្យាស្ថាន បដិសណ្ឋារកិច្ច
                  </a>
                  <a href="/mechanic" className={`px-4 py-2 hover:bg-gray-100 ${isActive("/mechanic") ? "text-orange-700 font-bold" : ""}`}>
                    វិទ្យាស្ថាន​ សំណង់
                  </a>
                  <a href="/construction" className={`px-4 py-2 hover:bg-gray-100 ${isActive("/construction") ? "text-orange-700 font-bold" : ""}`}>
                    វិទ្យាស្ថាន​ មេកានិក
                  </a>
                  <a href="/film" className={`px-4 py-2 hover:bg-gray-100 ${isActive("/film") ? "text-orange-700 font-bold" : ""}`}>
                    វិទ្យាស្ថាន​ ភាពយន្ត
                  </a>
                </div>
              )}
            </div>

            <a href="/short-trannig" className={`hover:underline w-full md:w-auto ${isActive("/short-trannig") ? "text-orange-700" : ""}`}>
              ជំនាញវគ្គខ្លី
            </a>
            <a href="/foundation" className={`hover:underline w-full md:w-auto ${isActive("/foundation") ? "text-orange-700" : ""}`}>
              ថ្នាក់ឆ្នាំសិក្សាមូលដ្ឋាន
            </a>
            <a href="/contact" className={`hover:underline w-full md:w-auto ${isActive("/contact") ? "text-orange-700" : ""}`}>
              ព៍ត៌មានបន្ថែម
            </a>
            <a href="/skillwithquestionandratings" className={`hover:underline w-full md:w-auto ${isActive("/skillwithquestionandratings") ? "text-orange-700" : ""}`}>
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
