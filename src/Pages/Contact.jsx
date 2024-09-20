import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form validation logic
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setSubmitted(true);
      setErrors({});
      // In a real application, submit form data here (e.g., API call)
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col justify-center items-center px-4 py-16">
      <div className="max-w-2xl w-full">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-10 text-center">Contact Us</h1>

        {/* Thank You Message */}
        {submitted ? (
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800">Thank You!</h2>
            <p className="text-lg text-gray-600 mt-4">We appreciate your message. Our team will get back to you soon.</p>
            <button
              className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
              onClick={() => setSubmitted(false)} // Reset form for another submission
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form
            className="bg-white p-8 rounded-md shadow-lg space-y-6"
            onSubmit={handleSubmit}
          >
            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-4 border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } rounded-md`}
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-4 border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } rounded-md`}
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
            </div>

            {/* Message Textarea */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full p-4 border ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } rounded-md`}
                placeholder="Write your message"
              />
              {errors.message && <p className="text-red-500 mt-1">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-md hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
