import React from 'react'
//importing stylesheet
import "../css/Home.css"
//foteer  componet
import Footer from "../components/Footer"
//importing the Link from recat router
import {Link, useNavigate} from "react-router-dom"
import { TfiQuoteLeft } from "react-icons/tfi";

//importing wie logo
import wieLogo from "../assets/images/WIELogo-removebg-preview.png"
function Home() {
    const navigate = useNavigate()
    const handleRegetartionClick = async()=>{
        navigate("/registration")
    }
    return (
        <>
            <div className="home-main-container">
                <div className="home-landing-bg-container">
                    <div className="home-navabar-wrapper">
                        <div className="home-navabar-container">
                            <div className="home-wie-logo-container">
                                <img src= {wieLogo} alt="" />
                            </div>
                            <ul className='home-unodered-list'>
                                <li><Link to ="/"><p>Home</p></Link></li>
                                <li><Link to="/registration"><p>Registration</p></Link></li>
                                <li><Link to ="/contact"><p>Contact Us</p></Link></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="home-content-container">
                        <div className="home-content-col1">
                                
                            <div className="home-wiecode-text">
                                {/* <div class="content">
                                    <h2>WIE CODE</h2>
                                    <h2>WIE CODE</h2>
                                </div> */}
                                <h2>WI<span>E</span> CODE</h2>
                                
                                    
                                <h3>Crack the Hack</h3>
                                <div className="home-register-button-container">
                                    <button 
                                    onClick={handleRegetartionClick}
                                    className='button-49'>Register</button>
                                </div>
                                
                            </div>
                        </div>
                        <div className="home-content-col2">
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
                                <h2>Tumkuru</h2>
                            </div>
                            <div className="home-contant-row3">
                                <div><p>Venue</p></div>
                                <div><h3>SIT Tumkur</h3></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-hackathon-contents">
                    <div className="home-theme-container">
                        <h2>IDEA</h2>
                        <p>Come join us for a 12 hours hackathon <br />of brainstroming, inspiration,<br /> desiging solutions, coding on a <br /><span className='home-theme-span'>theme</span><span className='home-theme-name'> Consumer at Ease.</span></p>
                    </div>
                </div>
                <div className="home-domains-container">
                    <div class='card'>
                        <div class='info'>
                        <h1 class='title'>Healthcare</h1>
                        <p class='description'>Healthcare industry has vigorously boomed in the last couple of years. Considering the dependency, the patients are consumers of hospitals/clinics/pharmacies, to enhance or create a favourable and secure environment is essential  </p>
                        </div>
                    </div>
                    
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Home