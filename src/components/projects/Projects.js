import React, { useState } from "react";
import Title from "../layouts/Title";
import {  projectTwo } from "../../assets/index";
import stockguru from "../../assets/images/projects/stockguru.jpg";
import education from "../../assets/images/projects/education.png";
import calculator from "../../assets/images/projects/calculator.png";
import travel from "../../assets/images/projects/travel.png";
import portfolio from "../../assets/images/projects/portfolio.png";
import medicare from "../../assets/images/projects/medicare.png";
import Mynote from "../../assets/images/projects/Mynote.png";
import Room_Guru from "../../assets/images/projects/Room_Guru.png";

import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "AiStock_Guru",
      des: "Language Used: Reactjs, Tailwind css,",
      src: stockguru,
      githubLink: "https://github.com/Vivek1893/Aistockguru",
      liveLink: "https://stockguruai.netlify.app/",
    },
    {
      title: "Educational_website",
      des: "Language Used: HTML, CSS, JS",
      src: education,
      githubLink: "https://github.com/Vivek1893/Education_website",
      liveLink: "https://educsite.netlify.app/",
    },
    {
      title: "E-Yatra Travels",
      des: "Language Used: HTML, CSS, JS, ReactJS",
      src: travel,
      githubLink: "https://github.com/Vivek1893/Codsoft/tree/main/e-Yatra-travels%20landing%20page",
      liveLink: "https://e-yatra-traveling.netlify.app/",
    },
     {
      title: "Medicare-Booking",
      des: "Language Used: React.js, Tailwind CSS, Node.js, Express.js, MongoDB",
      src: medicare,
      githubLink: "https://github.com/Vivek1893/Medicare-Booking",
      liveLink: "https://medicare-booking-fo8f.onrender.com/",
    },
     {
      title: "Mynotes",
      des: "Language Used: ReactJS, NodeJS, ExpressJS, MongoDB",
      src: Mynote,
      githubLink: "https://github.com/Vivek1893/Mynotes",
      liveLink: "https://mynotes-kmor.onrender.com/",
    },
    {
      title: "Room_Guru",
      des: "Language Used:  ReactJS, Tailwind CSS, Node.js, Express.js, MongoDB",
      src: Room_Guru,
      githubLink: "https://github.com/Vivek1893/Room_Guru",
      liveLink: "https://drive.google.com/file/d/1uDr9tyOJ9sh2D79iirhHb8_T6jy0Epz2/view?usp=drive_link",
    },
    
    {
      title: "Portfolio",
      des: "Language Used: HTML, CSS, JS, ReactJS",
      src: portfolio,
      githubLink: "https://github.com/Vivek1893/Codsoft/tree/main/vivek%20Portfolio",
      liveLink: "https://github.com/Vivek1893/Codsoft/tree/main/vivek%20Portfolio",
    },
    {
      title: "calculator",
      des: "Language Used: HTML, CSS, JS",
      src: calculator,
      githubLink: "https://github.com/Vivek1893/Codsoft/tree/main/Calculator",
      liveLink: "https://github.com/Vivek1893/Codsoft/tree/main/Calculator",
    },
   
    
    {
      title: "Chatting App",
      des: "Language Used: HTML, CSS, JS, ReactJS",
      src: projectTwo,
      githubLink: "https://github.com/Vivek1893/Project1",
      liveLink: "https://project1-live-link.com",
    },
    
    // {
    //   title: "Chatting App",
    //   des: "Language Used: HTML, CSS, JS, ReactJS",
    //   src: projectTwo,
    //   githubLink: "https://github.com/Vivek1893/Project1",
    //   liveLink: "https://project1-live-link.com",
    // },
  ];

  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projects.slice(0, showAll ? projects.length : 6).map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            des={project.des}
            src={project.src}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>

      {/* Show More Button */}
      {!showAll && (
        <div className="text-center mt-6">
          <button
            className="bg-designColor text-white py-2 px-6 rounded-full hover:bg-opacity-80"
            onClick={() => setShowAll(true)}
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects; 
