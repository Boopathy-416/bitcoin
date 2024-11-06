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

  return (
    <div className="relative min-h-screen min-w-screen max-h-screen min-w-max  text-white flex flex-col">
      <main className="p-4 w-full absolute flex-grow flex flex-col items-center justify-center p-4 sm:px-6 lg:px-8 text-center">
        <FadeImage
          text={<div className="year pt-2 pb-0">C.1944</div>}
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
            <p className="particle m-0 p-1">
              The U.S. dollar became the global standard after World War II
              where most currencies were pegged to the dollar, which was
              convertible to gold. This made the U.S. dollar the world's reserve
              currency, providing stability in international trade. The gold
              convertibility was ended in 1971, but the dollar remained the
              dominant global currency.
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
