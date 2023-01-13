import React from 'react'
import "../about/about.css"
import myimg from "../assets/about/myimg.jpg"
import Footer from "../footer/footer"
export default function About() {
    return (
        <>
            <div className='about__container'>


                <div className="about__section">

                    <div className="about__left">
                        <img src={myimg} alt=" my picture" className='about__img' />
                    </div>
                    <div className="about__right">
                        <h1>
                            About Ehsaan Ali
                        </h1>
                        <br />
                        <p>
                            I am a creative documentary producer. I've written and directed long-form TV documentaries as well as digital shorts.
                            <br />
                            <br />
                            Stories of migration, sexuality, and the creative process interest me the most. I believe in the need for more representation and inclusion, and have an academic background in culture and politics.
                            <br />
                            <br />
                            I am currently based between Lisbon and Singapore, and have lived and worked in Washington DC and Mexico.
                        </p>

                        <div className="about__btn__section">

                            <button className="about__btns">
                                My Work
                            </button>
                            <button className="about__btns">
                                Contact
                            </button>
                        </div>



                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}
