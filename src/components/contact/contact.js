import React from 'react'
import "../contact/contact.css"
import contact__img from "../assets/contact/contact-img.jpg"
import Footer from "../footer/footer"
import { BsWhatsapp, BsInstagram, } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

export default function Contact() {
    return (
        <>
            <div className='contact__container'>
                <div className="contact__box">
                    <div className="contact__left">
                        <img src={contact__img} alt='contact-img' />
                    </div>
                    <div className="contact__right">
                        <div className="contact__text">
                            <span>Have a question?
                                <br /> Contact me!</span>
                        </div>
                        <form className='contact__form' >

                            <input type="text" name="Name" placeholder='Name' className='input-field' required />

                            <input type="email" name="Email" placeholder='Email' className='input-field' required />
                            <input type="number" name="Mobile" placeholder='Mobile Number' className='input-field' required />

                            <textarea name="Message" placeholder='Type your message here!' className='message' required />
                            <button type="submit" className='contact-button' data-aos="zoom-in"
                                style={{ transition: '0.5s all ease-in-out' }} value="send">Send
                            </button>


                        </form>

                    </div>

                </div>
                <div className="contact__socials">

                    <a href="/" className="social__cards" target='_blank'>
                        <BsInstagram className='contact__icons' />
                        <div className="app__name">Instagram</div>
                        <div className="username">ehsan__mirza</div>
                        <div className="social__btn">Reach me</div>

                    </a>
                    <a href="/" className="social__cards" target='_blank'>
                        <BsWhatsapp className='contact__icons' />
                        <div className="app__name">WhatsApp</div>
                        <div className="username">+92 3400576948</div>
                        <div className="social__btn">Drop a message</div>
                    </a>

                    <a href="mailto:itzsamhere20@gmail.com" className="social__cards">
                        <AiOutlineMail className='contact__icons' />
                        <div className="app__name">Gmail</div>
                        <div className="username">itzehsan@gmail.com</div>
                        <div className="social__btn">Send mail</div>
                    </a>
                </div>
            </div>







            <Footer />
        </>

    )
}
