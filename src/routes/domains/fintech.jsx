import React,{useState} from 'react'
//importing the Link from recat router
import {Link, useNavigate} from "react-router-dom"

//importing logos
import ieee from "../../assets/images/logos/ieee-black.png"
//importing wie logo
import wieLogo from "../../assets/images/logos/WIELogo-removebg-preview.png"

//importing react icons
import {RxHamburgerMenu} from "react-icons/rx"
import {FaTimes} from "react-icons/fa"

//stylesheet
import "../../css/domains.css"

function Fintech() {
    const [showNavLinks, setshowNavLinks] = useState(false)
    return (
        <div className="domain-main-container">
                <div className="home-navabar-wrapper">
                            <div className="home-navabar-container">
                                <div className="home-wie-logo-container">
                                    <img src= {wieLogo} alt="" />
                                    <img src={ieee} alt="" />
                                </div>
                                <ul 
                                    
                                    className={showNavLinks?"mobile-navbar":''}>
                                    <li><Link to ="/"><p>Home</p></Link></li>
                                    <li><Link to="/registration"><p>Registration</p></Link></li>
                                    <li><Link to ="/contact"><p>Contact Us</p></Link></li>
                                    
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
                                        
                                    className={showNavLinks?"mobile-navbar":'display-none'}>
                                    <li><Link to ="/"><p>Home</p></Link></li>
                                    <li><Link to="/registration"><p>Registration</p></Link></li>
                                    <li><Link to ="/contact"><p>Contact Us</p></Link></li>
                                    
                                </ul>
                                <div className="home-hamburger">
                                    <button
                                        onClick={()=>setshowNavLinks(!showNavLinks)}
                                    >{showNavLinks?
                                        <FaTimes size={40} color="#fff"/>
                                    :
                                        
                                        <RxHamburgerMenu size={40} color="#fff"/>}
                                    </button>
                                </div>
                            </div>
                </div>
                <div className="domain-domain-content">
                    <h2>Fintech</h2>
                    <p>Fintech is a company/business that uses technology to automate, enhance or modify financial services for other consumers. The characteristic of a good fintech company which is 
consumer centric are designed to challenge, threat and eventually replace existing traditional financial services. Fintech products must make it easier for consumers to manage their
finances and consumers will build relationships with businesses that improve their efficiency. The product of a fintech should be built well enough to cater the prerequisites and 
necessities which is comprehensable and flexible.

                    </p>
                </div>
            </div>
    )
}

export default Fintech