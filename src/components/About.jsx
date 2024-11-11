import React from "react";

const About = () => {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="../src/assets/images/profile.jpg"
          alt="Fernando Bicalho"
          className="w-56 h-56 object-cover rounded-full"
        />
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-2xl font-semibold text-black mb-4">About Me</h2>
          <p className="text-lg text-gray-700 mb-4">
            I'm a caffeine-powered ☕️ Computer Science student from the University of Minho with a passion for building robust web applications and seamless user experiences.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            I love the challenge of transforming ideas into code, connecting front and back-end to create applications that are both powerful and user-friendly. Ready to make my mark, one line of code at a time!
          </p>
        </div>
      </div>
    </div>
  );
};


export default About;
