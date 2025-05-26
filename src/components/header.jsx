import { useState } from "react";
import Logo from "../image/logo.png";
import School from "../image/school.jpeg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="font-sans">
      {/* Top Blue Bar */}
      <div className="bg-blue-900 py-4"></div>

      {/* Navbar */}
      <nav className="bg-white text-white px-4 sm:px-6 md:px-10 py-3 max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img
            src={Logo}
            alt="PSE Logo"
            className="h-20 sm:h-24 md:h-28 w-auto object-contain"
          />

          {/* Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-blue-900 text-3xl focus:outline-none"
          >
            {menuOpen ? "✖" : "☰"}
          </button>

          {/* Menu Items */}
          <div
            className={`md:flex items-center gap-12 text-blue-900 text-xl font-semibold font-khmer ${
              menuOpen ? "block mt-4" : "hidden md:flex"
            }`}
          >
            <a href="/" className="hover:underline block">
              ទំព័រដើម
            </a>

            {/* Dropdown Menu (click only) */}
            <div className="relative">
              <button
                className="hover:underline flex items-center gap-2 w-full text-left"
                onClick={toggleDropdown}
              >
                សាលាជំនាញ
                <span
                  className={`transform transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded z-10 text-base text-blue-900 font-khmer border">
                  <a
                    href="/business"
                    className="block px-6 py-3 hover:bg-gray-100"
                  >
                    វិទ្យាស្ថាន​ ពណិជ្ជសាស្រ្ត
                  </a>
                  <a href="/soh" className="block px-6 py-3 hover:bg-gray-100">
                    វិទ្យាស្ថាន បដិសណ្ឋារកិច្ច
                  </a>
                  <a
                    href="/mechanic"
                    className="block px-6 py-3 hover:bg-gray-100"
                  >
                    វិទ្យាស្ថាន​ សំណង់
                  </a>
                  <a
                    href="/construction"
                    className="block px-6 py-3 hover:bg-gray-100"
                  >
                    វិទ្យាស្ថាន​ មេកានិក
                  </a>
                  <a href="/film" className="block px-6 py-3 hover:bg-gray-100">
                    វិទ្យាស្ថាន​ ភាពយន្ត
                  </a>
                </div>
              )}
            </div>

            <a href="/short-trannig" className="hover:underline block">
              ជំនាញវគ្គខ្លី
            </a>
            <a href="/foundation" className="hover:underline block">
              ថ្នាក់ឆ្នាំសិក្សាមូលដ្ឋាន
            </a>
            <a
              href="/contact"
              className="text-orange-700 hover:underline block"
            >
              ព៍ត៌មានបន្ថែម
            </a>
            <a
              href="/skillwithquestionandratings"
              className="text-orange-700 hover:underline block"
            >
              ស្តង់មតិ
            </a>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <div className="relative w-full">
        <img
          src={School}
          alt="PSE Campus"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold font-khmer text-center px-4">
            មជ្ឈមណ្ឌលបណ្ដុះបណ្ដាលវិជ្ជាជីវៈ PSE
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
