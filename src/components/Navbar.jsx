import React from "react";
// import { Link } from "react-scroll";
import logo from '../assets/react.svg'
import Hamburger from "./Hamburger";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  function toggleNavbar() {
    setNavbarOpen(prevNavbarOpen => !prevNavbarOpen);
    console.log("toggled")
  }

  console.log("re-rendering")

  return (
    <nav className="z-[100] p-5 bg-white shadow md:flex md:items-center md:justify-between max-h-[80px]">

      <div className="flex justify-between items-center content-center">
        <span className="text-2xl font-[Poppins] cursor-pointer">
          <img className="h-10 inline"
            src={logo} />
          <span className="ml-4">gabedos</span>
        </span>

        <span className="text-3xl cursor-pointer mx-2 md:hidden block">
          <Hamburger navbarOpen={navbarOpen} toggleNavbar={toggleNavbar} />
        </span>
      </div>

      <ul className={`${navbarOpen ? "top-[80px] opacity-100" : ""} text-center md:flex md:items-center z-[50] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto p-0 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500`}>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-cyan-500 duration-500">Home</a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-cyan-500 duration-500">Portfolio</a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-cyan-500 duration-500">About</a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-cyan-500 duration-500">Skills</a>
        </li>

        <button className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 md:mb-0 mb-6 hover:bg-cyan-500 rounded transition-none">
          Contact
        </button>
      </ul>

    </nav>
  )
}
