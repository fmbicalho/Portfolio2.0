import libraryImage from "/Users/fernandobicalho/Desktop/react-portfolio/src/assets/images/library.png"
import chatImage from "/Users/fernandobicalho/Desktop/react-portfolio/src/assets/images/chat.jpg"
import spaImage from "/Users/fernandobicalho/Desktop/react-portfolio/src/assets/images/spa.png"
import weddingImage from "/Users/fernandobicalho/Desktop/react-portfolio/src/assets/images/wedding.png"
import cinemaImage from "/Users/fernandobicalho/Desktop/react-portfolio/src/assets/images/cinema.png"
import smallProjectsImage from "/Users/fernandobicalho/Desktop/react-portfolio/src/assets/images/smallprojects.jpg"
import groceryImage from "/Users/fernandobicalho/Desktop/react-portfolio/src/assets/images/grocery.png"
import pythonImage from "/Users/fernandobicalho/Desktop/react-portfolio/src/assets/images/python.png"

export const projectData = [
    {
      id: 1,
      title: "Library Manager",
      description: "A Web Application to organize and manage a Library.",
      languages: ["Java", "SpringBoot", "JavaScript", "MySQL", 
        "HTML", "CSS"],
      image: libraryImage,
      onlineLink: "",
      repoLink: "https://github.com/fmbicalho/LibraryManager",
    },
    {
      id: 2,
      title: "Fighting Game",
      description: "Single-Player Fighting game based on the Code for all_ Bootcamp professors.",
      languages: ["Java", "Simple Graphics"],
      image: "https://github.com/user-attachments/assets/2f9a34d4-b16b-4f74-bbe1-487094810cf1",
      onlineLink: "",
      repoLink: "https://github.com/fmbicalho/GameJam",
    },
    {
        id: 3,
        title: "Rastros - Slimetrail",
        description: "A game based on the original Slimetrail, created during Algorithm Laboratory I Course at University of Minho.",
        languages: ["C"],
        image: "https://cf.geekdo-images.com/tYxS-l2Z8FkehH7eIQFY9A__opengraph/img/jA27SaLhCBZqH0zmZq-fhh-9nBY=/fit-in/1200x630/filters:strip_icc()/pic332409.jpg",
        onlineLink: "",
        repoLink: "https://github.com/Alef-Keuffer/uminho.la1.rastos-c",
      },
      {
        id: 4,
        title: "Server X Clients Chat",
        description: "It's a server-based Java program using IO Network, developed during the CodeforAll_ Bootcamp.",
        languages: ["Java", "Netcat"],
        image: chatImage,
        onlineLink: "",
        repoLink: "https://github.com/fmbicalho/Online_Chat_in_Java",
      },
      {
        id: 5,
        title: "Single Page Application",
        description: "A SPA created during the CodeforAll_ Hackathon. In 24h.",
        languages: ["JavaScript", "HTML", "CSS"],
        image: spaImage,
        onlineLink: "https://race4life.netlify.app",
        repoLink: "https://github.com/fmbicalho/race4life",
      },
      {
        id: 6,
        title: "Wedding Organizer",
        description: "A Web Application to organize Weddings.",
        languages: ["Node.js", "Express.js", "Objection",
            "MySQL", "HTML", "CSS"],
        image: weddingImage,
        onlineLink: "",
        repoLink: "https://github.com/fmbicalho/weddingOrganizerWithNodeJS",
      },
      {
        id: 7,
        title: "Folder Sync Tool",
        description: "This Python program synchronizes files between a source folder and a replica folder. Created with Python.",
        languages: ["Python"],
        image: pythonImage,
        onlineLink: "",
        repoLink: "https://github.com/fmbicalho/python_folder_sync",
      },
      {
        id: 8,
        title: "React Grocery Helper",
        description: "This React Web Application was created to help everybody going to grocery. Created with React and Javascript.",
        languages: ["JavaScript", "React", "HTML", "CSS"],
        image: groceryImage,
        onlineLink: "",
        repoLink: "https://github.com/fmbicalho/React-Grocery-Helper",
      },
      {
        id: 9,
        title: "Cinema Management",
        description: "A Single Page Application created with JS, HTML and CSS. A cinema management app, to be used by a cinema company.",
        languages: ["JavaScript", "HTML", "CSS"],
        image: cinemaImage,
        onlineLink: "https://cinema-management-fb.netlify.app/",
        repoLink: "https://github.com/fmbicalho/cinema-management",
      },
      {
        id: 10,
        title: "Small Projects",
        description: "Small projects created during Code for All_ ReactLab.",
        languages: ["JavaScript", "React", "HTML", "CSS"],
        image: smallProjectsImage,
        onlineLink: "",
        repoLink: "https://github.com/fmbicalho/ReactLab-Projects",
      },
  ];
  