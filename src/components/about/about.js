import React from 'react'
import "../about/about.css"
import myimg from "../assets/about/myimg.jpg"
import Footer from "../footer/footer"
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
export default function About() {
    return (
        <>

            {/*------------------------Main Container ----------------*/}

            <motion.div
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1, ease: 'easeOut' }}
                exit={{ opacity: 0 }}
                className='about__container'>

                {/*------------------------About Section ----------------*/}

                <div className="about__section">

                    {/*------------------------About Left ----------------*/}

                    <div className="about__left">
                        <img src={myimg} alt=" my picture" className='about__img' />
                    </div>

                    {/*------------------------About Right   ----------------*/}

                    <motion.div
                        initial={{ y: '-5%' }}
                        animate={{ y: '0%' }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        exit={{ opacity: 1 }}
                        className="about__right">
                        <h1>
                            About Ehsaan Ali
                        </h1>
                        <br />
                        <p>

                            {/*------------------------Paragraph no 1 ----------------*/}

                            I am a creative documentary producer. I've written and directed long-form TV documentaries as well as digital shorts.

                            <br />
                            <br />

                            {/*------------------------Paragraph no 2 ----------------*/}

                            Stories of migration, fashion, and the creative process interest me the most. I believe in the need for more representation and inclusion, and have an academic background in culture and politics.

                            <br />
                            <br />

                            {/*------------------------Paragraph no 3 ----------------*/}

                            I am currently based between Lisbon and Singapore, and have lived and worked in Washington DC and Mexico.

                        </p>

                        {/*------------------------Button Section ----------------*/}

                        <div className="about__btn__section">

                            {/*------------------------Work Button  ----------------*/}
                            <Link to='/videography' className="about__btns">
                                My Work
                            </Link>

                            {/*------------------------ Contact Button  ----------------*/}

                            <Link to="/contact/top" className="about__btns">
                                Contact
                            </Link>

                        </div>

                        {/*------------------------ End of Right Side ----------------*/}

                    </motion.div>

                    {/*------------------------End of Contact Section  ----------------*/}

                </div>

                {/*------------------------ End of Main Container ----------------*/}

            </motion.div>


            {/*------------------------ About  Footer  ----------------*/}


            <Footer />

        </>
    )
}
