import React from "react";
import AppBootstrap from "../Svgs/Bootstrap";
import AppChakra from "../Svgs/Chakra";
import AppJavaScript from "../Svgs/JavaScript";
import AppNext from "../Svgs/Next";
import AppReact from "../Svgs/React";
import AppTailwind from "../Svgs/Tailwind";

const SecondaryCard = () => {
  return (
    <div className=" mt-10">
      <div className="flex justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold">Services</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-10">
          <div data-aos="fade-down-right" data-aos-duration="1000">
            <a
              href="https://nextjs.org/"
              className="font-bold flex items-center justify-center svgSimbols p-20 shadow-lg m-10 border-b-2 text-2xl border-blue-500 rounded-md hover:text-white hover:bg-blue-500 duration-200 secondary1"
            >
              <div>
                <div className="ml-2">
                  <AppNext />
                </div>
                <h1 className="mt-5 m-auto">Next.js</h1>
              </div>
            </a>
          </div>
          <div data-aos="fade-down" data-aos-duration="1000">
            <a
              href="https://tailwindcss.com/"
              className="font-bold flex items-center justify-center svgSimbols p-20 shadow-lg m-10 border-b-2 text-2xl border-yellow-500 rounded-md hover:text-white hover:bg-yellow-500 duration-200 secondary2"
            >
              <div>
                <div className="ml-4">
                  <AppTailwind />
                </div>
                <h1 className="mt-5">Tailwind </h1>
              </div>
            </a>
          </div>
          <div data-aos="fade-down-left" data-aos-duration="1000">
            <a
              href="https://pt-br.reactjs.org/"
              className="font-bold flex items-center justify-center svgSimbols p-20 shadow-lg m-10 border-b-2 text-2xl border-pink-500 rounded-md hover:text-white hover:bg-pink-500  duration-200 secondary1"
            >
              <div>
                <div className="ml-2">
                  <AppReact />
                </div>
                <h1 className="mt-5">React.js </h1>
              </div>
            </a>
          </div>
          <div data-aos="fade-up-right" data-aos-duration="1000">
            <a
              href="https://www.javascript.com/"
              className="font-bold flex items-center justify-center svgSimbols p-20 shadow-lg m-10 border-b-2 text-2xl border-green-500 rounded-md hover:text-white hover:bg-green-500 duration-200 secondary2"
            >
              <div>
                <div className="ml-6">
                  <AppJavaScript />
                </div>
                <h1 className="mt-5">JavaScript </h1>
              </div>
            </a>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <a
              href="https://chakra-ui.com/"
              className="font-bold flex items-center justify-center svgSimbols p-20 shadow-lg m-10 border-b-2 text-2xl border-red-500 rounded-md hover:text-white hover:bg-red-500 duration-200 secondary1"
            >
              <div>
                <div className="ml-6">
                  <AppChakra />
                </div>
                <h1 className="mt-5">Chakra UI </h1>
              </div>
            </a>
          </div>
          <div data-aos="fade-up-left" data-aos-duration="1000">
            <a
              href="https://getbootstrap.com/"
              className="font-bold flex items-center justify-center svgSimbols p-20 shadow-lg m-10 border-b-2 text-2xl border-purple-500 rounded-md hover:text-white hover:bg-purple-500 duration-200 secondary2"
            >
              <div>
                <div className="ml-6">
                  <AppBootstrap />
                </div>
                <h1 className="mt-5">Bootstrap </h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryCard;
