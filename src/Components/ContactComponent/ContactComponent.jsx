import React, { useState } from "react";
import emailjs from "emailjs-com";
import FallingStarsComponent from "../FallingStarsComponent/FallingStarsComponent";

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the email using EmailJS
    emailjs
      .send(
        "service_017ywt7",
        "YOUR_TEMPLATE_ID",
        formData,
        "EVhFCzJFFZN9pt19g"
      )
      .then((result) => {
        console.log("Email successfully sent!", result.text);
        alert("Thank you for contacting me! Your message has been sent.");
        // Reset the form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("Failed to send the email. Error:", error.text);
        alert("Something went wrong, please try again.");
      });
  };

  return (
    <div className="relative w-full px-4 py-8 md:py-12">
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <FallingStarsComponent />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row md:gap-10 max-w-6xl mx-auto">
        {/* Section heading - visible only on mobile */}
        <h1 className="text-3xl font-bold text-white text-center mb-8 md:hidden">
          Contact Us
        </h1>

        {/* Google Maps Section */}
        <div className="w-full md:w-1/2 h-64 md:h-96 mb-8 md:mb-0">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1452055285314!2d80.10061357477498!3d13.048861388434065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52636fb9d19391%3A0xe01ec33f1bdb6781!2sPoonamallee%2C%20Tamil%20Nadu%20600256%2C%20India!5e0!3m2!1sen!2sus!4v1677583040427!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>

        {/* Contact Form Section */}
        <div className="relative w-full md:w-1/2 p-6 md:p-8 text-white rounded-lg shadow-xl">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-lg"></div>

          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-white/5 border border-gray-300/30 rounded-md shadow-sm focus:ring-2 focus:ring-[#34E1EA] focus:border-transparent placeholder-gray-300 text-white"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-white/5 border border-gray-300/30 rounded-md shadow-sm focus:ring-2 focus:ring-[#34E1EA] focus:border-transparent placeholder-gray-300 text-white"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-white/5 border border-gray-300/30 rounded-md shadow-sm focus:ring-2 focus:ring-[#34E1EA] focus:border-transparent placeholder-gray-300 text-white"
                  rows="4"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#34E1EA] text-[#2D3047] font-bold py-3 px-4 rounded-lg shadow-lg hover:bg-[#2D3047] hover:text-[#34E1EA] border border-[#34E1EA] transition duration-300"
              >
                Let's connect
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Additional contact info - mobile friendly */}
      <div className="relative z-10 mt-8 text-center text-white max-w-6xl mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-lg bg-white/5 backdrop-blur-sm">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-[#34E1EA] mb-2">
              {/* Add icon here */}
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="text-lg font-semibold">Address</h3>
            <p className="text-sm text-gray-300 mt-1">
              Poonamallee, Tamil Nadu 600056, India
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <div className="text-[#34E1EA] mb-2">
              {/* Add icon here */}
              <span className="text-xl">
                <svg
                  fill="#0077B5"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                >
                  <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
                </svg>
              </span>
            </div>
            <h3 className="text-lg font-semibold">Phone</h3>
            <p className="text-sm text-gray-300 mt-1">+91 98765 43210</p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <div className="text-[#34E1EA] mb-2">
              {/* Add icon here */}
              <span className="text-2xl">✉️</span>
            </div>
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-sm text-gray-300 mt-1">
              mathanselvaraj1103@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
