import React from 'react';
import { AiFillInstagram, AiOutlineCopyrightCircle, AiOutlineYoutube, AiFillLinkedin} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import "../css/Footer.css";


export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer-main-container">
                <div className="copyright-container">
                    <div className="icons-container">
                        <span className="icon-logo">
                            <AiOutlineCopyrightCircle className='icon' />
                        </span>
                    </div>
                    <div className="copyright-text">
                        IEEE SIT SB 2023
                    </div>
                </div>
                <div className="social-container">
                <div className="icons-container">
                        <span className="icon-logo">
                            <a href="https://www.instagram.com/ieeesitsb/?hl=en" target="_blank">
                                <AiFillInstagram className='icon'/>
                            </a>
                        </span>

                        <span className="icon-logo">
                            <a href="https://youtube.com/@tech-nomadsieeesitsb638">
                                <AiOutlineYoutube className='icon'/>
                            </a>
                        </span>

                        <span className="icon-logo">
                            <a href="https://www.linkedin.com/company/ieee-sit-student-branch/">
                                <AiFillLinkedin className='icon'/>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
