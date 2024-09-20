import React from 'react';

const Features = () => {
  const featuresList = [
    {
      title: 'Seamless Transfers',
      description: 'Send money directly to any bank account, ensuring quick and hassle-free transfers.',
      icon: '🔄',
    },
    {
      title: 'Secure & Trusted',
      description: 'Debyt partners with verified institutions, keeping your transactions secure.',
      icon: '🔒',
    },
    {
      title: 'Multiple Bank Integration',
      description: 'Easily integrate with various banking apps, giving you more control over your financial activities.',
      icon: '🏦',
    },
    {
      title: 'Real-time Tracking',
      description: 'Track your transactions in real-time, knowing exactly when funds are delivered.',
      icon: '⏱️',
    },
    {
      title: '24/7 Customer Support',
      description: 'We’re available around the clock to assist you with any issues or questions.',
      icon: '☎️',
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col justify-center items-center px-6 py-16">
      <div className="max-w-6xl w-full">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-12 text-center">
          Discover Our Features
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-6xl mb-6">{feature.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h2>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
