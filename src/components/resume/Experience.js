import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]"> </p> */}
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Mern Stack Developer"
            subTitle="Vital skill & Techkriti IIT Kanpur"
            result="💻"
            des="Completed a MERN stack internship at IIT Kanpur, gaining 
            hands-on experience in building full-stack applications using MongoDB, Express.js, React.js, and Node.js."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle=""
            result="💻"
            des="Experienced in web development with skills in HTML, CSS, JavaScript, React.js, and Bootstrap, building responsive and interactive websites with dynamic functionality."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle=""
            result="💻"
            des="Experienced frontend developer skilled in HTML, CSS, JavaScript, React.js, and Bootstrap, creating responsive, user-friendly interfaces and delivering seamless user experiences."
          />
        </div>
      </div>
      <div>
        {/* <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div> */}
        {/* <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div> */}
      </div>
    </motion.div>
  );
};

export default Experience;
