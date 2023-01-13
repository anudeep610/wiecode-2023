import React, { useState } from 'react'
//importing stylesheet
import "../css/Home.css"
//foteer  componet
import Footer from "../components/Footer"

//importing react icons
import { RxHamburgerMenu } from "react-icons/rx"
import { FaTimes } from "react-icons/fa"
//importing the Link from recat router
import { Link, useNavigate } from "react-router-dom"
//domains images
import innovation from "../assets/images/doamins/Innovation _Outline.svg"
import healthCare from "../assets/images/doamins/Health _Outline.svg"
import education from "../assets/images/doamins/Knowledge _Outline.svg"
import urban from "../assets/images/doamins/New York City _Outline.svg"
import ecomerce from "../assets/images/doamins/Online shopping _Outline.svg"
import fintech from "../assets/images/doamins/Revenue _Outline (1).svg"
import agri from "../assets/images/doamins/grain-rice-icon.svg";
import environment from "../assets/images/doamins/trees-icon.svg"
import nandini from "../assets/images/nandni.png";
import csi from "../assets/images/csilogo.png";
import first from "../assets/images/1st-prize-icon.svg";
import second from "../assets/images/2nd-prize-icon.svg";
import idea from "../assets/images/idea-svgrepo-com2.svg";
import women from "../assets/images/gold-medal-svgrepo-com.svg"

//importing logos
import ieee from "../assets/images/logos/IEEE-WHITE.png"
import ieeeBlr from "../assets/images/logos/ieee-blr.png"
//importing wie logo
import wieLogo from "../assets/images/logos/WIELogo-removebg-preview.png"
function Home() {
    const navigate = useNavigate()
    const handleRegetartionClick = async () => {
        navigate("/registration")
    }
    const [showNavLinks, setshowNavLinks] = useState(false)
    const handleHealthCare = async () => {
        navigate("/health-care-domain")
    }
    const handleEducation = async () => {
        navigate("/smart-edu-domain");
    }
    const handleUrban = async () => {
        navigate("/urbanization-domain");
    }
    const handleFintech = async () => {
        navigate("/fintech-domain");
    }
    const handleEcomerce = async () => {
        navigate("/ecomerce-domain");
    }
    const handleOpenInov = async () => {
        navigate("/open-inov-domain");
    }
    const handleEnv = async () => {
        navigate("/environment-domain");
    }
    const handleAgri = async () => {
        navigate("/agriculture-domain");
    }
    return (
        <div className='full-page-container'>
            <div className="home-main-container">
                <div className="home-landing-bg-container">
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
                                <li><Link to="/about"><p>About Us</p></Link></li>
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
                                <li><Link to="/about"><p>About Us</p></Link></li>
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
                    </div>
                </div>
                <div className="home-hackathon-contents">
                    <div className="theme-container-box">
                        <div className="home-theme-container">
                            <h2>IDEA</h2>
                            <p>Come join us for a 12 hours hackathon <br />of brainstroming, inspiration,<br /> designing solutions, coding on a <br /><span className='home-theme-span'>Theme</span><span className='home-theme-name'> Consumer at Ease.</span></p>
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
                                <h2>8:00 AM - 8:00 PM</h2>
                            </div>
                            <div className="home-contant-row3">
                                <div><p>Venue</p></div>
                                {/* <div><p>(click for location details)</p></div> */}
                                <div><h3> <a href="https://goo.gl/maps/wCixTh9uMtYdn8tb8" target="_blank"> SIT Tumakuru </a> </h3></div>
                            </div>
                        </div>
                    </div>
                    <div className="prizes-container">
                        <div className="prizes-box">
                            <div className="prize-image">
                                <img src={idea} className="icon" alt="" />
                            </div>
                            <div className="second-container">
                                <div className="prize-category">
                                    <h3 className='prize-category-text'> BEST IDEA</h3>
                                </div>
                                <div className="prize-amount">
                                    <h3 className='prize-amount-text'> 5000/- </h3>
                                </div>
                            </div>
                        </div>

                        <div className="prizes-box">
                            <div className="prize-image">
                                <img src={first} alt="" />
                            </div>
                            <div className="second-container">
                                <div className="prize-category">
                                    <h3 className='prize-category-text'> FIRST PLACE</h3>
                                </div>
                                <div className="prize-amount">
                                    <h3 className='prize-amount-text'> 15000/- </h3>
                                </div>
                            </div>
                        </div>

                        <div className="prizes-box">
                            <div className="prize-image">
                                <img src={second} alt="" />
                            </div>
                            <div className="second-container">
                                <div className="prize-category">
                                    <h3 className='prize-category-text'> SECOND PLACE</h3>
                                </div>
                                <div className="prize-amount">
                                    <h3 className='prize-amount-text'> 10000/- </h3>
                                </div>
                            </div>
                        </div>

                        <div className="prizes-box">
                            <div className="prize-image">
                                <img src={women} className="icon" alt="" />
                            </div>
                            <div className="second-container">
                                <div className="prize-category">
                                    <h3 className='prize-category-text'> WOMEN TEAM</h3>
                                </div>
                                <div className="prize-amount">
                                    <h3 className='prize-amount-text'> 5000/- </h3>
                                </div>
                            </div>
                        </div>
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
                                onClick={handleEnv}
                                className="home-domain-card">
                                <div className="domian-image">
                                    <img src={environment} style={{ width: "75%" }} alt="" />
                                </div>
                                <div className="domain-content">
                                    <h2>Environment</h2>
                                    {/* <p>There are a number of fields where the dynamics between a producer and consumer can be elementary therefore not causing complications.</p> */}
                                </div>
                            </div>
                            <div
                                onClick={handleAgri}
                                className="home-domain-card">
                                <div className="domian-image">
                                    <img src={agri} style={{ width: "75%" }} alt="" />
                                </div>
                                <div className="domain-content">
                                    <h2>Agriculture</h2>
                                    {/* <p>There are a number of fields where the dynamics between a producer and consumer can be elementary therefore not causing complications.</p> */}
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
                <div className="home-rules-container">
                    <div className="rules-container">
                        <h2 className='heading'>RULES & REGULATIONS</h2>
                        <div className="rules-box">
                            <ul className='rules-box-list'>
                                <li className='rule'> The hackathon is of 12 hours.</li>
                                <li className='rule'> Online registrations will be closed on 15th January 2023. </li>
                                <li className='rule'> Team should either have 2 members (all girls team), 3 (min 1 girl in the team) or 4 members (min 2 girls in the team).</li>
                                <li className='rule'> Each member should provide their details at the time of registration. </li>
                                <li className='rule'> An abstract in the format specified ( https://bit.ly/3CNPi9b ) should be submitted by the team. </li>
                                <li className='rule'> A team is allowed to submit solutions to multiple problems; however, a team if
                                    selected will be selected for the one best solution out of the all solutions they have
                                    proposed. </li>
                                <li className='rule'> A mentor from renowned industries will be allotted to each team who will guide them
                                    throughout the competition. </li>
                                <li className='rule'> Teams must present their ideas to respective mentors at 3 check points and progress will be evaluated based on judging criteria.
                                </li>
                                <li className='rule'> Every team must disclose their team name as well as team leader’s name (girl team
                                    leader) at the time of registration. No hardware kit will be provided.
                                </li>
                                <li className='rule'> There will be a limit on the number of entries accepted for each problem statement.</li>
                                <li className='rule'> We would consider the first 6 entries for each problem statements for the first round
                                    of screening. The WiE Code will begin on 21st January 2023 8:00 AM and will end at
                                    21st January 2023 8:00 PM. Internet facility will be provided for 12 hours.
                                </li>
                                <li className='rule'> Reporting time will be 7:00 am. </li>
                                <li className='rule'> All communication will be sent to your primary email submitted at the time of
                                    registration. Certificate for participation will be provided to all participants.
                                </li>
                                <li className='rule'> Clearly specify the email ids and mobile numbers of all team members.</li>
                                <li className='rule'> You are expected to come up with innovative ideas. Any idea that has been copied
                                    from somewhere will be disqualified.
                                </li>
                                <li className='rule'> Only 40% of pre-cooked code is permissible.</li>
                                <li className='rule'> Lunch and snacks facility will be provided.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="sponsorship-container-box">
                        <div className="sponsership-heading">
                            <h2>SPONSORED BY</h2>
                        </div>
                        <div className="sponsership-box">
                            <div className="image-box">
                                <img classname="logo" src={nandini} alt="nandini" />
                            </div>
                            <div className="image-box">
                                <img classname="logo" src={csi} alt="csi" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Home