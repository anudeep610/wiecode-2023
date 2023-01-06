import React, { useState } from 'react'
import "../css/Contact.css";
import Footer from './Footer';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Loader from "./loader";

export default function Contact() {

    const [loading, setLoading] = useState(false)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [query, setQuery] = useState("");

    const sendEmail = () => {
        const config = {
            SecureToken:'2f391f8e-5980-43a2-ad94-a603f8706de0',
            To: 'ieeesitsb2023@gmail.com',
            From: email,
            Subject: "query from website",
            Body: {
                mobile:mobile,
                name:name,
                query:query
            }
        };
        if (window.Email) {
            window.Email.send(config).then((message) =>{
                alert("We recived Your query. We will get back soon 😄");
                setName("");
                setEmail("");
                setMobile("");
                setQuery("");
            }).catch(
                (err) => alert("Something went wrong. Please try again. ;)")
            )
        }
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
                        <ul className='home-unodered-list'>
                            <li><p>Home</p></li>
                            <li><p>Registration</p></li>
                            <li><p>About Us</p></li>
                            <li><p>Contact Us</p></li>
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
                                <Form.Control name='query' size="lg" id="size" className='input-box' as="textarea" required rows={3} onChange={(e) => { setQuery(e.target.value) }} value={query}/>
                            </Form.Group>

                            <Button disabled={loading} variant="success" type="submit" size="lg" className='button'>SEND</Button>
                        </Form>
                    }
                    {
                        loading && <Loader/>
                    }
                </div>
                <div className="contact-card-container">
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
                            <h1 className="contact-name">Sneha </h1>
                        </div>
                        <div className="contact-post-box">
                            <h1 className="contact-post">Wie Vice Chairman</h1>
                        </div>
                        <div className="contact-mobile-box">
                            <h1 className="contact-mobile">9606416541</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
