import React from "react";
import Image from "next/image";
import Img1 from "../../assets/Images/team-1.jpg";
import Img2 from "../../assets/Images/team-2.jpg";
import Img3 from "../../assets/Images/team-3.jpg";
import Img4 from "../../assets/Images/team-4.jpg";

const Team = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-extrabold mb-10">Team</h1>
      </div>
      <div className="flex justify-center items-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-flow-cols-3 lg:grid-cols-4">
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <div className="text-center shadow-lg m-8  duration-300 teamCards">
              <div>
                <Image
                  className="overflow-hidden rounded-t-lg ImgTeam"
                  src={Img1}
                />
              </div>
              <h1 className=" font-semibold text-xl text-blue-900">
                Steve Warinton
              </h1>
              <p className="mt-2 mb-5 text-gray-400 font-bold pb-5">
                Chief Executive Officer
              </p>
            </div>
          </div>
          <div data-aos="zoom-in-down" data-aos-duration="1000">
            <div className="text-center shadow-lg m-8  duration-300 teamCards">
              <div>
                <Image
                  className="overflow-hidden rounded-t-lg ImgTeam"
                  src={Img2}
                />
              </div>
              <h1 className="font-semibold text-xl text-blue-900">
                Sara Connor
              </h1>
              <p className="mt-2 mb-5 text-gray-400 font-bold pb-5">
                Product Manager
              </p>
            </div>
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <div className="text-center shadow-lg m-8  duration-300 teamCards">
              <div>
                <Image
                  className="overflow-hidden rounded-t-lg ImgTeam"
                  src={Img3}
                />
              </div>
              <h1 className=" font-semibold text-xl text-blue-900">
                Ryan Dylan
              </h1>
              <p className="mt-2 mb-5 text-gray-400 font-bold pb-5">CTO</p>
            </div>
          </div>
          <div data-aos="zoom-in-down" data-aos-duration="1000">
            <div className="text-center shadow-lg m-8  duration-300 teamCards">
              <div>
                <Image
                  className="overflow-hidden rounded-t-lg ImgTeam"
                  src={Img4}
                />
              </div>
              <h1 className=" font-semibold text-xl text-blue-900">
                Bia Raleway
              </h1>
              <p className="mt-2 mb-5 text-gray-400 font-bold pb-5">
                Accountant
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
