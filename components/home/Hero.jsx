import React from "react";
import Pen from "../../assets/Images/caneta.png";

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-gradient-to-b from-gray-100 w-full to-white">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-5xl font-extrabold flex ">
              <h1 data-aos="fade-up" data-aos-duration="1000">
                C
              </h1>
              <h1 data-aos="fade-down" data-aos-duration="2000">
                S
              </h1>
              <h1
                className="mr-3"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                S
              </h1>
              Animations <br /> for you
            </h1>
            <div className="mb-8 text-2xl leading-relaxed flex items-center mt-4">
              <div className=" typewriter">
                <h1>
                  This is for people who have difficulty making animations in
                  CSS.
                </h1>
              </div>
              <div className="mb-10 ml-3">
                <img src={Pen.src} alt="Pen" className="w-14 " />
              </div>
            </div>
            <div className="flex justify-center">
              <a
                data-aos="zoom-out-right"
                data-aos-duration="1000"
                href="#GetStarted"
                className="inline-flex text-white bg-blue-300 border-0 py-2 px-6 focus:outline-none herobutton font-bold rounded text-lg"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              data-aos="flip-up"
              data-aos-duration="1000"
              className="object-cover object-center rounded"
              alt="hero"
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
