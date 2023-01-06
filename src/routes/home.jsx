import React from 'react'
//importing stylesheet
import "../css/Home.css"
//importing the Link from recat router
import {Link} from "react-router-dom"
import { AiOutlineArrowDown } from "react-icons/ai";

//importing wie logo
import wieLogo from "../assets/images/WIELogo-removebg-preview.png"
function Home() {
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
                                <li><p>Home</p></li>
                                <li><p>Registration</p></li>
                                <li><p>About Us</p></li>
                                <li><p>Contact Us</p></li>
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
                                    <button className='button-49'>Register</button>
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
                                <h2>Tumkuru</h2>
                            </div>
                            <div className="home-contant-row3">
                                <div><p>Venue</p></div>
                                <div><h3>Siddaganga Institute of Technology</h3></div>
                            </div>
                        </div> */}
                    </div>
                    <div className="home-scroll-down-container">
                        <AiOutlineArrowDown/>
                    </div>
                </div>
                <div className="home-hackathon-contents">

                </div>
            </div>
        </>
    )
}

export default Home