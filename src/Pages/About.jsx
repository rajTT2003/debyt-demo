import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col justify-center items-center px-4 py-20">
      {/* Container */}
      <div className="max-w-5xl text-center space-y-8">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-blue-600 mb-4">About Debyt</h1>

        {/* Introduction Section */}
        <p className="text-xl text-gray-700 leading-relaxed">
          Welcome to Debyt, the versatile financial services platform designed for seamless money transfers. Whether you’re sending funds to friends or family, locally or internationally, Debyt makes it easy and secure to handle your financial transactions.
        </p>

        {/* Key Features Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Seamless Transfers</h3>
            <p className="text-gray-600">
              Debyt allows you to send money effortlessly, with funds deposited directly into bank accounts. Experience hassle-free transfers with no middleman delays.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Secure Partnerships</h3>
            <p className="text-gray-600">
              While Debyt isn’t a bank, it partners with trusted financial institutions, ensuring your transfers are handled with top-tier security and encryption.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Global Reach</h3>
            <p className="text-gray-600">
              Transfer money across borders with ease. Debyt makes international transfers as simple as sending money to a friend next door.
            </p>
          </div>
        </div>

        {/* Summary Section */}
        <p className="text-lg text-gray-700 mt-12">
          Debyt integrates with numerous banking apps for maximum convenience. Join us in revolutionizing how you handle money, and experience the future of financial transactions today.
        </p>
      </div>
    </section>
  );
};

export default About;
