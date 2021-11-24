import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-bg-gradient-to-r bg-white border-b border-gray-200">
      <div>
        <nav className="flex justify-between items-center shadow-lg md:p-3">
          <div className="p-1 sm:w-1/5">
            <div className="text-black text-center flex font-semibold font-sans p-3">
              <div className="p-3">
                <svg
                  className="text-black w-6 h-6 font-semibold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  ></path>
                </svg>
              </div>
              <Link href="/">
                <a>
                  <div className=" rounded-lg logo text-3xl font-light">
                    OYeah!!
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="dropdown cursor-pointer p-1 mr-2 flex items-center">
            <div className="">
              <span className="text-black text-sm font-semibold ml-1 hover:text-blue-400 duration-150 options">
                Options
              </span>
            </div>
            <div className="rounded-md shadow-sm flex">
              <button className="flex justify-center items-center h-3 w-4 overflow-hidden focus:outline-none">
                <div
                  id="Seta"
                  className=" inline-flex seta rounded-full text-gray-700 opacity-75 ml-1 p-2"
                >
                  <svg
                    className="h-6 w-6 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                      width="20px"
                    />
                  </svg>
                </div>
              </button>

              <ul className="dropdown-menu  absolute w-48 bg-blue-100 rounded-lg shadow-xl mt-5 -ml-48 hidden sm:mr-24 md:mr-32 lg:mr-48 xl:mr-64s">
                <li className="">
                  <Link href="#">
                    <a className="rounded-t text-gray-800 hover:bg-blue-300 hover:text-white duration-300 py-2  px-4 block whitespace-no-wrap">
                      Perfil
                    </a>
                  </Link>
                </li>
                <li className="">
                  <Link href="#">
                    <a className="text-gray-800 hover:bg-blue-300 hover:text-white duration-300 py-2 px-4 block whitespace-no-wrap">
                      Configuração
                    </a>
                  </Link>
                </li>
                <li className="">
                  <Link href="#">
                    <a className="rounded-b text-gray-800 hover:bg-blue-300 hover:text-white duration-300 py-2 px-4 block whitespace-no-wrap">
                      Sair
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
