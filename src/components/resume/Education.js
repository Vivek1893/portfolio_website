import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]"></p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
          <ResumeCard
            title="Computer Secience Engineering"
            subTitle="Mumbai University (2021 - 2025)"
            result="7.5 cgpa"
            des="The training provided by universities in order to prepare people to work and focuses on the design and development of computer system ."
          />
          <ResumeCard
            title="HSC - Computer Science"
            subTitle="Thakur College Of Science & Commerce (2019 - 2021)"
            result="74%"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="St.John's High School (2015 - 2019)"
            result="60%"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
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
    </motion.div>
  );
}

export default Education