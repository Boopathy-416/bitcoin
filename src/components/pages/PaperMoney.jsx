import React, { useRef, useState, useEffect } from "react";
import FadeImage from "../customise/FadeImage";

// Importing images
import paperMoneyLFT from "/public/assets/papermonneyLFT.webp";
import preciousLFTman from "/public/assets/preciousLFTman.webp";
import paperMoneyRFT from "/public/assets/papermoneyRFT.webp";
import paperMoneyRFTman from "/public/assets/papermoneyRFTman.webp";

function PaperMoney() {
  const boxRef = useRef(null);
  const [height, setHeight] = useState(10);

  useEffect(() => {
    const updateHeight = () => {
      const width = boxRef.current.offsetWidth;
      const isMobile = window.matchMedia("(max-width: 768px)").matches; // Detect mobile screen size

      if (isMobile) {
        setHeight(width * 0.2); // For mobile screens
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
          text={<div className="year pt-4">c.670 BCE</div>}
          direction="up"
        />

        <FadeImage
          text={
            <h1 className="head m-0 p-2 ">
              PAPER<span className="tail">MONEY</span>
            </h1>
          }
          direction="up"
        />
        <FadeImage
          text={
            <p className="particle m-0 p-0" style={{textAlign:"center"}}>
              The concept of representative money emerged during the Tang
              Dynasty (618-907 CE),when the kingdom and merchants
              began 
              issuing paper notes that represented a claim on a specific amount
               of precious metal or goods held in reserve.These early
              banknotes were among the first widely used forms of
              representative money.
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
            src={paperMoneyLFT}
            className="img-fluid"
            alt="leftarc"
            direction="right"
            style={{ height: "auto", width: "100%", objectFit: "contain" }}
          />
        </div>
        <div
        className="popleft"
          style={{
            position: "absolute",
            bottom: 0,
            width: "38.2%",
          }}
        >
          <FadeImage
            src={preciousLFTman}
            className="img-fluid"
            alt="leftman"
            direction="right"
            style={{ width: "100%", objectFit: "contain" }}
          />
        </div>

        <div
          style={{
            zIndex: 1,
            position: "absolute",
            height: `${height}%`,
            width: "auto",
            bottom: 0,
            right: 0,
          }}
        >
          <FadeImage
            src={paperMoneyRFT}
            className="img-fluid"
            alt="rightarc"
            direction="left"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </div>

        <div
            className="popright"
          ref={boxRef}
          style={{
            zIndex: 2,
            position: "absolute",
            bottom: 0,
            width: "35%",
            right: 0,
          }}
        >
          <FadeImage
            src={paperMoneyRFTman}
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

export default PaperMoney;
