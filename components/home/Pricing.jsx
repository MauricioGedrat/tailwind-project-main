import React from "react";
import Image from "next/image";
import Img1 from "../../assets/Images/pricing-free.png";
import Img2 from "../../assets/Images/pricing-starter.png";
import Img3 from "../../assets/Images/pricing-business.png";
import Img4 from "../../assets/Images/pricing-ultimate.png";

const Pricing = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-extrabold mb-10">Plans</h1>
      </div>
      <div className="flex justify-center items-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-flow-cols-3 lg:grid-cols-4">
          <div data-aos="flip-left" data-aos-duration="1000">
            <div className="text-center shadow-lg m-8 p-5 duration-300 plansCards">
              <h1 className=" font-semibold text-lg text-blue-400">
                Free plan
              </h1>
              <div>
                <Image src={Img1} />
              </div>
              <p className="mt-2 mb-5 text-gray-400 font-bold">
                -simple products
              </p>
            </div>
          </div>
          <div data-aos="flip-up" data-aos-duration="1000">
            <div className="text-center shadow-lg m-8 p-5 duration-300 plansCards">
              <h1 className="font-semibold text-lg text-blue-400">
                Starter plan
              </h1>

              <div>
                <Image src={Img2} />
              </div>
              <p className="mt-2 mb-5 text-gray-400 font-bold">
                -Basic products
              </p>
            </div>
          </div>
          <div data-aos="flip-down" data-aos-duration="1000">
            <div className="text-center shadow-lg m-8 p-5 duration-300 plansCards">
              <h1 className=" font-semibold text-lg text-blue-400">
                Business plan
              </h1>
              <div>
                <Image src={Img3} />
              </div>
              <p className="mt-2 mb-5 text-gray-400 font-bold">
                -Business products
              </p>
            </div>
          </div>
          <div data-aos="flip-right" data-aos-duration="1000">
            <div className="text-center shadow-lg m-8 p-5 duration-300 plansCards">
              <h1 className=" font-semibold text-lg text-blue-400">
                Ultimate plan
              </h1>
              <div>
                <Image src={Img4} />
              </div>
              <p className="mt-2 mb-5 text-gray-400 font-bold">-All products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
