import React from "react";
// import { Link } from "react-scroll";
import logo from "../assets/react.svg";
import Hamburger from "./Hamburger";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  function toggleNavbar() {
    setNavbarOpen((prevNavbarOpen) => !prevNavbarOpen);
  }

  return (
    <nav
      className={`max-h-nav-height fixed top-0 z-[100] w-[100%] bg-slate-100 p-5 shadow-lg md:flex md:items-center md:justify-between`}
    >
      <div className="flex content-center items-center justify-between">
        <span className="cursor-pointer font-[Poppins] text-2xl">
          <img className="inline h-10" src={logo} />
          <span className="ml-4">gabedos</span>
        </span>

        <span className="mx-2 block cursor-pointer text-3xl md:hidden">
          <Hamburger navbarOpen={navbarOpen} toggleNavbar={toggleNavbar} />
        </span>
      </div>

      <ul
        className={`${
          navbarOpen ? "top-nav-height opacity-100" : ""
        } absolute left-0 top-[-400px] z-[50] w-full bg-slate-100 p-0 text-center opacity-0 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:opacity-100`}
      >
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl duration-500 hover:text-cyan-500">
            Home
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl duration-500 hover:text-cyan-500">
            Portfolio
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl duration-500 hover:text-cyan-500">
            About
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl duration-500 hover:text-cyan-500">
            Skills
          </a>
        </li>

        <button className="border-blue-darkest hover:bg-blue-darkest bg-blue-darker mx-4 mb-6 rounded px-5 py-[0.33em] font-[Poppins] text-xl text-white transition duration-500 ease-in-out md:mb-0">
          Contact
        </button>
      </ul>
    </nav>
  );
}
