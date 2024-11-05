import React, { useRef, useState, useEffect } from "react";
import FadeImage from "../customcursor/FadeImage";

import commodityLFT from "/public/assets/commodityLFT.webp";
import coinageLFTman from "/public/assets/coinageLFTman.webp";
import commodityRFT from "/public/assets/commodityRFT.webp";
import coinageRFTman from "/public/assets/coinageRFTman.webp";

export default function CommodityMoney() {
  const boxRef = useRef(null);
  const [height, setHeight] = useState(10);

  useEffect(() => {
    const updateHeight = () => {
      const width = boxRef.current.offsetWidth;
      const isMobile = window.matchMedia("(max-width: 768px)").matches; // Detect mobile screen size

      if (isMobile) {
        setHeight(width * 0.185); // For mobile screens
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
    <div className="relative min-h-screen min-w-screen max-h-screen min-w-max text-white flex flex-col">
      <main className=" w-full absolute p-4 flex-grow  flex flex-col items-center justify-center p-4 sm:px-6 lg:px-8 text-center">
        <FadeImage
          text={<div className="year pt-4">c.5,500 BCE</div>}
          direction="up"
        />

        <FadeImage
          text={
            <h1 className="head m-0 p-2">
              COMMODITY <span className="tail">Money</span>
            </h1>
          }
          direction="up"
        />
        <FadeImage
          text={
            <p className="particle m-0 p-0">
              Commodity money developed when societies began using objects with
              
              intrinsic value as currency.Ancient civilizations like the
              Sumerians and Egyptians used items like grain, cattle,
              honey or animal pelts.
            </p>
          }
          direction="up"
        />
      </main>

      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "100vw",
          zIndex: 1,
        }}
      >
        <div
          className="combeam"
          style={{
            position: "absolute",
            height: `${height}%`,
            width: "auto",
            left: -50,
            display: "flex",
            float: "left",
            bottom: 0,
            opacity: 1,
          }}
        >
          <FadeImage
            src={commodityLFT}
            className="img-fluid "
            alt="leftarc"
            direction="right"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div
          className="comleft"
          style={{
            position: "absolute",
            width: "39.5vw",
            height: "auto",
            left: -60,
            bottom: 0,
          }}
        >
          <FadeImage
            src={coinageLFTman}
            className="img-fluid"
            alt="leftman"
            direction="right"
            style={{ width: "100%", objectFit: "contain" }}
          />
        </div>

        <div
        className="comsbeam"
          style={{
            zIndex: 1,
            position: "absolute",
            height: `${height}%`,
            width: "auto",
            right: -35,
            bottom: 0,
            opacity: 1,
          }}
        >
          <FadeImage
            src={commodityRFT}
            className="img-fluid"
            alt="rightarc"
            direction="left"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>

        <div
          className="comright"
          ref={boxRef}
          style={{
            zIndex: 2,
            position: "absolute",
            bottom: 0,
            width: "35vw",
            height: "auto",
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
