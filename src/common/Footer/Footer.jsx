//rafce
import React from "react";
import './Footer.css'

const Footer = () => {
  var Link = require('react-router-dom').Link
  return (  
    <footer>
      <div className="wrapper">
        <nav>
          <ul>
            <li><Link to="/">Duel</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;