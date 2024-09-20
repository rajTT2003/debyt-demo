import React from 'react';
import { FaBolt, FaLock, FaMobileAlt, FaGlobe } from 'react-icons/fa';
import Card from '/images/CARD.png';
import './Banner.css'; 

const Banner3 = () => {
  return (
    <div className="background2 h-full flex flex-col justify-between">
      {/* Top Section */}
      <div className="md:flex block md:mt-0 mt-20 w-full md:pt-32 pt-10">
        {/* Left Side with Card Image */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <img src={Card} alt="Card" className="w-full max-w-lg transition-transform hover:scale-105 duration-300" />
        </div>

        {/* Right Side with Text Content */}
        <div className="flex flex-col justify-center items-center md:items-end md:w-1/2 w-full p-8 md:pl-16">
          <h2 className="md:text-5xl text-4xl font-extrabold mb-6 text-center md:text-right text-black leading-tight">
            Debyt Features
          </h2>
          <p className="md:text-2xl text-lg mb-4 text-center md:text-right text-gray-700 leading-relaxed">
            Experience lightning-fast money transfers with complete security. Our platform is designed for ease of use on any device, offering you the flexibility to send money anywhere, anytime.
          </p>
          <p className="md:text-xl text-lg italic text-center md:text-right text-gray-500">
            No hidden fees, transparent processes, and a global reach make Debyt your best choice for financial transactions.
          </p>
        </div>
      </div>

      {/* Features Section with Descriptions */}
      <div className="md:flex grid grid-cols-2 gap-6 justify-around items-center md:py-12 py-6">
        <div className="flex flex-col items-center group">
          <FaBolt className="text-yellow-400 group-hover:scale-110 transition-transform duration-300 text-5xl md:text-6xl mb-4" />
          <p className="font-semibold md:text-lg text-md text-center text-gray-800 group-hover:text-yellow-400">
            Instant Transfers
          </p>
          <p className="text-gray-500 text-sm text-center">
            Send money in seconds across the globe with no delay.
          </p>
        </div>
        <div className="flex flex-col items-center group">
          <FaLock className="text-green-600 group-hover:scale-110 transition-transform duration-300 text-5xl md:text-6xl mb-4" />
          <p className="font-semibold md:text-lg text-md text-center text-gray-800 group-hover:text-green-600">
            Secure Transactions
          </p>
          <p className="text-gray-500 text-sm text-center">
            Bank-level encryption ensures your money is safe.
          </p>
        </div>
        <div className="flex flex-col items-center group">
          <FaMobileAlt className="text-blue-600 group-hover:scale-110 transition-transform duration-300 text-5xl md:text-6xl mb-4" />
          <p className="font-semibold md:text-lg text-md text-center text-gray-800 group-hover:text-blue-600">
            User Friendly
          </p>
          <p className="text-gray-500 text-sm text-center">
            Manage your money effortlessly on any device.
          </p>
        </div>
        <div className="flex flex-col items-center group">
          <FaGlobe className="text-pink-400 group-hover:scale-110 transition-transform duration-300 text-5xl md:text-6xl mb-4" />
          <p className="font-semibold md:text-lg text-md text-center text-gray-800 group-hover:text-pink-400">
            Global Reach
          </p>
          <p className="text-gray-500 text-sm text-center">
            Transact with anyone, anywhere, in multiple currencies.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-12">
        <h3 className="text-center text-3xl font-bold text-blue-600 mb-8">What Our Customers Say</h3>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 px-4">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <p className="text-lg italic text-gray-700 mb-4">
              "Debyt has completely transformed how I send money to my family abroad. The transfers are instant, and I don’t have to worry about hidden fees!"
            </p>
            <h4 className="text-gray-900 font-semibold">— Amanda K.</h4>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <p className="text-lg italic text-gray-700 mb-4">
              "I love how secure and fast the platform is. I can send funds from my phone anytime, and the mobile app is super user-friendly."
            </p>
            <h4 className="text-gray-900 font-semibold">— Jason M.</h4>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <p className="text-lg italic text-gray-700 mb-4">
              "Debyt is the perfect solution for global transfers. I can send money to family across borders without any issues. Highly recommended!"
            </p>
            <h4 className="text-gray-900 font-semibold">— Sara L.</h4>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Banner3;
