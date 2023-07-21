import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  

  return (
    <div>
      <div className='header'>        
          <span className="roted">The</span>
          <span className='normal'>SIREN</span>
      </div>
      <nav className="navbar" id="navbar">
        <div className="container">

          {/* <Link className="" to={'#'}>
            React Blog App
          </Link> */}

          {/* <button onClick={handleNavToggler}>
            <span className="navbar-toggler-icon"></span>
          </button> */}

          <div className='' id="navbarResponsive">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={'/Home'}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/Bollywood'}>
                  Bollywood
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/Technology'}>
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/Hollywood'}>
                  Hollywood
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/Fitness'}>
                  Fitness
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/Food'}>
                  Food
                </Link>
              </li>
            </ul>
          </div>
          <hr className='nav-bottom-line' />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
