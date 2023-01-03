import React from 'react';
import "../css/pageNotFound.css";
import image404 from "../assets/images/pageNotFound.png";
import { NavLink } from 'react-router-dom';

export default function PageNotFound() {
    return (
        <div className='page-not-found'>
            <div className="main-container">
                <img src={image404} alt="404" />
                <li><NavLink className="home-btn" to="/">Go To Home</NavLink></li>
            </div>
        </div>
    )
}
