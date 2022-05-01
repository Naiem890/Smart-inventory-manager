import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const navMenu = [
    { linkText: "Home", linkRoute: "/" },
    { linkText: "Blog", linkRoute: "/blog" },
    { linkText: "About Me", linkRoute: "/about" },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="bg-white sticky top-0  border-gray-200 px-2 sm:px-4 py-3 rounded dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://flowbite.com" className="flex items-center">
            <img
              src="/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <div className="flex">
            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-4"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-4"
          >
            <ul className="flex flex-col mt-4 md:flex-row gap-2 md:mb-0 mb-4 ml-0 md:mr-4 md:mt-0 md:text-sm md:font-medium">
              {navMenu.map((navLink) => {
                return (
                  <li className="" key={navLink.linkText}>
                    <Link
                      to={navLink.linkRoute}
                      className=" delay-50 cursor-pointer transition-all ease-in block  py-2 px-4 hover:bg-blue-500 hover:text-white bg-blue-100 rounded md:bg-transparent md:text-base dark:text-white"
                      aria-current="page"
                    >
                      {navLink.linkText}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex gap-2 items-center">
              <Link
                type="button"
                to="/login"
                className="text-blue-600 border-2 border-blue-600 hover:text-white hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </Link>
              <Link
                type="button"
                to="/register"
                className="text-green-600 border-2 border-green-600 hover:text-white hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
