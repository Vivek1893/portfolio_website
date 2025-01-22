import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';




const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Mern stack Developer.", "UI Designer.","Frontend Developer.","Backend Developer"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Vivek Maurya</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          A <span className=' text-red-500'>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ffffff"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        "Hi, I’m Vivek Maurya, a MERN stack developer. I love building websites and applications that are fast, user-friendly, and work well. Coding is my passion, and I enjoy turning ideas into real projects."
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner;