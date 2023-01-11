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

function DomainInfo(props) {
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
                    <h2>Healthcare</h2>
                    <p>Healthcare industry has vigorously boomed in the last couple of years. Considering the dependency, the patients are consumers of hospitals/clinics/pharmacies, to enhance or 
create a favourable and secure environment is essential. The accessibility is utmost importance as well the equipments must be user friendly. It should be engaging patients proactively, 
allowing them to express themselves for quality healthcare services. It is to improve the dynamics between producer and consumer and hence keeping it patient-centric.   


                    </p>
                </div>
            </div>
    )
}

export default DomainInfo