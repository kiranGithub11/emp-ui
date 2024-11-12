import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      {/* Horizontal Menu for Desktop */}
      <div className="hidden md:flex justify-between items-center bg-blue-500 p-4 text-white">
        <div className="text-lg font-semibold">My App</div>
        <div className="flex space-x-8">
          <a
            href="#home"
            className="hover:text-blue-200 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-blue-200 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-blue-200 transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-blue-200 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="flex md:hidden justify-between items-center bg-blue-500 p-4 text-white">
        <div className="text-lg font-semibold">Logo Pvt Ltd</div>
        <button
          onClick={toggleMenu}
          className="relative w-8 h-8 flex flex-col justify-between items-center focus:outline-none z-20"
        >
          <span
            className={`block h-1 rounded-lg w-full bg-white transform transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-1 rounded-lg w-full bg-white transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-1 rounded-lg w-full bg-white transform transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Overlay Background */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300"
        ></div>
      )}

      {/* Slide-In Menu for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-600 text-white transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-20`}
      >
        <div className="flex flex-col space-y-4 p-6 pt-20">
          <a
            href="#home"
            onClick={handleMenuClick}
            className="hover:text-blue-300 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={handleMenuClick}
            className="hover:text-blue-300 transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            onClick={handleMenuClick}
            className="hover:text-blue-300 transition-colors"
          >
            Services
          </a>
          <a
            href="#contact"
            onClick={handleMenuClick}
            className="hover:text-blue-300 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
