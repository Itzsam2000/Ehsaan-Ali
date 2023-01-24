import React, { useState } from 'react'
import "../navbar/navbar.css"
import { NavLink, Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsYoutube, BsWhatsapp } from "react-icons/bs"
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"

export default function Navbar() {


    {/*-------------------------------- Mobile View Hooks -------------------- */ }

    const [MobileView, setMobileView] = useState(false);

    return (


        <div className='nav__container' >

            {/*------------------    Logo Section     ------------*/}

            <a className="nav__logo" href='/'>
                <h5>Ehsaan Ali</h5>
                <span>Photographer & Videographer</span>
            </a>

            {/*------------------    Links Section     ------------*/}

            <div className="nav__links">
                <ul>
                    <li> <NavLink to="/" className='links' >Home</NavLink></li>
                    <li> <NavLink to="about" className='links' >About</NavLink></li>
                    <li> <NavLink to="photography" className='links'>Photography</NavLink></li>
                    <li> <NavLink to="videography" className='links'>Videography </NavLink></li>
                    <li> <NavLink to="contact" className='links'>Contact </NavLink></li>
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
                    <a href="https://www.instagram.com/ehsaan_mirzaa/" target='_blank'>  <BsInstagram /> </a >
                    <a href="https://www.facebook.com/profile.php?id=100010523226400" target='_blank'>  <BsFacebook /></a>
                    <a href='https://www.youtube.com/@ehsaanalistudio/featured' target='_blank' title='Youtube'>   <BsYoutube /> </a>
                    <a href='https://wa.me/+923490576948?text=Hi Ehsan! comming direct from your personal Website.' target='_blank' title='WhatsApp'>   <BsWhatsapp /> </a>

                </div>
            </div>


            {/*------------------    End of Main container    ------------*/}

        </div>
    )
}
