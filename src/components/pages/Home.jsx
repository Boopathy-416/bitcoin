import React, { useRef, useState, useEffect } from "react";
import "../Stylepages/Home.css";
import FadeImage from "../customise/FadeImage";
import leftArchHome from "/public/assets/leftarchome.webp";
import homeDown from "/public/assets/homedown.webp";
import rightArchHome from "/public/assets/rightarchome.webp";
import buttonScroll from "/public/assets/bg buttonscroll.png";

const Home = ({ goToSection, goToContact }) => {
  const boxRef = useRef(null);
  const [height, setHeight] = useState(10);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // State to detect mobile view

  useEffect(() => {
    const updateHeight = () => {
      const width = boxRef.current.offsetWidth;
      const isMobile = window.matchMedia("(max-width: 768px)").matches; // Detect mobile screen size

      if (isMobile) {
        setHeight(width * 0.05); // For mobile screens
      } else {
        setHeight(width * 0.07); // For larger screens
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  // Function to handle mouse enter for hover (desktop)
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
      goToSection();
    }
  };

  // Function to handle mouse leave for hover (desktop)
  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
      goToSection();
    }
  };

  // Function to handle click for mobile
  const handleClick = () => {
    if (isMobile) {
      goToSection();
    }
    goToSection();
  };

  // fucntion to contact Us
  const gocontact = () => {
    goToContact(); 
  };

  return (
    <div className="relative min-h-screen min-w-screen max-h-screen flex flex-col">
      <header className="p-4 flex justify-between items-center z-1">
        <h2 className="font-bold text-white sm:text-xl  ">THEBITCOIN.COM</h2>

        <a
          onClick={gocontact}
          className="hidden sm:inline-block font-bold z-1 text-white cursor-pointer"
        >
          Contact Us
        </a>

        <a className="sm:hidden ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6  z-1 text-white cursor-pointer"
            onClick={gocontact}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </a>
      </header>

      <div className="flex-grow absolute flex flex-col items-center justify-center text-center w-full">
        <FadeImage
          text={
            <p className="title z-0 ">
              <b>ROME</b> was Not Built in a day, But history can be made
              overnight. It took <b>11,000</b> years of trade before{" "}
              <tt>BITCOIN</tt> was invented. It took us just <tt>15 YEARS</tt>{" "}
              to embark on creating history.
            </p>
          }
          direction="up"
        />
        <p
          className="i z-3"
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {" "}
          SCROLL
        </p>
        <img
          src={buttonScroll}
          alt="scroll btn"
          // Trigger goToSection to move to BarterSystem
          style={{
            cursor: "pointer",
            width: "15px",
            animation: "arrow-up 1s infinite ease-in-out",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "100vw",
          zIndex: 2,
        }}
      >
        <div
          className="homebeam"
          style={{
            position: "absolute",
            height: `${height}%`, // Dynamically set height
            width: "auto",
            left: 0,
            display: "flex",
            opacity: 1,
            opacity: 0.6,
            bottom: -20,
          }}
        >
          <FadeImage
            src={leftArchHome}
            className="img-fluid"
            alt="left arc"
            direction="right"
            style={{ height: "100%", objectFit: "contain" }}
          />
        </div>

        <div
          className="downs"
          ref={boxRef}
          style={{ position: "absolute", bottom: 0, zIndex: 2, width:"auto", }}
        >
          <img
            src={homeDown}
            className="img-fluid "
            alt="Responsive image"
            style={{ objectFit: "contain" }}
          />
        </div>

         <div
         className="homebeam"
          style={{
            zIndex: 1,
            position: "absolute",
            height: `${height}%`, // Dynamically set height
            width: "auto",
            right: 0,
            opacity: 0.6,
            bottom: -27,
          }}
        >
          <FadeImage
            src={rightArchHome}
            className="img-fluid"
            alt="right arc"
            direction="left"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div> 
      </div>
    </div>
  );
};

export default Home;
