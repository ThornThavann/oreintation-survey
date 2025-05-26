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
      <nav className="bg-white text-white px-4 sm:px-6 md:px-10 py-3 max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img
            src={Logo}
            alt="PSE Logo"
            className="h-20 sm:h-24 md:h-28 w-auto object-contain"
          />

          {/* Hamburger Menu for Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-blue-900 text-3xl focus:outline-none"
          >
            {menuOpen ? "✖" : "☰"}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12 items-center text-blue-900 text-xl font-semibold font-khmer">
            <a href="/" className="hover:underline">ទំព័រដើម</a>

            {/* Dropdown */}
            <div className="relative group">
              <button className="hover:underline">សាលាជំនាញ</button>
              <div className="hidden group-hover:block absolute top-full left-0 mt-3 w-72 bg-white text-black shadow-lg rounded z-10">
                <a href="/sob" className="block px-6 py-4 hover:bg-gray-100 text-blue-900 font-khmer text-lg">វិទ្យាស្ថាន​ ពណិជ្ជសាស្រ្ត</a>
                <a href="/business" className="block px-6 py-4 hover:bg-gray-100 text-blue-900 font-khmer text-lg">វិទ្យាស្ថាន សណ្ឋារកិច្ច</a>
                <a href="/mechanic" className="block px-6 py-4 hover:bg-gray-100 text-blue-900 font-khmer text-lg">វិទ្យាស្ថាន​ សំណង់</a>
                <a href="/construction" className="block px-6 py-4 hover:bg-gray-100 text-blue-900 font-khmer text-lg">វិទ្យាស្ថាន​ មេកានិក</a>
                <a href="/shortcourse" className="block px-6 py-4 hover:bg-gray-100 text-blue-900 font-khmer text-lg">វិទ្យាស្ថាន​ ភាពយន្ត</a>
              </div>
            </div>

            <a href="/short-trannig" className="hover:underline">ជំនាញវគ្គខ្លី</a>
            <a href="/foundation" className="hover:underline">ថ្នាក់ឆ្នាំសិក្សាមូលដ្ឋាន</a>
            <a href="/contact" className="text-orange-700 hover:underline">ព៍ត៌មានបន្ថែម</a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col md:hidden gap-4 mt-4 text-base text-blue-900 font-khmer`}
        >
          <a href="/">ទំព័រដើម</a>
          <a href="/sob">វិទ្យាស្ថាន​ ពណិជ្ជសាស្រ្ត</a>
          <a href="/business">វិទ្យាស្ថាន សណ្ឋារកិច្ច</a>
          <a href="/mechanic">វិទ្យាស្ថាន​ សំណង់</a>
          <a href="/construction">វិទ្យាស្ថាន​ មេកានិក</a>
          <a href="/shortcourse">វិទ្យាស្ថាន​ ភាពយន្ត</a>
          <a href="/short">ជំនាញវគ្គខ្លី</a>
          <a href="/foundation">ថ្នាក់ឆ្នាំសិក្សាមូលដ្ឋាន</a>
          <a href="/contact" className="text-orange-700">ព៍ត៌មានបន្ថែម</a>
        </div>
      </nav>

      {/* Banner with Text Overlay */}
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
