import React, { useRef, useState, useEffect } from "react";
import FadeImage from "../customise/FadeImage";

// Importing images
import goldLFT from "/public/assets/goldLFT.webp";
import goldstdLFTman from "/public/assets/goldstdLFTman.webp";
import goldRFT from "/public/assets/goldRFT.webp";
import goldstdRFTman from "/public/assets/goldstdRFTman.webp";

export default function GoldStandard() {
  const boxRef = useRef(null);
  const [height, setHeight] = useState(10);

  useEffect(() => {
    const updateHeight = () => {
      const width = boxRef.current.offsetWidth;
      const isMobile = window.matchMedia("(max-width: 768px)").matches; // Detect mobile screen size

      if (isMobile) {
        setHeight(width * 0.165); // For mobile screens
      } else {
        setHeight(width * 0.19); // For larger screens
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
      <main className=" w-full absolute flex-grow flex flex-col items-center justify-center  p-4 sm:px-6 lg:px-8 text-center">
        <FadeImage
          text={<div className="year  pt-4">C.1870 CE</div>}
          direction="up"
        />

        <FadeImage
          text={
            <h1 className="head m-0 p-2">
              GOLD <span className="tail">STANDARD</span>
            </h1>
          }
          direction="up"
        />
        <FadeImage
          text={
            <p className="particle m-0 p-0 ">
              The gold standard was a monetary system where a country's currency
              value was directly linked to a specific amount of gold.
              Governments agreed to convert currency into gold at a fixed rate,
              ensuring that paper money could be exchanged for physical gold.
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
          className="goldbeam"
          style={{
            position: "absolute",
            height: `${height}%`,
            width: "auto",
            left: 0,
            display: "flex",
            float: "left",
            bottom: 0,
          }}
        >
          <FadeImage
            src={goldLFT}
            className="img-fluid"
            alt="leftarc"
            direction="right"
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </div>

        <div
          className="goldman"
          style={{
            position: "absolute",
            bottom: 0,
            left: -30,
            width: "38.9%",
          }}
        >
          <FadeImage
            src={goldstdLFTman}
            className="img-fluid"
            alt="leftman"
            direction="right"
            style={{ width: "100%", objectFit: "contain" }}
          />
        </div>

        <div
          className="goldbeam"
          style={{
            zIndex: 1,
            position: "absolute",
            height: `${height}%`,
            width: "auto",
            right: 0,
            bottom: 0,
          }}
        >
          <FadeImage
            src={goldRFT}
            className="img-fluid"
            alt="rightarc"
            direction="left"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div
          className="goldrman"
          ref={boxRef}
          style={{
            zIndex: 2,
            position: "absolute",
            bottom: 0,
            width: "36vw",
            right: 0,
          }}
        >
          <FadeImage
            src={goldstdRFTman}
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
