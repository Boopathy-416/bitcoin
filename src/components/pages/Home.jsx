import React, { useRef, useState, useEffect } from "react";
import "../Stylepages/Home.css";
import Navbar from "../Nabar.jsx";
import FadeImage from "../customise/FadeImage";
import leftArchHome from "/public/assets/leftarchome.webp";
import homeDown from "/public/assets/homedown.webp";
import rightArchHome from "/public/assets/rightarchome.webp";
import buttonScroll from "/public/assets/bg buttonscroll.png";

const Home = ({ goToSection, goToContact }) => {
  const boxRef = useRef(null);
  const [height, setHeight] = useState(10);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateHeight = () => {
      const width = boxRef.current.offsetWidth;
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      if (isMobile) {
        setHeight(width * 0);
      } else {
        setHeight(width * 0.07);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
      goToSection();
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
      goToSection();
    }
  };

  const handleClick = () => {
    if (isMobile) {
      goToSection();
    }
    goToSection();
  };

  useEffect(() => {
    const phrases = document.querySelectorAll(".phrase");
    phrases.forEach((phrase, index) => {
      phrase.style.animationDelay = `${index * 1.5}s`;
    });
  }, []);

  return (
    <div className="relative min-h-screen min-w-screen max-h-screen flex flex-col select-none">
      <Navbar goToContact={goToContact} />

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
          className="i z-3 phrase"
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
            height: `${height}%`,
            width: "auto",
            left: 0,
            display: "flex",
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
          style={{ position: "absolute", bottom: 0, zIndex: 2, width: "auto" }}
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
            height: `${height}%`,
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
