import React,{useState} from 'react'
//importing stylesheet
import "../css/Home.css"
//foteer  componet
import Footer from "../components/Footer"

//importing react icons
import {RxHamburgerMenu} from "react-icons/rx"
import {FaTimes} from "react-icons/fa"
//importing the Link from recat router
import {Link, useNavigate} from "react-router-dom"
//domains images
import innovation from "../assets/images/doamins/Innovation _Outline.svg"
import healthCare from "../assets/images/doamins/Health _Outline.svg"
import education from "../assets/images/doamins/Knowledge _Outline.svg"
import urban from "../assets/images/doamins/New York City _Outline.svg"
import ecomerce from "../assets/images/doamins/Online shopping _Outline.svg"
import fintech from "../assets/images/doamins/Revenue _Outline (1).svg"

//importing logos
import ieee from "../assets/images/ieee-black.png"
//importing wie logo
import wieLogo from "../assets/images/logos/WIELogo-removebg-preview.png"
function Home() {
    const navigate = useNavigate()
    const handleRegetartionClick = async()=>{
        navigate("/registration")
    }
    const [showNavLinks, setshowNavLinks] = useState(false)
    const handleHealthCare = async()=>{
        navigate("/health-care-domain")
    }
    const handleEducation = async()=>{
        navigate("/smart-edu-domain");
    }
    const handleUrban = async()=>{
        navigate("/urbanization-domain");
    }
    const handleFintech = async()=>{
        navigate("/fintech-domain");
    }
    const handleEcomerce = async()=>{
        navigate("/ecomerce-domain");
    }
    const handleOpenInov = async()=>{
        navigate("/ecomerce-domain");
    }
    return (
        <>
            <div className="home-main-container">
                <div className="home-landing-bg-container">
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
                    <div className="home-content-container">
                        <div className="home-content-col1">
                                
                            <div className="home-wiecode-text">
                                {/* <div class="content">
                                    <h2>WIE CODE</h2>
                                    <h2>WIE CODE</h2>
                                </div> */}
                                <div>
                                    <h2>WI<span>E</span> CODE</h2>
                                    <h3>Crack the Hack</h3>
                                </div>
                                
                                <div className="home-register-button-container">
                                    <button 
                                    onClick={handleRegetartionClick}
                                    className='button-49'>Register</button>
                                </div>
                                
                            </div>
                        </div>
                        {/* <div className="home-content-col2">
                            <div className="home-contant-row1">
                                <div className="home-content-r1c1">
                                    <div><p>January</p></div>
                                    <div><h2>21</h2></div>
                                </div>
                                <div className="home-content-r1c2">
                                    <div><p>Year</p></div>
                                    <div><h2>2023</h2></div>
                                </div>
                            </div>
                            <div className="home-contant-row2">
                                <h2>Tumakuru</h2>
                            </div>
                            <div className="home-contant-row3">
                                <div><p>Venue</p></div>
                                <div><h3>SIT Tumakuru</h3></div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="home-hackathon-contents">
                    <div className="home-theme-container">
                        <h2>IDEA</h2>
                        <p>Come join us for a 12 hours hackathon <br />of brainstroming, inspiration,<br /> desinging solutions, coding on a <br /><span className='home-theme-span'>Theme</span><span className='home-theme-name'> Consumer at Ease.</span></p>
                    </div>
                    <div className="home-domains-container">
                        <div className="home-domains-heading">
                            <h2>DOMAINS</h2>
                        </div>
                        <div 
                            
                            className="home-domain-cards-container">
                            <div 
                                onClick={handleHealthCare}
                                className="home-domain-card">
                                <div className="domian-image">
                                    <img src={healthCare} alt="" />
                                </div>
                                <div className="domain-content">
                                    <h2>Healthcare</h2>
                                    {/* <p>Healthcare industry has vigorously boomed in the last couple of years. Considering the dependency, the patients are consumers of hospitals/clinics/pharmacies, to enhance or 
                                        create a favourable and secure environment is essential.</p> */}
                                </div>
                            </div>
                            <div 
                                onClick={handleEducation}
                                className="home-domain-card">
                                <div className="domian-image">
                                    <img src={education} alt="" />
                                </div>
                                <div className="domain-content">
                                    <h2>Smart Education</h2>
                                    {/* <p>The country is developing but the literacy rate has to improve on a vast scale as well. Education is available but the quality is not up to the mark, it is not reaching every nook and corner of the country.</p> */}
                                </div>
                            </div>
                            <div 
                                onClick={handleUrban}
                                className="home-domain-card">
                                <div className="domian-image">
                                    <img src={urban} alt="" />
                                </div>
                                <div className="domain-content">
                                    <h2>Urbanization</h2>
                                    {/* <p>The booming of industries, infrastructures and smart city layouts has affected every field of the society today. Not just physical developments but smarter ways of carrying
out activities or customs, practices and policies.</p> */}
                                </div>
                            </div>
                            <div 
                                onClick={handleEcomerce}
                                className="home-domain-card">
                                <div className="domian-image">
                                    <img src={ecomerce} alt="" />
                                </div>
                                <div className="domain-content">
                                    <h2>E-commerce</h2>
                                    {/* <p>E commerce is a basic exchange of goods, services over the internet. It consists of various forms b2b ,b2c or c2c e-commerce. This has been a booming industry as urbanisation kept on improving.</p> */}
                                </div>
                            </div>
                            <div
                                onClick={handleFintech}
                                className="home-domain-card">
                                <div className="domian-image">
                                    <img src={fintech} alt="" />
                                </div>
                                <div className="domain-content">
                                    <h2>Fintech</h2>
                                    {/* <p>Fintech is a company/business that uses technology to automate, enhance or modify financial services for other consumers.</p> */}
                                </div>
                            </div>
                            <div 
                                onClick={handleOpenInov}
                                className="home-domain-card">
                                <div className="domian-image">
                                    <img src={innovation} alt="" />
                                </div>
                                <div className="domain-content">
                                    <h2>Open Innovation</h2>
                                    {/* <p>There are a number of fields where the dynamics between a producer and consumer can be elementary therefore not causing complications.</p> */}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                <Footer/>
            </div>
        </>
    )
}

export default Home