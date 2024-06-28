import React, { useState } from "react";
import logo1 from "../../public/logo_aiemB.png";
import logo from "../../public/aiem_assets/Balcom.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="z-[999] fixed w-full drop-shadow-lg">
      <div className="overflow-hidden bg-[#139bcd]">
        <div className="animate-marquee w-full inline-block whitespace-nowrap">
          <span className="text-white font-custom1 w-full">Bulletin Aiem de Liaison et de Communication | Numéro 11 - Edition Du novembre 2022 à mars 2023 </span>
        </div>
      </div>
      
      <div className="navbar bg-white text-cyan-500 px-3 lg:px-60">
        <div className="flex-1">
          <Link to="/"><img src={logo1} className="w-40" alt="Logo 1" /></Link>
          <div className="m-3"></div>
          <Link to="/"><img src={logo} className="w-40" alt="Logo 2" /></Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-base font-custom1 font-medium">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/team">équipe</Link></li>
            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="inline-flex items-center justify-center w-full rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                edition
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="absolute right-0 mt-10 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
                  <li>
                    <Link to="/edition13" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Article 1</Link>
                  </li>
                  <li>
                    <Link to="/edition13" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Article 2</Link>
                  </li>
                  <li>
                    <Link to="/edition13" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Article 3</Link>
                  </li>
                </ul>
              )}
            </li>
            {/* <li><a href="https://www.aiem.ma/agenda/la-gestion-durable-de-l-eau-vers-un-modele-innovant-et-resilient-193" className="bg-[#139bcd] text-white hover:bg-[#189ac9] hover:text-white">S'INSCRIRE</a></li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
