import { useState } from "react";
import { FaCode, FaTimes, FaBars, FaLinkedin } from "react-icons/fa"; // Added FaLinkedin
import { SiCodeforces, SiLeetcode } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'Work', href: '#work' },
    { title: 'Skills', href: '#skills' },
    { title: 'Contact', href: '#contact' },
  ];

  const profilesLinks = [
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vijay-kumar-profile/', // Update with your actual URL
      icon: <FaLinkedin size={30} />
    },
    {
      title: 'Leetcode',
      href: 'https://leetcode.com/VJYK',
      icon: <SiLeetcode size={30} />
    },
    {
      title: 'Codeforces',
      href: 'https://codeforces.com/profile/Vijay_Kumar',
      icon: <SiCodeforces size={30} />
    }
  ];

  return (
    // Fixed height (h-20), Background color added, z-index maintained
    <nav className="fixed w-full h-20 flex justify-between items-center px-6 bg-[#0a192f] text-gray-300 z-50 shadow-md">

      {/* Logo - Click to Scroll Top */}
      <a 
        href="#home"
        onClick={() => setIsOpen(false)}
        className="z-50 cursor-pointer hover:text-cyan-400 transition-colors duration-300"
      >
        <h1 className="text-3xl font-serif flex items-center gap-2">
          <FaCode /> Portfolio
        </h1>
      </a>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 text-xl font-serif">
        {navLinks.map((link) => (
          <li key={link.title} className="hover:text-cyan-400 font-medium cursor-pointer transition-colors">
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
        
        {/* Divider */}
        <div className="h-8 w-[1px] bg-gray-600 mx-2"></div>

        {/* Profile Icons */}
        <div className="flex gap-4">
          {profilesLinks.map((link) => (
            <a 
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 hover:text-cyan-400"
              title={link.title}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </ul>

      {/* Hamburger Icon */}
      <div 
        onClick={toggleMenu} 
        className="md:hidden z-50 cursor-pointer text-2xl hover:text-cyan-400"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu Overlay */}
      <ul 
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        {navLinks.map((link) => (
          <li key={link.title} className="py-6 text-4xl font-serif hover:text-cyan-400">
            <a href={link.href} onClick={toggleMenu}>{link.title}</a>
          </li>
        ))}

        {/* Mobile Profile Links */}
        <div className="flex gap-8 mt-10">
          {profilesLinks.map((link) => (
            <a 
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-cyan-400"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;