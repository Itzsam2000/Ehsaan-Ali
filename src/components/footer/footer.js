import React from 'react'
import "../footer/footer.css"
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs"
export default function Footer() {
    return (

        <div className='footer__container'>

            {/*----------------   Email Section ----------- */}


            <div className='email'>
                <a href="mailto:ehsaanalistudio@gmail.com"> ehsaanalistudio@gmail.com </a>
            </div>

            {/*----------------   Links Section ----------- */}


            <div className="footer__links">
                <a href="https://www.facebook.com/profile.php?id=100010523226400" target='_blank'> <BsFacebook /> </a>
                <a href="https://www.instagram.com/ehsaan_mirzaa/" target='_blank'> <BsInstagram /> </a>
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
