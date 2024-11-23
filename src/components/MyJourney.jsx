import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import ComputerIcon from '@mui/icons-material/Computer';
import Typography from '@mui/material/Typography';
import { AirplaneTicket } from '@mui/icons-material';

const MyJourney = () => (
  <section className="bg-gray-100 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold text-black mb-4">My Journey</h2>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="error">
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Fullstack Bootcamp at Code for All_
          </Typography>
          <Typography>
          To sharpen my practical programming skills, I enrolled in a fullstack bootcamp at Code for All, focusing more on hands-on programming, which contrasted with the theoretical approach I encountered in university.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="left"
          variant="body2"
          color="text.secondary"
        >
          2019-2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Work Experience in Telecommunications and Consumer Support
          </Typography>
          <Typography>
          While studying, I worked as a Telecommunications Consultant at Altice (MEO), managing sales initiatives and acting as the first point of contact for customers. I also provided technical assistance as a Consumer Support Specialist at Vodafone.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="success">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Enrolled in Computer Science at the University of Minho
          </Typography>
          <Typography>
            I took my passion further by joining the Computer Science program at the University of Minho, where I began learning the fundamentals and theoretical aspects of the field.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="left"
          variant="body2"
          color="text.secondary"
        >
          2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="warning">
            <ComputerIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Sparked Interest in Programming
          </Typography>
          <Typography>
            Later, I moved to Portugal to study Computer Science, deepening my passion for technology and development.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="error">
            <AirplaneTicket />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Cultural and Language Growth
          </Typography>
          <Typography>
            In 2018, I moved from Brazil to the USA for five months, where I had the opportunity to enhance my English communication skills and immerse myself in a new culture. This experience not only strengthened my language abilities but also broadened my perspective on life, helping me grow both personally and professionally.
          </Typography>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
  </section>
);

export default MyJourney;
