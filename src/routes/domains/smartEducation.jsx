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
function SmartEducation() {
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
                    <h2>Smart Education</h2>
                    <p>The country is developing but the literacy rate has to improve on a vast scale as well. Education is available but the quality is not up to the mark, it is not reaching every
                        nook and corner of the country. The consumers refer to the students and their families, the interfaces or communication between the institutes and the guardians must be trouble free.
                        Privatization has affected the system as well. Geographical boundaries should also be considered for accessibility and availability.
                    </p>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default SmartEducation