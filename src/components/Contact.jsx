import React, { useState } from 'react'
import "../css/Contact.css";
import Footer from './Footer';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Loader from "./loader";
import {Link} from "react-router-dom";

import wieLogo from "../assets/images/WIELogo-removebg-preview.png"

export default function Contact() {

    const [loading, setLoading] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [query, setQuery] = useState("");

    const sendEmail = () => {
        const form = new FormData();
        form.append('user_name', name);
        form.append('user_mail', email);
        form.append('user_mob', mobile);
        form.append('message', query);
        form.append('service_id', 'service_7g90xrm');
        form.append('template_id', 'template_jfwreej');
        form.append('public_key', 'zxBpdq7tjwbmKR6aI');
        fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
            method: 'POST',
            mode: 'cors',
            body: form,
        }).then(function () {
            alert('Your mail is sent!');
            setLoading(false)
        }).catch(function (error) {
            alert('Oops... ' + JSON.stringify(error));
            setLoading(false)
        });
        // emailjs.sendForm('service_7g90xrm', 'template_jfwreej', form.current, 'zxBpdq7tjwbmKR6aI')
        //     .then((result) => {
        //         console.log(result.text);
        //         alert("We received your request. we will contact you soon");
        //     }, (error) => {
        //         console.log(error.text);
        //         alert("Please try again later");
        //     });
    }

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            setLoading(true);
            sendEmail();
            setLoading(false);
        }
    }

    return (
        <div className='contact'>
            <div className="contact-main-container">
                <div className="home-navabar-wrapper">
                    <div className="home-navabar-container">
                        <div className="home-wie-logo-container">
                            <img src={wieLogo} alt="" />
                        </div>
                        <ul className='home-unodered-list'>
                            <li><Link to="/"><p>Home</p></Link></li>
                            <li><Link to="/registration"><p>Registration</p></Link></li>
                            <li><Link to="/contact"><p>Contact Us</p></Link></li>

                        </ul>
                    </div>
                </div>
                <div className="heading-container">
                    <h1 className="heading-text">QUERIES❓</h1>
                </div>
                <div className="line-container"></div>
                <div className="form-container">
                    {
                        !loading && <Form className="form" onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label htmlFor='name' className='label'>Name :</Form.Label>
                                <Form.Control name='name' size="lg" id="size" className='input-box' type="text" required onChange={(e) => { setName(e.target.value) }} value={name} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor='email' className='label'>Email :</Form.Label>
                                <Form.Control name='email' size="lg" id="size" className='input-box' type="email" required onChange={(e) => { setEmail(e.target.value) }} value={email} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor='mobile' className='label'>Mobile :</Form.Label>
                                <Form.Control name='mobile' size="lg" id="size" className='input-box' type="text" pattern="^[6789]\d{9}$" required onChange={(e) => { setMobile(e.target.value) }} value={mobile} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor='query' className='label'>Message :</Form.Label>
                                <Form.Control name='query' size="lg" id="size" className='input-box' as="textarea" required rows={3} onChange={(e) => { setQuery(e.target.value) }} value={query} />
                            </Form.Group>

                            <Button disabled={loading} variant="success" type="submit" size="lg" className='button'>SEND</Button>
                        </Form>
                    }
                    {
                        loading && <Loader />
                    }
                </div>
                <div className="contact-card-container">
                    <div className="contact-card-box">
                        <div className="contact-name-box">
                            <h1 className="contact-name">Chethan Baradwaj</h1>
                        </div>
                        <div className="contact-post-box">
                            <h1 className="contact-post">Chairman</h1>
                        </div>
                        <div className="contact-mobile-box">
                            <h1 className="contact-mobile">9606416541</h1>
                        </div>
                    </div>

                    <div className="contact-card-box">
                        <div className="contact-name-box">
                            <h1 className="contact-name">Shivraj Karjagi</h1>
                        </div>
                        <div className="contact-post-box">
                            <h1 className="contact-post">Vice Chairman</h1>
                        </div>
                        <div className="contact-mobile-box">
                            <h1 className="contact-mobile">9743703243</h1>
                        </div>
                    </div>

                    <div className="contact-card-box">
                        <div className="contact-name-box">
                            <h1 className="contact-name">Prakruthi C</h1>
                        </div>
                        <div className="contact-post-box">
                            <h1 className="contact-post">Wie Chairman</h1>
                        </div>
                        <div className="contact-mobile-box">
                            <h1 className="contact-mobile">8147382401</h1>
                        </div>
                    </div>

                    <div className="contact-card-box">
                        <div className="contact-name-box">
                            <h1 className="contact-name">Sneha N</h1>
                        </div>
                        <div className="contact-post-box">
                            <h1 className="contact-post">Wie Vice Chairman</h1>
                        </div>
                        <div className="contact-mobile-box">
                            <h1 className="contact-mobile">9353559069</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
