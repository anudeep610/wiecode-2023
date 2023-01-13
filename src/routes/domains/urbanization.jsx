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

function Urbanization() {
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
                    <h2>Urbanization</h2>
                    <p>The booming of industries, infrastructures and smart city layouts has affected every field of the society today. Not just physical developments but smarter ways of carrying
                        out activities or customs, practices and policies. The objective of urbanisation is to lead a easier life, this as a concern should be considered for every section of the society and
                        should not majorly and negatively affect the present scenario of the country. The consumers should find it the improvements confusion free and simple to inculcate into their daily lives.
                    </p>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Urbanization