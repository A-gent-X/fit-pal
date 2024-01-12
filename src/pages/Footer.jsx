import React from "react";
import "./Footer.css";
import { FaTwitch } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiRumble } from "react-icons/si";

const Footer = () => {
  return (
    <div className="icon-bar">

        
          <p>@ 2024 Xavier . ALL RIGHTS RESERVED</p>


      
          <p>DEVELOPED BY XAVIER</p>
  

        <FaTwitch />
        <FaInstagramSquare />
        <SiRumble />
        <FaXTwitter />
        <FaYoutube />
    
    </div>
  );
};

export default Footer;
