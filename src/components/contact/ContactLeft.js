/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from 'react';
import { FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

const ContactLeft = () => {
  // You can directly set the location for Borivali East here
  const [location, setLocation] = useState({
    latitude: 19.2225,
    longitude: 72.8506,
  });

  useEffect(() => {
    // Function to get the user's current location, if needed
    // eslint-disable-next-line no-unused-vars
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        });
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    };

    // Uncomment the line below if you want to use the current location dynamically
    // getLocation();
  }, []);

  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <div className="w-full h-64 mb-2">
        {/* Google Maps iframe for Borivali East */}
        
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps?q=${location.latitude},${location.longitude}&hl=es;z=14&output=embed`}
          allowFullScreen
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Vivek Maurya</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          "Hi, I’m Vivek Maurya, a MERN stack developer. I love building websites and applications that are fast, user-friendly, and work well. Coding is my passion, and I enjoy turning ideas into real projects."
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone:{" "}
          <a
            href="tel:+918655685272"
            className="text-lightText hover:text-yellow-500 "
          >
            +91 8655685272
          </a>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <a
            href="mailto:vivekmaurya1893@gmail.com"
            className="text-lightText hover:text-yellow-500 "
          >
            vivekmaurya1893@gmail.com
          </a>
        </p>
      </div>
      <div className="flex flex-col gap-4">
  <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
  <div className="flex gap-4">
    <a
      href="https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1"
      target="_blank"
      rel="noopener noreferrer"
      className="bannerIcon h-9 w-9 flex items-center justify-center"
    >
      <FaInstagram />
    </a>
    <a
      href="https://www.linkedin.com/in/vivek-maurya-93a549252/"
      target="_blank"
      rel="noopener noreferrer"
      className="bannerIcon h-9 w-9 flex items-center justify-center"
    >
      <FaLinkedinIn />
    </a>
    <a
      href="https://github.com/Vivek1893"
      target="_blank"
      rel="noopener noreferrer"
      className="bannerIcon h-9 w-9 flex items-center justify-center"
    >
      <FaGithub />
    </a>
    <a
      href="https://wa.me/918655685272"
      target="_blank"
      rel="noopener noreferrer"
      className="bannerIcon h-9 w-9 flex items-center justify-center"
    >
      <FaWhatsapp />
    </a>
  </div>
</div>

    </div>
  );
};

export default ContactLeft;
