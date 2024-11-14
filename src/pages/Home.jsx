import React, { useState, useEffect } from 'react';
import About from '../components/About';
import MyJourney from '../components/MyJourney';
import MyJourneyMobile from '../components/MyJourneyMobile';
import Skills from '../components/Skills';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-gray-100 flex flex-col p-4">
      <div className="w-full max-w-8xl mb-12">
        <About />
      </div>

      <div className="flex flex-col sm:flex-row w-full max-w-8xl gap-4">
        <div className={`flex-1 ${isMobile ? 'w-full' : 'max-w-1/2'}`}>
          {isMobile ? <MyJourneyMobile /> : <MyJourney />}
        </div>
        <div className={`flex-1 ${isMobile ? 'w-full' : 'max-w-1/2'}`}>
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Home;