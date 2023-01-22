import React, { useState } from 'react'
import "../navbar/navbar.css"
import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsYoutube, BsWhatsapp } from "react-icons/bs"
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"

export default function Navbar() {


    {/*-------------------------------- Mobile View Hooks -------------------- */ }

    const [MobileView, setMobileView] = useState(false);

    return (


        <div className='nav__container' >

            {/*------------------    Logo Section     ------------*/}

            <div className="nav__logo">
                <h5>Ehsaan Ali</h5>
                <span>Photographer & Videographer</span>
            </div>

            {/*------------------    Links Section     ------------*/}

            <div className="nav__links">
                <ul>
                    <li> <Link to="/" className='links'>Home</Link></li>
                    <li> <Link to="about" className='links'>About</Link></li>
                    <li> <Link to="photography" className='links'>Photography</Link></li>
                    <li> <Link to="videography" className='links'>Videography </Link></li>
                    <li> <Link to="contact" className='links'>Contact </Link></li>
                </ul>
            </div>

            {/*-------------------------------- Hamburger area -------------------- */}


            <div className="hamburger" onClick={() => setMobileView(!MobileView)}>

                <RxHamburgerMenu />
            </div>

            {/*--------------------------------Mobile Links area -------------------- */}


            <div className="mobile__links" style={{ marginLeft: MobileView ? '0px' : '-200VW', transition: '1s all ease-in-out' }} onClick={() => setMobileView(false)}>
                <div className="hamburger__close"><RxCross1 onClick={() => setMobileView(true)} /></div>
                <ul >
                    <li><Link to="/" className='mobile__links__a' > Home </Link> </li>
                    <li><Link to="about" className='mobile__links__a'> About </Link> </li>
                    <li><Link to="photography" className='mobile__links__a' > Photography </Link> </li>
                    <li><Link to="videography" className='mobile__links__a' > Videography </Link> </li>
                    <li><Link to="contact" className='mobile__links__a' > Contact </Link> </li>
                </ul>
                <div className="mobile__links__icons">
                    <a href='/' title='Instagram'>  <BsInstagram /> </a >
                    <a href='/' title='Facebook'>  <BsFacebook /></a>
                    <a href='/' title='Youtube'>   <BsYoutube /> </a>
                    <a href='/' title='WhatsApp'>   <BsWhatsapp /> </a>

                </div>
            </div>


            {/*------------------    End of Main container    ------------*/}

        </div>
    )
}
