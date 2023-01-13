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

function Environment() {
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
                    <h2>Environment</h2>
                    <p>
                        Environment is the surroundings or conditions in which the ecosystem operates. Excess consumerism in ones environment leads to increase in production of materials owing
                        to the increase in demand, which requires more natural resources to be exploited. All that sums up to destruction of the resources and once a natural resource is completely exhausted it is
                        nearly impossible to replenish the resource back. Hence there is a need to come up with sustainable solutions which take in consideration the needs of consumer on the other hand making
                        sure that resources of ones environment are not over-exploited.
                    </p>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Environment