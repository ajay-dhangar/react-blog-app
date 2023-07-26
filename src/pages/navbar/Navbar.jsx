import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

import './TogglerClick.css';
import './TogglerCancel.css';


function Navbar() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const toggleAside = () => {
    setIsAsideOpen((prev) => !prev);
  };

  return (
    <div>
      <div className='header'>
        <span className="roted">The</span>
        <span className='normal'>SIREN</span>
      </div>

      <div className={`aside ${isAsideOpen ? 'open' : ''}`}>
        <div className={`nav-toggler ${isAsideOpen ? 'active' : ''}`} onClick={toggleAside}>
          <span></span>
        </div>
        
        <nav className="navbar" id="navbar">
          <div className="container">
            <div className='' id="navbarResponsive">
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <Link to="/Home" className="nav-link"><i class="fa fa-home"></i> Home </Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link' to="/Bollywood"><i className="fa fa-user"></i> Bollywood </Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link' to="/Technology"><i className="fa fa-list"></i> Technologys </Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link' to="/Hollywood"><i className="fa fa-briefcase"></i> Hollywood </Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link' to="/Fitness"><i className="fa fa-comments"></i> Fitness </Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link' to="/Food"><i className="fa fa-comments"></i> Food </Link>
                </li>
              </ul>
            </div>            
          </div>          
        </nav>        
      </div>
      <hr className='nav-bottom-line' />
    </div>
  );
}

export default Navbar;
