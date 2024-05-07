import React, { useState } from "react";
import logo1 from "../../public/logo_aiemB.png"
import logo from "../../public/aiem_assets/Balcom.png"
import {Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-[999] fixed w-full drop-shadow-lg">

<div className="overflow-hidden bg-[#139bcd]">
  <div className="animate-marquee w-full inline-block whitespace-nowrap">
    <span className="text-white font-custom1 w-full">Bulletin Aiem de Liaison et de Communication | Numéro 11 - Edition Du novembre 2022 à mars 2023 </span>
    
  </div>
  </div>
      
    <div className="navbar bg-white text-cyan-500  px-3 lg:px-60">
    <div className="flex-1">
      <Link to="/"><img src={logo1} className="w-40" alt="" /></Link><div className="m-3"></div>
      <Link to="/"><img src={logo} className="w-40" alt="" /></Link>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1 text-base font-custom1 font-medium">
        <li> <Link to="/">Accueil</Link></li>
        <li> <Link to="/team">équipe </Link></li>
        
       {/* <li><a href="https://www.aiem.ma/agenda/la-gestion-durable-de-l-eau-vers-un-modele-innovant-et-resilient-193" className="bg-[#139bcd] text-white hover:bg-[#189ac9] hover:text-white">S'INSCRIRE</a></li> */}
      </ul>
    </div>
  </div>
  </div>
    
  );
};

export default Navbar;
