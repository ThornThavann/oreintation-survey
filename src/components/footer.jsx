'use client';
import { Mail, Phone, Facebook, Instagram, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-200 w-full">
      <div className="max-w-7xl mx-auto px-5 py-8 md:py-10">
        <div className="flex flex-col space-y-8 md:flex-row md:justify-between md:items-center md:space-y-0">

          {/* Contact Information - Left Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3 text-sm md:text-base">
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-0.5 text-blue-300" />
                <a
                  href="mailto:pse@gmail.com"
                  className="hover:text-blue-300 transition-colors duration-200 underline"
                >
                  pse@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-0.5 text-blue-300" />
                <div>
                  <p>096 40 78 543</p>
                  <p>096 40 78 543</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links - Right Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-blue-800 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 mr-2" />
                <span className="text-sm md:text-base">Facebook</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-blue-800 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 mr-2" />
                <span className="text-sm md:text-base">Instagram</span>
              </a>

              <a
                href="https://pse.ngo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-blue-800 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                aria-label="Website"
              >
                <Globe className="w-5 h-5 mr-2" />
                <span className="text-sm md:text-base">pse.ngo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-10 pt-6 border-t border-blue-800 text-center text-sm text-blue-300">
          <p>© {new Date().getFullYear()} PSE Organization.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
