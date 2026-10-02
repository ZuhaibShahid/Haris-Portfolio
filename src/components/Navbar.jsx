import { useEffect, useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { navLinks } from "../constants/data";
import { motion } from "framer-motion";

const NavItems = () => {
  return (
    <>
      <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
        {navLinks.map(({ id, href, name }) => (
          <motion.li
            key={id}
            className="font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <motion.a
              href={href}
              className="text-lg md:text-base text-white"
              whileHover={{ color: "#ff9720" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {name}
            </motion.a>
          </motion.li>
        ))}
      </ul>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      //Close mobile menu on scroll.
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isOpen
            ? "bg-[#1a191e] border-b-2 border-[#ff9720] border-opacity-100 shadow-md"
            : "bg-transparent border-b-2 border-[#ff9720] border-opacity-0"
        }`}
      >
        <div className="mx-auto px-6 sm:px-8 md:px-10">
          <div className="flex justify-between items-center py-5">
            <a href="#home" className="flex items-center">
              <img
                src="logo.svg"
                alt="Haris Naveed"
                className="w-12 h-12 hover:scale-105 transition-transform"
              />
            </a>

            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#ff9720] focus:outline-none sm:hidden flex"
              aria-label="Open Menu"
            >
              {isOpen ? (
                <FaTimes color="white" size={25} />
              ) : (
                <FaAlignRight color="white" size={25} />
              )}
            </button>

            <nav className="sm:flex hidden">
              <NavItems />
            </nav>
          </div>
        </div>

        <div
          className={`absolute left-0 right-0 bg-[#1a191e] transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <nav className="p-5">
            <NavItems />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
