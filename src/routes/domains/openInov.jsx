import React, { useState } from 'react'
//importing the Link from recat router
import { Link, useNavigate } from "react-router-dom"
import Footer from "../../components/Footer"

//importing logos
import ieee from "../../assets/images/logos/IEEE-WHITE.png"
//importing wie logo
import wieLogo from "../../assets/images/logos/WIELogo-removebg-preview.png"
import ieeeBlr from "../../assets/images/logos/ieee-blr.png"

//importing react icons
import { RxHamburgerMenu } from "react-icons/rx"
import { FaTimes } from "react-icons/fa"

//stylesheet
import "../../css/domains.css"

function OpenInov() {
    const [showNavLinks, setshowNavLinks] = useState(false)
    return (
        <>
            <div className="domain-main-container">
                <div className="home-navabar-wrapper">
                    <div className="home-navabar-container">
                        <div className="home-wie-logo-container">
                            <img src={ieee} className="img1" alt="" />
                            <img src={ieeeBlr} className="img1" alt="" />
                            <img src={wieLogo} className="img2" alt="" />
                        </div>
                        <ul

                            className={showNavLinks ? "mobile-navbar" : ''}>
                            <li><Link to="/"><p>Home</p></Link></li>
                            <li><Link to="/registration"><p>Registration</p></Link></li>
                            <li><Link to="/about"><p>About Us</p></Link></li>
                            <li><Link to="/contact"><p>Contact Us</p></Link></li>

                        </ul>
                        {/* <div className="home-hamburger">
                                <button
                                    onClick={()=>setshowNavLinks(true)}
                                >{showNavLinks?
                                    <FaTimes size={30} color="#fff"/>
                                :
                                    
                                    <RxHamburgerMenu size={30} color="#fff"/>}
                                </button>
                            </div> */}
                    </div>
                    <div className="mobile-nav-bar">
                        <ul

                            className={showNavLinks ? "mobile-navbar" : 'display-none'}>
                            <li><Link to="/"><p>Home</p></Link></li>
                            <li><Link to="/registration"><p>Registration</p></Link></li>
                            <li><Link to="/about"><p>About Us</p></Link></li>
                            <li><Link to="/contact"><p>Contact Us</p></Link></li>

                        </ul>
                        <div className="home-hamburger">
                            <button
                                onClick={() => setshowNavLinks(!showNavLinks)}
                            >{showNavLinks ?
                                <FaTimes size={40} color="#fff" />
                                :

                                <RxHamburgerMenu size={40} color="#fff" />}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="domain-domain-content">
                    <h2>Open Innovation</h2>
                    <p>There are a number of fields where the dynamics between a producer and consumer can be elementary therefore not causing complications. Sectors like banking, marketing,
                        agriculture and other services should be catered effectively for smooth operation and convention. Activities regarding the government generally require a lot of effort and is time
                        consuming, these can be rectified with proper interfaces and arrangements for communication and processing. Any sector that regards to tedious processes can be dealt with as every action
                        and activity in the country is a production or comsumption.

                    </p>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default OpenInov