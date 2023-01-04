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
                            <AiFillInstagram className='icon'/>
                        </span>

                        <span className="icon-logo">
                            <AiOutlineYoutube className='icon'/>
                        </span>

                        <span className="icon-logo">
                            <FaFacebookF className='icon'/>
                        </span>

                        <span className="icon-logo">
                            <AiFillLinkedin className='icon'/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
