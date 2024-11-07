import React, { useRef, useState, useEffect } from "react";
import FadeImage from "../customise/FadeImage";

import bitcoinLeft from "/public/assets/bitcoinbeamLft.webp";
import bitcoinLFTman from "/public/assets/Group 208.webp";
import bitcoinRight from "/public/assets/bitcoinbeamrft.webp";
import bitcoinRHSman from "/public/assets/Group 209.webp";

export default function Bitcoin() {
  const boxRef = useRef(null);
  const [height, setHeight] = useState(10);

  useEffect(() => {
    const updateHeight = () => {
      const width = boxRef.current.offsetWidth;
      const isMobile = window.matchMedia("(max-width: 768px)").matches; // Detect mobile screen size

      if (isMobile) {
        setHeight(width * 0.17); // For mobile screens
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
    <div className="relative min-h-screen min-w-screen max-h-screen min-w-max text-white flex flex-col">
      <main className="p-4 flex-grow absolute flex flex-col items-center justify-center p-4 sm:px-6 lg:px-8 text-center w-full ">
        <FadeImage
          text={<div className="year pt-4 ">2009</div>}
          direction="up"
        />
        <FadeImage
          text={<h1 className="head m-0 p-2 ">BITCOIN</h1>}
          direction="up"
        />
        <FadeImage
          text={
            <p className="particle m-0 p-0">
              Operating on a peer-to-peer network without the need for a central
              authority or government, bitcoin emerged in 2009. Using blockchain
              technology to securely record transactions and control the
              creation of new units, bitcoin is not backed by any physical asset
              or government, and its value is determined by supply, demand, and
              market speculation.
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
          className="bitbeam"
          style={{
            position: "absolute",
            height: `${height}dvh`,
            width: "auto",
            left: -35,
            bottom: 0,
            display: "flex",
            float: "left",
            opacity: 1,
          }}
        >
          <FadeImage
            src={bitcoinLeft}
            className="img-fluid"
            alt="leftarc"
            direction="right"
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </div>
        <div
          className="bitleft"
          style={{
            position: "absolute",
            width: "36.5vw",
            left: 0,
            height: "auto",
            bottom: 0,
          }}
        >
          <FadeImage
            src={bitcoinLFTman}
            className="img-fluid"
            direction="right"
            alt="leftman"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>

        <div
          className="bitbeam"
          style={{
            zIndex: 1,
            position: "absolute",
            height: `${height}dvh`,
            width: "auto",
            right: -30,
            bottom: 0,
            opacity: 1,
          }}
        >
          <FadeImage
            src={bitcoinRight}
            className="img-fluid"
            alt="rightarc"
            direction="left"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div
          className="bitright"
          ref={boxRef}
          style={{
            position: "absolute",
            width: "36vw",
            height: "auto",
            right: 0,
            bottom: 0,
            zIndex: 2,
          }}
        >
          <FadeImage
            src={bitcoinRHSman}
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
