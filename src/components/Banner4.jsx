import React from 'react';
import AppleStoreImg from '../../public/images/applestore.png'; // Replace with the actual path to your Apple store image
import GooglePlayImg from '../../public/images/playstore.png'; // Replace with the actual path to your Google Play store image
import { FaBolt, FaLock, FaMobileAlt, FaGlobe } from 'react-icons/fa';

import './Banner.css'; 

const Banner4 = () => {
  return (
    <div className="flex bg-gray-100 md:h-[100vh] h-auto md:justify-center justify-start items-center md:px-20 px-5 md:py-0 py-10">
      <div className="w-full md:h-[90vh] h-auto rounded-lg bg-white shadow-lg flex flex-col justify-center items-center p-10">
        {/* Heading Section */}
        <h2 className="text-5xl font-extrabold mb-6 text-center text-blue-600">
          Join Debyt Today
        </h2>
        <p className="text-lg mb-8 text-center text-gray-600 leading-relaxed max-w-2xl">
          Experience the future of money transfers. Download the Debyt app now and start sending money in seconds. Enjoy instant, secure, and reliable transfers at your fingertips.
        </p>

        {/* App Benefits Section */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mb-12">
          <div className="flex flex-col items-center">
          <FaBolt className="text-yellow-400 group-hover:scale-110 transition-transform duration-300 text-5xl md:text-6xl mb-4" />
            <h4 className="font-bold text-lg text-gray-800">Instant Transfers</h4>
            <p className="text-center text-gray-500 text-sm mt-2">
              Send money in seconds anywhere in the world, directly from your mobile.
            </p>
          </div>
          <div className="flex flex-col items-center">
          <FaLock className="text-green-600 group-hover:scale-110 transition-transform duration-300 text-5xl md:text-6xl mb-4" />
            <h4 className="font-bold text-lg text-gray-800">Secure Transactions</h4>
            <p className="text-center text-gray-500 text-sm mt-2">
              Bank-level encryption and robust security features keep your money safe.
            </p>
          </div>
          <div className="flex flex-col items-center">
          <FaMobileAlt className="text-blue-600 group-hover:scale-110 transition-transform duration-300 text-5xl md:text-6xl mb-4" />
            <h4 className="font-bold text-lg text-gray-800">User-Friendly</h4>
            <p className="text-center text-gray-500 text-sm mt-2">
              Easy-to-use mobile app designed to make money transfers quick and simple.
            </p>
          </div>
        </div>

        {/* Download Links */}
        <div className="flex space-x-8 mb-6">
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src={AppleStoreImg} alt="Download on the App Store" className="w-48 transition-transform hover:scale-105 duration-300" />
          </a>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <img src={GooglePlayImg} alt="Get it on Google Play" className="w-48 transition-transform hover:scale-105 duration-300" />
          </a>
        </div>

        {/* Call to Action */}
        <p className="text-sm text-center text-gray-400 italic">
          Available on the Apple App Store and Google Play. Start transferring today.
        </p>
      </div>
    </div>
  );
};

export default Banner4;
