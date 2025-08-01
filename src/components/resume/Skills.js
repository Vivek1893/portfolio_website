import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaNodeJs, FaJava, FaGit, FaGitAlt } from "react-icons/fa"; 
import { 
  SiTailwindcss, 
  SiExpress,   
  SiMongodb, 
  SiPostgresql, 
} from "react-icons/si";

import { GiDatabase } from "react-icons/gi";
import { IoIosStats } from "react-icons/io";  

const skillsData = [
  // {
  //   category: "Languages",
  //   skills: [
  //     { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  //     { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  //     { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  //     { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  //     { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  //     { name: "Java", icon: <FaJava className="text-red-600" /> },
  //   ],
  // },
  {
    category: "Frameworks",
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-500" /> },
      { name: "Bootstrap", icon: <SiTailwindcss className="text-purple-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
      { name: "WordPress", icon: <FaPhp className="text-blue-400" /> },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
      { name: "GitHub", icon: <FaGitAlt className="text-black" /> },
      { name: "Git", icon: <FaGit className="text-orange-600" /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Express", icon: <SiExpress className="text-gray-800" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "SQL", icon: <GiDatabase className="text-gray-600" /> },
 
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Creativity", icon: <IoIosStats className="text-teal-500" /> },
      { name: "Time Management", icon: <IoIosStats className="text-yellow-500" /> },
      { name: "Team Work", icon: <IoIosStats className="text-blue-500" /> },
      { name: "Leadership", icon: <IoIosStats className="text-red-500" /> },
      { name: "Problem Solving", icon: <IoIosStats className="text-purple-500" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      <h2 className="text-3xl font-bold">Skills</h2>
      {skillsData.map((category, index) => (
        <div key={index} className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">{category.category}</h3>
          <div className="flex flex-wrap gap-6">
            {category.skills.map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-4 bg-black text-white rounded-md shadow-md transform transition duration-300 ease-in-out hover:scale-110"
                style={{
                  borderRadius: "10px",
                  border: "2px solid", // Set a solid border first
                  borderImage: "linear-gradient(to right, #3b82f6, #9333ea, #ec4899) 1", // Apply gradient to border
                }}
              >
                <span className="text-3xl">{skill.icon}</span>
                <p className="text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
