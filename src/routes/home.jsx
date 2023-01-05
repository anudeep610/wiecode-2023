import React from 'react'
//importing stylesheet
import "../css/Home.css"
import landingPageBg from "../assets/images/wie-code-landing-page-bg.jpg"

function Home() {
    return (
        <>
            <div className="home-main-container">
                <div className="home-landing-bg-container">
                    <div className="home-navabar-wrapper">
                        <div className="home-navabar-container">
                            <ul className='home-unodered-list'>
                                <li><p>Home</p></li>
                                <li><p>Registration</p></li>
                                <li><p>About Us</p></li>
                                <li><p>Contact Us</p></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Home