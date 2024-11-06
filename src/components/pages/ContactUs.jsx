import React from "react";
import "../Stylepages/contact.css";
import FadeImage from "../customise/FadeImage";
import contact from "/public/assets/contactdown.webp"

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="relative min-h-screen min-w-screen max-h-screen min-w-max  flex flex-col  "
    >
      <header className="p-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">THEBITCOIN.COM</h2>

        <a href="/" className="hidden sm:inline-block text-white ">
          Contact Us
        </a>

        <a href="/" className="sm:hidden z-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </a>
      </header>

      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
          zIndex: 1,
        }}
      >
        <div className="flex-grow absolute z-3 contact  flex flex-col items-center justify-center p-4 sm:px-6 lg:px-8 text-center justify-center w-full ">
          <div className="text-base sm:text-lg lg:text-xl max-w-xl sm:max-w-1xl mb-8 sm:mb-12">
            <p className="years text-white mb-2">2020</p>
            <FadeImage
              text={
                <h3 className="ok mb-0">
                  THE<a className="tails">BITCOIN</a>.COM
                </h3>
              }
              direction="up"
            />
            <FadeImage
              text={<p className=" mb-4 uppercase">Coming soon to your city</p>}
              direction="up"
            />

            <FadeImage
              component={
                <form action="#">
                  <div className="relative  flex items-center">
                    <input
                      type="text"
                      id="name-input"
                      required
                      placeholder="Enter your Name"
                      className="w-full px-4 py-2 bg-transparent text-white placeholder-grey-700 border-0.01 rounded-full focus:outline-none"
                    />
                  </div>
                  <div className="relative mt-6 flex items-center">
                    <input
                      type="email"
                      id="email-input"
                      required
                      placeholder="Enter your Email"
                      className="w-full px-4 py-2 bg-transparent text-white placeholder-grey-700 border-0.01  rounded-full focus:outline-none"
                    />
                  </div>

                  <div className="relative mt-6 flex items-center">
                    <input
                      type="text"
                      id="name-input"
                      required
                      placeholder="Enter your Location"
                      className="w-full px-4 py-2 bg-transparent text-white placeholder-grey-700 border-0.01  rounded-full focus:outline-none"
                    />
                  </div>

                  <div className="flex justify-center mt-8">
                    <button className="w-full py-2 bg-dark text-white  font-bold rounded-full hover:bg-gray-300 focus:outline-none">
                      Submit
                    </button>
                  </div>
                </form>
              }
              direction="up"
            />
          </div>
        </div>

        <div
          className="down"
          style={{
            position: "absolute",
            height: "auto",
            width: "auto",
            bottom: 0,
            zIndex: 2,
            opacity: 0.6,
          }}
        >
          {" "}
          <FadeImage
            src={contact}
            className="img-fluid"
            alt="Responsive image"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            direction="up"
          />
        </div>
        <a
          id="contact"
          href="/"
          class="go text-sm text-orange-500 hover:text-blue-400 ml-1   "
        >
          Back to Home
        </a>
      </div>
    </section>
  );
}
