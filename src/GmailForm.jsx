import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'duhananup29@gmail.com',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_USER_ID'
    ).then(
      (result) => {
        console.log('Email sent successfully:', result.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      },
      (error) => {
        console.error('Error sending email:', error.text);
        alert('');
      }
    );
  };

  const handleCall = () => {
    const phoneNumber = '+919671444736';
    console.log("Initiating call to:", phoneNumber);
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className=' mx-auto px-4 md:px-6 py-[50px] lg:px-6 bg-[#262626] relative'>
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md my-5">
        <h2 className="text-2xl font-semibold mb-5 text-gray-800">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FCBF4E]"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FCBF4E]"
            />
          </div>
          <div>
            <label className="block text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FCBF4E]"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FCBF4E]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#FCBF4E] text-white py-2 px-4 rounded-md hover:bg-orange-400"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="flex items-center justify-center absolute bottom-3 left-[115px] md:right-auto  md:left-[55px] md:bottom-[70px]" data-aos="fade-up-right">
        <button
          onClick={handleCall}
          className="md:px-6 md:py-4 px-4 py-2  md:my-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-bold text-lg rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl focus:outline-none"
        >
          Call Us
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
