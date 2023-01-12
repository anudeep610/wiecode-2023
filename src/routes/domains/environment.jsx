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

function Environment() {
    const [showNavLinks, setshowNavLinks] = useState(false)
    return (
        <> 
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
                    <h2>Environment</h2>
                    <p>E commerce is a basic exchange of goods, services over the internet. It consists of various forms b2b ,b2c or c2c e-commerce. This has been a booming industry as urbanisation
                        kept on improving. It is essential for the services to look out for the convenience of their consumers. It is to make sure that consumers can efficiently access the platform, perform their 
                        purchase and be confident enough about the security and reliability of the platform. Any discrepencies whatsoever should be tackled smoothly and effectively.
                    </p>
                </div>
            </div>
            
        </>
    )
}

export default Environment