import React from 'react'
import "../footer/footer.css"
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs"
export default function Footer() {
    return (

        <div className='footer__container'>

            {/*----------------   Email Section ----------- */}


            <div className='email'>
                <a href="mailto:mirzasameer1322@gmail.com"> imehsanali@gmail.com </a>
            </div>

            {/*----------------   Links Section ----------- */}


            <div className="footer__links">
                <a href=""> <BsFacebook /> </a>
                <a href=""> <BsInstagram /> </a>
                <a href=""> <BsLinkedin /> </a>
            </div>


            {/*----------------   Copyright Section ----------- */}


            <div className="copyright">
                ©2022 by Ehsan Ali, Pakistan.
            </div>

            {/*----------------   End of main container ----------- */}

        </div>
    )
}
