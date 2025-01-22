import React from 'react';
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full md:w-1/2 flex justify-center items-center relative">
      {/* Banner Image */}
      <img
        className="w-[200px] h-[300px] sm:w-[300px] sm:h-[400px] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[640px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />

      {/* Gradient Background */}
      <div className="absolute bottom-0 w-[250px] h-[200px] sm:w-[350px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center rounded-lg"></div>
    </div>
  );
};

export default RightBanner;
