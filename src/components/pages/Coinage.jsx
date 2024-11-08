import React, { useRef, useState, useEffect } from "react";
import FadeImage from "../customise/FadeImage";

// Importing images
import coinageLFT from "/public/assets/coinageLFT.webp";
import coinageLFTman from "/public/assets/coinageLFTman.webp";
import coinageRFT from "/public/assets/coinageRFT.webp";
import coinageRFTman from "/public/assets/coinageRFTman.webp";

export default function Coinage() {
  const boxRef = useRef(null);
  const [height, setHeight] = useState(10);

  useEffect(() => {
    const updateHeight = () => {
      const width = boxRef.current.offsetWidth;
      const isMobile = window.matchMedia("(max-width: 768px)").matches; // Detect mobile screen size

      if (isMobile) {
        setHeight(width * 0.16); // For mobile screens
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
      phrase.style.animationDelay = `${index * 0.5}s`;
    });
  }, []);

  return (
    <div className="relative min-h-screen min-w-screen max-h-screen min-w-max  text-white flex flex-col select-none">
      <main className=" w-full absolute flex-grow flex flex-col items-center justify-center p-4 sm:px-6 lg:px-8 text-center">
        <FadeImage
          text={<div className="year pt-2">C.630 BCE</div>}
          direction="up"
        />

        <FadeImage
          text={<h1 className="head m-0 p-2">COINAGE</h1>}
          direction="up"
        />

        <FadeImage
          text={
            <p className="particles m-0 p-0">
              <span className="">
                Ancient Lydians, by stamping a seal on a piece of metal{" "}
              </span>
              <span className="">started</span>
              <span className="">the age of coins. </span>
              <span className="phrase">This procedure did </span>
              <span className="phrase">nothing to modify the </span>
              <span className="phrase">intrinsic value of the metal, </span>
              <span className="phrase">but it simplified </span>
              <span className="phrase">the exchange of </span>
              <span className="phrase">bullion for </span>
              <span className="phrase">anyone willing </span>
              <span className="phrase">to accept the stamp’s </span>
              <span className="phrase">guarantee. </span>
              {/* <span className="phrase"></span>
              <span className="phrase"></span>
              <span className="phrase"></span>
              <span className="phrase"></span> */}
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
          className="coinbeam"
          style={{
            position: "absolute",
            height: `${height}%`,
            width: "auto",
            left: -10,
            display: "flex",
            float: "left",
            bottom: 0,
            opacity: 1,
          }}
        >
          <FadeImage
            src={coinageLFT}
            className="img-fluid"
            alt="leftarc"
            direction="right"
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </div>
        <div
          className="conleft"
          style={{
            position: "absolute",
            width: "40vw",
            left: -20,
            bottom: 0,
          }}
        >
          <FadeImage
            src={coinageLFTman}
            className="img-fluid"
            alt="leftman"
            direction="right"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>

        <div
          className="coinbeam"
          style={{
            zIndex: 1,
            position: "absolute",
            height: `${height}%`,
            width: "auto",
            right: -10,
            bottom: 0,
            opacity: 1,
          }}
        >
          <FadeImage
            src={coinageRFT}
            className="img-fluid"
            alt="rightarc"
            direction="left"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div
          className="conright"
          ref={boxRef}
          style={{
            zIndex: 1,
            position: "absolute",
            bottom: 0,
            width: "35vw",
            right: 0,
          }}
        >
          <FadeImage
            src={coinageRFTman}
            className="img-fluid"
            alt="rightman"
            direction="left"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
