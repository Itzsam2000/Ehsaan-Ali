import React from 'react'
import "../navbar/navbar.css"
import { Link } from "react-router-dom";
export default function Navbar() {
    return (


        <div className='nav__container'>

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

            {/*------------------    End of Main container    ------------*/}

        </div>
    )
}
