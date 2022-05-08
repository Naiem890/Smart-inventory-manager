import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerMenu = [
    { linkText: "Home", linkRoute: "/" },
    { linkText: "Blog", linkRoute: "/blog" },
  ];

  return (
    <div className="mt-10">
      <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
        <div className="sm:flex sm:items-center sm:justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center mb-4 sm:mb-0">
            {/* <img
              src="/docs/images/logo.svg"
              className="mr-3 h-8"
              alt="Flowbite Logo"
            /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <span className="bg-green-500 px-2 py-1 rounded-md text-white">
                S
              </span>{" "}
              Inventory
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            {footerMenu.map((footerLink) => {
              return (
                <li>
                  <a
                    href={footerLink.linkRoute}
                    className="mr-4 hover:underline md:mr-6 "
                  >
                    {footerLink.linkText}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://flowbite.com" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
