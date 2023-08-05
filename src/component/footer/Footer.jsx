import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div>
            <footer>
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>
                <ul className="social_icon">
                    <li><Link to="https://github.com/Ajay-Dhangar"><ion-icon name="logo-github"></ion-icon></Link></li>
                    <li><Link to="https://twitter.com/AJAYDHA27250016"><ion-icon name="logo-twitter"></ion-icon></Link></li>
                    <li><Link to="https://www.linkedin.com/in/ajay-dhangar/"><ion-icon name="logo-linkedin"></ion-icon></Link></li>
                    <li><Link to="https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw"><ion-icon name="logo-youtube"></ion-icon></Link></li>
                </ul>

                {/* <ul className="menu">
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Services</Link></li>
                    <li><Link to="#">Team</Link></li>
                    <li><Link to="#">Contact</Link></li>
                </ul> */}
                <p>&copy; 2023 Ajay Dhangar | All Rights Reserved</p>
            </footer>            
        </div>
    )
}

export default Footer
