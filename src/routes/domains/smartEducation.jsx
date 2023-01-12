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
function SmartEducation() {
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
                    <h2>Smart Education</h2>
                    <p>The country is developing but the literacy rate has to improve on a vast scale as well. Education is available but the quality is not up to the mark, it is not reaching every
nook and corner of the country. The consumers refer to the students and their families, the interfaces or communication between the institutes and the guardians must be trouble free.  
Privatization has affected the system as well. Geographical boundaries should also be considered for accessibility and availability.



                    </p>
                </div>
            </div>
    )
}

export default SmartEducation