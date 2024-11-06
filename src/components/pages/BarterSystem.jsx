import React, { useRef, useState, useEffect } from "react";
import "../Stylepages/BarterSystem.css";
import FadeImage from "../customise/FadeImage";
import BPLEFT from "/public/assets/BPLEFT.webp";
import BARTERLEFT from "/public/assets/BARTERLEFT.webp";
import BPRFT from "/public/assets/BPRFT.webp";
import BARTERRFT from "/public/assets/BARTERRFT.webp";

export default function BarterSystem() {
  const boxRef = useRef(null);
  const [height, setHeight] = useState(10);

  useEffect(() => {
    const updateHeight = () => {
      const width = boxRef.current.offsetWidth;
      const isMobile = window.matchMedia("(max-width: 768px)").matches; // Detect mobile screen size

      if (isMobile) {
        setHeight(width * 0.15); // For mobile screens
      } else {
        setHeight(width * 0.15); // For larger screens
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div className="relative min-h-screen min-w-screen max-h-screen min-w-max m-0 p-0 text-white flex flex-col">
      <main className="absolute flex-grow flex flex-col items-center justify-center p-4 sm:px-6 lg:px-8 text-center w-full ">
        <FadeImage
          text={<div className="year pt-4">c.670 BCE</div>}
          direction="up"
        />
        <FadeImage
          text={
            <h1 className="head m-0 p-2">
              BARTER <span className="tail">system</span>
            </h1>
          }
          direction="up"
        />
        <FadeImage
          text={
            <p className="particle m-0 p-0">
              The earliest form of trade, ancient Mesopotamians and Egyptians
              exchanged goods and services directly, such as trading livestock
              for grains or labor for tools.
            </p>
          }
          direction="up"
        />
      </main>

      <div
        style={{
          position: "absolute",
          height: "100vh",
          width: "100%",
        }}
      >
        <div
          className="barbeam"
          style={{
            position: "absolute",
            height: `${height}%`,
            width: "auto",
            left: 0,
            display: "flex",
            float: "left",
            bottom: 0,
            opacity: 1,
          }}
        >
          <FadeImage
            src={BPLEFT}
            className="img-fluid"
            alt="rightarc"
            direction="right"
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </div>
        <div
          className="barleft"
          style={{
            position: "absolute",
            width: "43vw",
            height: "auto",
            bottom: 0,
          }}
        >
          <FadeImage
            src={BARTERLEFT}
            className="img-fluid"
            direction="right"
            alt="rightarc"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>

        <div
          className="barbeam"
          style={{
            zIndex: 2,
            position: "absolute",
            height: `${height}%`,
            width: "auto",
            right: 0,
            bottom: 0,
            opacity: 1,
          }}
        >
          <FadeImage
            src={BPRFT}
            className="img-fluid"
            alt="rightarc"
            direction="left"
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </div>

        <div
          className="barright"
          ref={boxRef}
          style={{
            position: "absolute",
            width: "42vw",
            height: "auto",
            right: -20,
            bottom: 0,
            zIndex: 2,
          }}
        >
          <FadeImage
            src={BARTERRFT}
            className="img-fluid"
            alt="rightarc"
            direction="left"
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
