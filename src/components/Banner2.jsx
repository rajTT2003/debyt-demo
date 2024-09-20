import React from 'react';
import BannerPhones2 from '/images/phones2.png';
import './Banner.css';

const Banner2 = () => {
  return (
    <div className="bg-blue md:pt-0 pt-10 text-white">
      {/* Title Section */}
      <h5 className="font-bold text-white text-center md:text-6xl text-4xl pb-8 mb-10">
        <span className="text-white/25">Quick. </span>
        <span className="text-white/50">Easy. </span>
        <span className="italic text-white/80">Send.</span>
      </h5>

      {/* Main Content */}
      <div className="md:flex block items-center">
        {/* Image Section */}
        <div className="flex md:w-1/2 w-full h-auto justify-center items-center">
          <img src={BannerPhones2} className="w-[500px] md:w-[600px] transition-transform hover:scale-105 duration-300" alt="Mobile Phones" />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 w-full md:pl-10 pl-0">
          <h4 className=" text-4xl text-center  md:ml-6 font-bold mb-4">How Debyt Works</h4>
          <p className="text-center  italic text-lg font-medium mb-8">Sending Money Made Simple</p>

          {/* Steps Section */}
          <div className="mt-8 space-y-8 md:px-10 px-5 font-semibold">
            {/* Step 1 */}
            <div className="flex items-center">
              <div className="p-5 md:w-16 w-10 md:h-16 h-10 bg-white text-blue-600 rounded-full flex justify-center items-center text-2xl font-bold shadow-md">
                1
              </div>
              <p className="ml-6 text-white text-lg">
                Sign up for a free Debyt account.
                <span className="block text-sm text-gray-300 italic">No hidden fees, just simple and secure sign-up.</span>
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex items-center justify-end">
              <p className="mr-6 text-white text-lg">
                Link your bank account securely.
                <span className="block text-sm text-gray-300 italic">Bank-level encryption ensures your details are safe.</span>
              </p>
              <div className="p-5 md:w-16 w-10 md:h-16 h-10 bg-white text-blue-600 rounded-full flex justify-center items-center text-2xl font-bold shadow-md">
                2
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-center">
              <div className="p-5 md:w-16 w-10 md:h-16 h-10 bg-white text-blue-600 rounded-full flex justify-center items-center text-2xl font-bold shadow-md">
                3
              </div>
              <p className="ml-6 text-white text-lg">
                Choose the recipient and the amount.
                <span className="block text-sm text-gray-300 italic">Select from your contacts and pick the right amount to send.</span>
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex items-center justify-end">
              <p className="mr-6 text-white text-lg">
                Confirm the transaction and send money instantly.
                <span className="block text-sm text-gray-300 italic">Fast and reliable transfers with real-time confirmation.</span>
              </p>
              <div className="p-5 md:w-16 w-10 md:h-16 h-10 bg-white text-blue-600 rounded-full flex justify-center items-center text-2xl font-bold shadow-md">
                4
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
