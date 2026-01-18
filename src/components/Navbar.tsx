import { useState } from "react";
import { FaCode, FaTimes, FaBars, FaLinkedin } from "react-icons/fa";
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
      href: 'https://www.linkedin.com/in/vijay-kumar-profile/', // REPLACE WITH YOUR REAL LINK
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
    <nav className="fixed w-full h-20 flex justify-between items-center px-6 bg-[#0a192f] text-gray-300 z-50 shadow-md">

      {/* Logo */}
      <a 
        href="#home"
        onClick={() => setIsOpen(false)}
        className="z-50 cursor-pointer hover:text-cyan-400 transition-colors duration-300"
      >
        <h1 className="text-2xl sm:text-3xl font-serif flex items-center gap-2">
          <FaCode /> Portfolio
        </h1>
      </a>
      
      {/* Desktop Menu (Hidden on Mobile) */}
      <ul className="hidden md:flex items-center gap-8 text-xl font-serif">
        {navLinks.map((link) => (
          <li key={link.title} className="hover:text-cyan-400 font-medium cursor-pointer transition-colors">
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
        
        <div className="h-8 w-1px bg-gray-600 mx-2"></div>

        <div className="flex gap-4">
          {profilesLinks.map((link) => (
            <a 
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 hover:text-cyan-400"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </ul>

      {/* Hamburger Icon (Visible on Mobile) */}
      <div 
        onClick={toggleMenu} 
        className="md:hidden z-50 cursor-pointer text-2xl hover:text-cyan-400"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed top-0 right-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40`}
      >
        <ul className="flex flex-col gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.title} className="text-3xl font-serif hover:text-cyan-400">
              <a href={link.href} onClick={toggleMenu}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Profile Links */}
        <div className="flex gap-8 mt-12">
          {profilesLinks.map((link) => (
            <a 
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-cyan-400"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;