import React, { useRef, useState, useEffect } from "react";
import FadeImage from "../customise/FadeImage";

// Importing images
import usdollarsLFT from "/public/assets/usdollarsLFT.webp";
import usdollarsLFTman from "/public/assets/usdollarsLFTman.webp";
import usdollarsRFT from "/public/assets/usdollarsRFT.webp";
import usdollarsRFTman from "/public/assets/usdollarsRFTman.webp";

function UsDollars() {
  const boxRef = useRef(null);
  const [height, setHeight] = useState(10);

  useEffect(() => {
    const updateHeight = () => {
      const width = boxRef.current.offsetWidth;
      const isMobile = window.matchMedia("(max-width: 768px)").matches; // Detect mobile screen size

      if (isMobile) {
        setHeight(width * 0.165); // For mobile screens
      } else {
        setHeight(width * 0.18); // For larger screens
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);
  useEffect(() => {
   
    const phrases = document.querySelectorAll(".phrase");
    phrases.forEach((phrase, index) => {
      phrase.style.animationDelay = `${index * 0.3}s`; 
    });
  }, []);
 // fucntion to contact Us
 const gocontact = () => {
  goToContact(); 
};

  return (
    <div className="relative min-h-screen min-w-screen max-h-screen min-w-max  text-white flex flex-col select-none">
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
      
      <main className="p-4 w-full absolute flex-grow flex flex-col items-center justify-center p-4 sm:px-6 lg:px-8 text-center">
        <FadeImage
          text={<div className="year pt-2 ">C.1944</div>}
          direction="up"
        />
        <FadeImage
          text={
            <h1 className="head m-0 p-1">
              US <span className="tail">DOLLARS</span>
            </h1>
          }
          direction="up"
        />
        <FadeImage
          text={
            <p className="particles m-0 p-1">
              <span className="">
                The U.S. dollar became the global standard after World War II
              </span>
              <span className="">where most currencies </span>
              <span className="">were pegged to the </span>
              <span className="phrase">dollar, which was </span>
              <span className="phrase">convertible to gold. </span>
              <span className="phrase">This made the U.S. </span>
              <span className="phrase">dollar the world's </span>
              <span className="phrase">reserve </span>
              <span className="phrase">currency, providing </span>
              <span className="phrase">stability in </span>
              <span className="phrase">international trade. </span>
              <span className="phrase">The gold </span>
              <span className="phrase">convertibility was </span>
              <span className="phrase">ended in 1971, </span>
              <span className="phrase">but the dollar </span>
              <span className="phrase">remained the </span>
              <span className="phrase">dominant global currency.</span>
            </p>
          }
          direction="up"
        />
      </main>
      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
          zIndex: 1,
        }}
      >
        <div
          className="usbeam"
          style={{
            position: "absolute",
            height: `${height}%`,
            width: "auto",
            left: -8,
            display: "flex",
            float: "left",
            bottom: -10,
          }}
        >
          <FadeImage
            src={usdollarsLFT}
            className="img-fluid"
            alt="leftarc"
            direction="right"
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </div>
        <div
          className="usleft"
          style={{
            position: "absolute",
            height: "auto",
            width: "39.7%",
            left: -20,
            bottom: 0,
          }}
        >
          <FadeImage
            src={usdollarsLFTman}
            className="img-fluid"
            alt="leftman"
            direction="right"
            style={{ width: "100%", objectFit: "contain" }}
          />
        </div>

        <div
          className="usbeam"
          style={{
            zIndex: 1,
            position: "absolute",
            height: `${height}%`,
            width: "auto",
            right: -20,
            bottom: 0,
          }}
        >
          <FadeImage
            src={usdollarsRFT}
            className="img-fluid"
            alt="rightarc"
            direction="left"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>

        <div
          className="usright"
          ref={boxRef}
          style={{
            zIndex: 2,
            position: "absolute",
            width: "36vw",
            height: "auto",
            right: 0,
            bottom: 0,
          }}
        >
          <FadeImage
            src={usdollarsRFTman}
            className="img-fluid"
            alt="rightman"
            direction="left"
            style={{ width: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

export default UsDollars;
