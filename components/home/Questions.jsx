import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Collapse() {
  return (
    <div className="w-full px-4 pt-16 mb-10" data-aos="zoom-in-down">
      <div className="justify-center flex">
        <h1 className="text-4xl font-extrabold mb-10">
          Frequently Asked Questions to the Creator
        </h1>
      </div>
      <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <div data-aos="fade-right" data-aos-duration="1000">
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black bg-gray-100 itemsCollapse rounded-lg hover:bg-blue-300 hover:text-white duration-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span className=" text-lg">How old are you?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-black setaCollapse`}
                  />
                </Disclosure.Button>
              </div>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-500">
                At the moment 13 years old.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <div data-aos="fade-left" data-aos-duration="1000">
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black bg-gray-100 itemsCollapse rounded-lg hover:bg-blue-300 hover:text-white duration-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span className=" text-lg">
                    How old were you when you started programming?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-black setaCollapse`}
                  />
                </Disclosure.Button>
              </div>
              <Disclosure.Panel className="px-4 pt-4 pb-2  text-md text-gray-500">
                I started programming when I was 12 years old.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <div data-aos="fade-right" data-aos-duration="1000">
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black bg-gray-100 itemsCollapse rounded-lg hover:bg-blue-300 hover:text-white duration-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span className=" text-lg">
                    Are you a Fullstack developer?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-black setaCollapse`}
                  />
                </Disclosure.Button>
              </div>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-500">
                No, I only work in the Frontend area for now.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <div data-aos="fade-left" data-aos-duration="1000">
                {" "}
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black bg-gray-100 itemsCollapse rounded-lg hover:bg-blue-300 hover:text-white duration-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span className=" text-lg">
                    Do you offer technical support?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 textack setaCollapse`}
                  />
                </Disclosure.Button>
              </div>
              <Disclosure.Panel className="px-4 pt-4 pb-2  text-md text-gray-500">
                I do not offer technical support.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <div data-aos="fade-right" data-aos-duration="1000">
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black bg-gray-100 itemsCollapse rounded-lg hover:bg-blue-300 hover:text-white duration-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span className=" text-lg">
                    What is your biggest specialty?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-black setaCollapse `}
                  />
                </Disclosure.Button>
              </div>
              <Disclosure.Panel className="px-4 pt-4 pb-2  text-md text-gray-500">
                My biggest specialties are: Next.js and CSS.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
