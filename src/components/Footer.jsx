import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue text-white py-8 px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Quick Links */}

        <ul className=' flex flex-wrap md:flex-col text-nowrap gap-4 md:justify-normal justify-center '>
          <li> <a href="/" className="hover:underline">Home</a></li>
          <li> <a href="#features" className="hover:underline">Features</a></li>
          <li> <a href="#how-it-works" className="hover:underline">How It Works</a></li>
          <li> <a href="#security" className="hover:underline">Security</a></li>
          <li> <a href="#contact" className="hover:underline">Contact Us</a></li>
          <li> <a href="#faq" className="hover:underline">FAQ</a></li>
          
        </ul>
        <div className="flex md:flex-col flex-row md:gap-0 gap-4 space-y-4 text-sm">
         
         
         
          
         
         
        </div>

        {/* About Debyt */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Debyt - Revolutionizing Money Transfers</h3>
          <p className="text-sm max-w-md">
            Debyt is your go-to platform for fast, secure, and effortless money transfers. Join our community and make financial transactions easier.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
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
      </div>

      {/* Legal Information */}
      <div className="text-xs text-center mt-8">
        © 2024 Debyt. All rights reserved. | <a href="#terms" className="underline">Terms of Service</a> | <a href="#privacy" className="underline">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
