import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CertificateCard from "./CertificateCard";
import certificate1 from "../../assets/images/certificate/certificate1.png";
import certificate2 from "../../assets/images/certificate/certificate2.png";
import certificate3 from "../../assets/images/certificate/certificate3.png";
import certificate4 from "../../assets/images/certificate/certificate4.png";
import certificate5 from "../../assets/images/certificate/certificate5.png";
import certificate6 from "../../assets/images/certificate/certificate6.png";
import certificate8 from "../../assets/images/certificate/certificate8.png";




const Achievement = () => {
  const scrollContainerRef = useRef(null);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [isScrolling, setIsScrolling] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += direction; // Scroll based on the current direction

        // Check if the scroll reaches the start or end and reverse direction
        if (
          scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
          scrollContainer.scrollWidth
        ) {
          setDirection(-1); // Change direction to backward
        } else if (scrollContainer.scrollLeft <= 0) {
          setDirection(1); // Change direction to forward
        }
      }
    };

    // Start scrolling if allowed
    const interval = isScrolling ? setInterval(scroll, 30) : null;
    return () => clearInterval(interval); // Cleanup interval
  }, [direction, isScrolling]);

  // Event handlers to pause and resume scrolling
  const handleMouseEnter = () => setIsScrolling(false);
  const handleMouseLeave = () => setIsScrolling(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      className="py-12 font-titleFont"
    >
      {/* Title */}
      <div className="py-6 font-titleFont text-center">
        <h2 className="text-4xl font-bold text-white">Certificates</h2>
      </div>

      {/* Horizontal Carousel */}
      <div
        ref={scrollContainerRef}
        className="w-full h-80 overflow-hidden flex gap-10 items-center"
      >
        {/* Certificate Cards */}
        {[
          {
            title: "Full Stack(Infosys)",
            description: "Certificate",
            image: certificate1,
            link: "https://drive.google.com/file/d/1bMYouL677Zs_oImYxml01gcy-KLlTGMK/view?usp=sharing",
          },
          {
            title: "Google cloud",
            description: "Certificate",
            image: certificate2,
            link: "https://drive.google.com/file/d/1Lx1DDDoHjeu1IeQePM1Xm3Q3NYRMOWZF/view?usp=drive_link",
          },
          {
            title: "Full stack",
            description: "Certificate",
            image: certificate3,
            link: "https://drive.google.com/file/d/1bMYouL677Zs_oImYxml01gcy-KLlTGMK/view?usp=drive_link",
          },
          {
            title: "Mern stack",
            description: "Certificate",
            image: certificate4,
            link: "https://drive.google.com/file/d/1wvdOZiDcwGC_QFzCzhMD3FVK0IUuJo-7/view?usp=sharing",
          },
          {
            title: "unstop(hackhton)",
            description: "Certificate",
            image: certificate5,
            link: "https://drive.google.com/file/d/1xgUifZznQA5BBG2_cOScKhgFfGvd7wKo/view?usp=sharing",
          },
          {
            title: "Hackhton",
            description: "Certificate",
            image: certificate6,
            link: "https://drive.google.com/file/d/1sdkyNL7lECo4_LqpuUs8cFIOH1aqrV90/view?usp=sharing",
          },
          {
            title: "NEC-2022(top-15 Rank)",
            description: "Certificate",
            image: certificate8,
            link: "https://drive.google.com/file/d/1LiV0t8sLzSFgnvwuxHXdTUqxTq6Tq7Fm/view?usp=sharing",
          },
        ].map((cert, index) => (
          <div
            key={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <CertificateCard
              title={cert.title}
              description={cert.description}
              image={cert.image}
              link={cert.link}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Achievement;
