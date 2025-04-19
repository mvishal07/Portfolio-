
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { SiGmail } from "react-icons/si";
import { FaPhoneFlip } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import './index.css'
const ContactUs = (props) => {
    const {theme} = props
    const heading = theme ==='light' ? 'heading' : 'headingdark'
    const card = theme ==='light' ? 'card' : 'card-dark'
    const messagecard = theme  === 'light' ? 'message-card' : 'messagecard-dark'
    const frm = theme === 'light' ? 'frm' : 'frm-dark'
    const mes = theme === 'light' ? 'mes' : 'mes-dark'
    const inputbar = theme === 'light' ? 'inputbar' : 'inputbar-dark'
    const sendbtn = theme === 'light' ? 'send-btn' : 'sendbtn-dark'
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_1fcvnrn', 'template_mi4nkn9', form.current, 'm3WSeHPp3OnAFonDl')
            .then(() => {
                setStatus('Message sent successfully!');
                form.current.reset();
            })
            .catch((error) => {
                console.error(error);
                setStatus('Failed to send message.');
            });
    };

    return (

        <div className='contactus' id="contactus">
            <h2 className={heading}>Connect With Me</h2>
            <div className="container">
            <div className='contactus-content'>

                <div className={card}>
                <SiGmail className='logo' />
                    <div className='details'>
                      
                        <h3 className='type'>
                            Email
                        </h3>
                        <p className='info'><a href='mailto:mv859849@gmail.com' color='black' className='info'>mv859849@gmail.com</a></p>
                    </div>
                </div>

                <div className={card}>
                <FaPhoneFlip  className='logo' />
                    <div className='details'>
                        
                        <h3 className='type'>
                            Phone
                        </h3>
                        <p className='info'>8519982886</p>
                    </div>
                </div>


                <div className={card}>
                <GrLocation  className='logo' />
                    <div className='details'>
                    
                        <h3 className='type'>
                            Location
                        </h3>
                        <p className='info'>Hyderabad</p>
                    </div>
                </div>



            </div>

            <div className={messagecard}>
                
                <form ref={form} onSubmit={sendEmail} className={frm}>
                    <h2 className={mes}>Send Message</h2>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                        className={inputbar}
                        
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                        className={inputbar}
                    
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                       
                        className={inputbar}
                    />
                    <button type="submit" className={sendbtn}>
                        Send
                    </button>
                </form>
                {status && <p className="status">{status}</p>}
            </div>
            </div>
        </div>
    );
};

export default ContactUs;
