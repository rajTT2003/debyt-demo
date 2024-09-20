import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaInfoCircle, FaGift, FaChartLine } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import HomeLogo from '/images/Logo 4.png'; 
//import './Navbar.css'; // Ensure to include this if you have specific styles

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/about", title: "About Us", icon: <FaInfoCircle />, bgColor: 'bg-[#cfbe21]/80' },
    { path: "/features", title: "Features", icon: <FaGift />, bgColor: 'bg-green/80' },
    { path: "/contact", title: "Contact", icon: <FaChartLine />, bgColor: 'bg-blue/80' },
  ];

  return (
    <header className='fixed top-0 left-0 w-full z-50 '> {/* Background and shadow added */}
      <div className='flex justify-between items-center py-4 px-6'>
        {/* Logo */}
        <a href="/" className='flex items-center text-2xl'>
          <img src={HomeLogo} className='md:w-36 w-24' alt="Logo" />
        </a>
        {/* Menu Button */}
        <button onClick={handleMenuToggler} className='z-30'>
          {isMenuOpen ? 
            <div className='border-2 border-blue p-2 rounded-full flex justify-center items-center md:w-12 w-10 md:h-12 h-10'>
              <FaTimes className='w-8 h-8 text-blue transition-transform transform rotate-90' />
            </div> :
            <div className='border-2 border-blue bg-[#2B2A27] p-2 rounded-full flex justify-center items-center md:w-12 w-10 md:h-12 h-10'>
              <FaBars className='w-8 h-8 text-blue transition-transform transform rotate-0' />
            </div>
          }
        </button>
      </div>

      {/* Overlay Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-80 transition-opacity duration-500 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className='flex flex-col md:flex-row  justify-center items-center h-full p-4'>
          {/* Nav Items */}
          <div className='grid grid-cols-2 md:gap-16 gap-1 md:w-1/2 w-full'>
            {navItems.map(({ path, title, icon, bgColor }) => (     
              <Link
                key={path}
                to={path}
                className={`flex flex-col  ${bgColor} md:mb-4 mb-1 md:p-10 p-5 items-center text-2xl  rounded-lg shadow-md text-white transition-transform hover:scale-105`}
                onClick={() => setIsMenuOpen(false)}
              >
                {icon}
                <span className='text-sm font-semibold'>{title}</span>
              </Link>
              
            ))}
          </div>

          {/* Footer Details */}
          <div className='md:w-1/2 w-full text-center md:text-left mt-8 md:mt-0 md:px-20 px-2'>
            <h4 className='text-white text-2xl font-semibold md:mb-4 mb-0'>Debyt - Revolutionizing Money Transfers</h4>
            <p className='text-white text-sm mb-4'>
              Debyt is your go-to platform for fast, secure, and effortless money transfers. Join our community and make financial transactions easier.
            </p>
            <div className='flex justify-center md:justify-start space-x-6 mb-4'>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaLinkedinIn className="w-6 h-6" />
              </a>
            </div>
            <p className="text-xs text-center md:text-left text-white">
              © 2024 Debyt. All rights reserved. | <a href="#terms" className="underline">Terms of Service</a> | <a href="#privacy" className="underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
