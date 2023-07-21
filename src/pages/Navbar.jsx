import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [state, setstate] = useState(true);

  const handleNavToggler = () => {
    setstate(!state);
  };

  return (
    <div>
      <header>
        <h1>
          <span className="roted">The</span>
          <span className='normal'>SIREN</span>
        </h1>
      </header>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark py-lg-4" id="mainNav">
        <div className="container">
          <Link className="navbar-brand text-uppercase d-lg-none text-expanded" to={'#'}>
            React Blog App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded={!state}
            aria-label="Toggle navigation"
            onClick={handleNavToggler}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${state ? 'collapse' : ''} navbar-collapse`} id="navbarResponsive">
            <ul className="navbar-nav mx-auto">
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
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
