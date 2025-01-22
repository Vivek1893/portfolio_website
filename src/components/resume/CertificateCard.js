import React from "react";

const CertificateCard = ({ title, description, image, link }) => {
  return (
    <div className="flex justify-center">
    <div className="w-[320px] h-[320px] bg-[#1F2937] p-5 rounded-xl flex flex-col items-center text-red-500 shadow-lg shadow-cyan-500/50 hover:scale-105 transition-transform">
      <img src={image} alt={title} className="w-full h-32 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm mb-4 text-white">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="text-emerald-600 py-2 px-6 rounded mt-auto hover:border-2  hover:text-yellow-700 transition-colors">
          View
        </button>
      </a>
    </div>
  </div>
  
  );
};

export default CertificateCard;
