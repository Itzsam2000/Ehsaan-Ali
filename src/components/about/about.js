import React from 'react'
import "../about/about.css"
import myimg from "../assets/about/myimg.jpg"
import Footer from "../footer/footer"
export default function About() {
    return (
        <>

            {/*------------------------Main Container ----------------*/}

            <div className='about__container'>

                {/*------------------------About Section ----------------*/}

                <div className="about__section">

                    {/*------------------------About Left ----------------*/}

                    <div className="about__left">
                        <img src={myimg} alt=" my picture" className='about__img' />
                    </div>

                    {/*------------------------About Right   ----------------*/}

                    <div className="about__right">
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

                            Stories of migration, sexuality, and the creative process interest me the most. I believe in the need for more representation and inclusion, and have an academic background in culture and politics.

                            <br />
                            <br />

                            {/*------------------------Paragraph no 3 ----------------*/}

                            I am currently based between Lisbon and Singapore, and have lived and worked in Washington DC and Mexico.

                        </p>

                        {/*------------------------Button Section ----------------*/}

                        <div className="about__btn__section">

                            {/*------------------------Work Button  ----------------*/}

                            <button className="about__btns">
                                My Work
                            </button>

                            {/*------------------------ Contact Button  ----------------*/}

                            <button className="about__btns">
                                Contact
                            </button>

                        </div>

                        {/*------------------------ End of Right Side ----------------*/}

                    </div>

                    {/*------------------------End of Contact Section  ----------------*/}

                </div>

                {/*------------------------ End of Main Container ----------------*/}

            </div>


            {/*------------------------ About  Footer  ----------------*/}


            <Footer />

        </>
    )
}
