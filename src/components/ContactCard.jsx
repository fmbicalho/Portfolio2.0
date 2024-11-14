import React from "react";

const socialMediaLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/fernando-m-bicalho/", icon: "linkedin-in" },
    { name: "GitHub", url: "https://github.com/fmbicalho", icon: "github" },
    { name: "Facebook", url: "https://www.facebook.com/fernandombicalho", icon: "facebook-f" },
    { name: "Instagram", url: "https://www.instagram.com/fmbicalho/", icon: "instagram" },
  ];

  const ContactCard = () => {
    return (
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="relative">
              <img
                src="/images/profile.jpg"
                alt="Profile"
                className="w-full h-96 object-cover rounded-lg z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black to-white opacity-20 z-10"></div>
            </div>
  
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800">Fernando Bicalho</h2>
              <p className="text-gray-500">Full Stack Developer</p>
            </div>
  
            <div className="flex justify-between space-x-4">
              {socialMediaLinks.map(({ name, url, icon }) => (
                <div key={name} className="text-center">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <div className="w-16 h-16 bg-gray-400 hover:bg-blue-400 rounded-full flex items-center justify-center mx-auto">
                      <i className={`fab fa-${icon} text-white text-xl`}></i>
                    </div>
                  </a>
                  <p className="mt-2 text-sm text-gray-600">{name}</p>
                </div>
              ))}
            </div>
          </div>
  
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Send Email</h2>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
  
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
  
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md"
              ></textarea>
            </div>
  
            <button className="w-full bg-gray-400 text-white px-6 py-3 rounded-md hover:bg-red-400 transition">
              System Under Implementation!
            </button>
          </div>
        </div>
      </div>
    );
  };
  

export default ContactCard;
