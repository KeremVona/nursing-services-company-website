import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Sawera.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
      <div className="flex-1 flex justify-between items-center">
        <Link
          to="/nursing-services-company-website"
          className="text-xl font-semibold text-gray-900 flex"
        >
          <img src={Logo} alt="" className="max-h-15" />{" "}
          <span className="mt-4 ml-2">Sawera Nursing Services</span>
        </Link>
        {/* Mobile menu toggle button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden block"
        >
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 20 20"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex md:items-center md:w-auto w-full`}
      >
        <nav>
          <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <li>
              <Link
                to="/nursing-services-company-website/about-us"
                className="md:p-4 py-3 px-0 block"
                href="#about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/nursing-services-company-website/services"
                className="md:p-4 py-3 px-0 block"
                href="#services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/nursing-services-company-website/careers"
                className="md:p-4 py-3 px-0 block"
                href="#careers"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/nursing-services-company-website/contact"
                className="md:p-4 py-3 px-0 block"
                href="#contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
