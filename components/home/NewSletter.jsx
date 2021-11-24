import React from "react";

const NewSletter = () => {
  return (
    <div className="mt-20 mb-10 border-b-2 border-t-2 border-gray-200 py-10 bg-gray-100">
      <div className="text-center">
        <div className="flex justify-center items-center">
          <div>
            <h1 className="text-4xl text-blue-900 font-bold mb-10 p-5">
              Our Newsletter
            </h1>
            <section className=" dark:bg-gray-800">
              <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
                <input
                  id="email"
                  type="text"
                  className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  placeholder="Email Address"
                />

                <button className="flex text-white bg-blue-300 border-0 py-2 px-6 focus:outline-none herobutton font-bold rounded text-md text-center justify-center w-32 mx-auto">
                  <p> Subscribe</p>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSletter;
