"use client";

import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <nav className="bg-black fixed w-full z-20 top-0 start-0  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            
            <span className="self-center text-2xl text-white   whitespace-nowrap font-bold">
            ActiveCraft IT
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="  text-white bg-[#ec8223]  focus:ring-4 focus:outline-none focus:ring-blue-300  cursor-pointer font-medium rounded-full text-sm px-6 py-3 text-center leading-none  uppercase"
            >
              Contact
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-blac text-white">
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 rounded-sm md:p-0 uppercase ${activeItem === 'home' ? 'md:bg-transparent md:text-[#ec8223]' : 'text-white hover:text-[#ec8223]  '}`}
                  aria-current="page"
                  onClick={() => handleItemClick('myAccount')}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 rounded-sm md:p-0 uppercase ${activeItem === 'aboutUs' ? 'md:bg-transparent md:text-[#ec8223]' : 'text-white hover:text-[#ec8223]  '}`}
                  onClick={() => handleItemClick('travelAgents')}
                >
                  About Us
                </a>
              </li>
              <li>
                <ul className="flex flex-col md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black">
                  <li className="relative group">
                    <button
                      className={`block py-2 px-3 rounded-sm md:p-0 uppercase ${activeItem === 'services' ? 'md:bg-transparent md:text-[#ec8223]' : 'text-white hover:text-[#ec8223]  '}`}
                    >
                      Services
                    </button>
                    <ul className="absolute hidden group-hover:block shadow-sm w-44 bg-white border border-gray-100 rounded-lg mt-0">
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 uppercase"
                        >
                          Web Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 uppercase"
                        >
                          Mobile App Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 uppercase"
                        >
                          UI/UX Design
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 uppercase"
                        >
                          Digital Marketing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 uppercase"
                        >
                          E-commerce Solutions
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 rounded-sm md:p-0 uppercase ${activeItem === 'portfolio' ? 'md:bg-transparent md:text-[#ec8223]' : 'text-white hover:text-[#ec8223]  '}`}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 rounded-sm md:p-0 uppercase ${activeItem === ' blog' ? 'md:bg-transparent md:text-[#ec8223]' : 'text-white hover:text-[#ec8223]  '}`}
                >
                 Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
