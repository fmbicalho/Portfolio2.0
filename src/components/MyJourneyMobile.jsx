import React from 'react';
import { Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import ComputerIcon from '@mui/icons-material/Computer';
import AirplaneTicket from '@mui/icons-material/AirplaneTicket';

const MyJourneyMobile = () => (
  <section className="bg-gray-200 p-4 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold text-black mb-4">My Journey</h2>
    
    <div className="flex flex-col">
      <div className="mb-4 flex items-start">
        <div className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-full mr-3">
          <CodeIcon className="text-white" />
        </div>
        <div>
          <Typography variant="h6" component="span">
            2024: Fullstack Bootcamp at Code for All
          </Typography>
          <Typography>
            To sharpen my practical programming skills, I enrolled in a fullstack bootcamp at Code for All, focusing more on hands-on programming, which contrasted with the theoretical approach I encountered in university.
          </Typography>
        </div>
      </div>

      <div className="mb-4 flex items-start">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full mr-3">
          <WorkIcon className="text-white" />
        </div>
        <div>
          <Typography variant="h6" component="span">
            2019-2024: Work Experience in Telecommunications and Consumer Support
          </Typography>
          <Typography>
            While studying, I worked as a Telecommunications Consultant at Altice (MEO), managing sales initiatives and acting as the first point of contact for customers. I also provided technical assistance as a Consumer Support Specialist at Vodafone.
          </Typography>
        </div>
      </div>

      <div className="mb-4 flex items-start">
        <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full mr-3">
          <SchoolIcon className="text-white" />
        </div>
        <div>
          <Typography variant="h6" component="span">
            2019: Enrolled in Computer Science at the University of Minho
          </Typography>
          <Typography>
            I took my passion further by joining the Computer Science program at the University of Minho, where I began learning the fundamentals and theoretical aspects of the field.
          </Typography>
        </div>
      </div>

      <div className="mb-4 flex items-start">
        <div className="flex items-center justify-center w-12 h-12 bg-yellow-500 rounded-full mr-3">
          <ComputerIcon className="text-white" />
        </div>
        <div>
          <Typography variant="h6" component="span">
            2018: Sparked Interest in Programming
          </Typography>
          <Typography>
            Later, I moved to Portugal to study Computer Science, deepening my passion for technology and development.
          </Typography>
        </div>
      </div>

      <div className="mb-4 flex items-start">
        <div className="flex items-center justify-center w-12 h-12 bg-purple-500 rounded-full mr-3">
          <AirplaneTicket className="text-white" />
        </div>
        <div>
          <Typography variant="h6" component="span">
            2019: Cultural and Language Growth
          </Typography>
          <Typography>
            In 2018, I moved from Brazil to the USA for five months, where I had the opportunity to enhance my English communication skills and immerse myself in a new culture. This experience not only strengthened my language abilities but also broadened my perspective on life, helping me grow both personally and professionally.
          </Typography>
        </div>
      </div>
    </div>
  </section>
);

export default MyJourneyMobile;