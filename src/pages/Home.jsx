import React from 'react';
import About from '../components/About';
import MyJourney from '../components/MyJourney';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <div className="bg-gray-100 flex flex-col p-4">
      
      <div className="w-full max-w-8xl mb-12">
        <About />
      </div>

      <div className="flex flex-wrap w-full max-w-8xl gap-16">
        <div className="w-full max-w-3xl">
          <MyJourney />
        </div>
        <div className="w-full max-w-3xl">
          <Skills />
        </div>
      </div>

    </div>
  );
};

export default Home;
