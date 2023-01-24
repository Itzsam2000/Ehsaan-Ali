import React from 'react'
import "../videography/videography.css"
import Footer from '../footer/footer'
import video1 from "../assets/videography/video1.mp4"
import { motion } from 'framer-motion'
export default function Videography() {
    return (

        <>
            {/*-------------------Main Container-----------------*/}

            <motion.div
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1.3, ease: 'easeOut' }}
                exit={{ opacity: 0 }}
                className='videography__container'>


                {/*-------------------Video Heading -----------------*/}

                <div className="video__heading">
                    Selection of my recent work
                </div>


                {/*-------------------video Section-----------------*/}


                <div className="video__section">

                    {/*------------------- Video Data -----------------*/}
                    <div className='video__data'>

                        {/*------------------- 1st Video Side-----------------*/}
                        <div className="video__side">

                            <video
                                className='video'
                                loop
                                muted
                                autoPlay
                                alt="All the devices"
                                src={video1}
                            />


                        </div>

                        {/*------------------- 1st Info side-----------------*/}

                        <motion.div
                            initial={{ y: '-10%' }}
                            whileInView={{ y: '0%' }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            exit={{ opacity: 1 }}
                            className="video__info">

                            <h3>
                                The Man and his Vietnamese Brides
                            </h3>
                            <br />
                            <br />
                            <span>
                                For Rice Media
                                <br />
                                PRODUCER, WRITER, DIRECTOR
                            </span>
                            <br />
                            <br />
                            <h4>
                                Watch
                                <a href='https://www.youtube.com/watch?v=YDhXbJN2iBk' target='_blank'>Here</a>
                            </h4>
                            <br />
                            <br />
                            <p>
                                What if love wasn't just about emotional connection, sexual attraction
                                or sharing the same values... but an exchange of money?
                                <br /><br />
                                Some may call his matchmaking of male customers with Vietnamese women modern-day human trafficking.
                                We take a deeper dive into Mark's unshakeable belief in his booming trade,
                                who his customers are, and what they’re looking for in a life partner.
                            </p>

                        </motion.div>

                    </div>





                    {/*-------------------------------------------   2nd Video ------------------------------------------*/}





                    {/*------------------- 2nd Video Side-----------------*/}
                    <div className='video__data'>
                        <div className="video__side">

                            <video
                                className='video'
                                loop
                                muted
                                autoPlay
                                alt="All the devices"
                                src={video1}
                            />


                        </div>

                        {/*-------------------2nd Info side-----------------*/}

                        <motion.div
                            initial={{ y: '-10%' }}
                            whileInView={{ y: '0%' }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            exit={{ opacity: 1 }}
                            className="video__info">

                            <h3>
                                The Man and his Vietnamese Brides
                            </h3>
                            <br />
                            <br />
                            <span>
                                For Rice Media
                                <br />
                                PRODUCER, WRITER, DIRECTOR
                            </span>
                            <br />
                            <br />
                            <h4>
                                Watch
                                <a href='https://www.youtube.com/watch?v=YDhXbJN2iBk' target='_blank'>Here</a>
                            </h4>
                            <br />
                            <br />
                            <p>
                                What if love wasn't just about emotional connection, sexual attraction
                                or sharing the same values... but an exchange of money?
                                <br /><br />
                                Some may call his matchmaking of male customers with Vietnamese women modern-day human trafficking.
                                We take a deeper dive into Mark's unshakeable belief in his booming trade,
                                who his customers are, and what they’re looking for in a life partner.
                            </p>

                        </motion.div>

                    </div>





                    {/*-------------------------------------------   3rd Video ------------------------------------------*/}





                    {/*-------------------  3rd Video Side-----------------*/}
                    <div className='video__data'>
                        <div className="video__side">

                            <video
                                className='video'
                                loop
                                muted
                                autoPlay
                                alt="All the devices"
                                src={video1}
                            />


                        </div>

                        {/*------------------- 3rd Info side-----------------*/}

                        <motion.div
                            initial={{ y: '-10%' }}
                            whileInView={{ y: '0%' }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            exit={{ opacity: 1 }}
                            className="video__info">

                            <h3>
                                The Man and his Vietnamese Brides
                            </h3>
                            <br />
                            <br />
                            <span>
                                For Rice Media
                                <br />
                                PRODUCER, WRITER, DIRECTOR
                            </span>
                            <br />
                            <br />
                            <h4>
                                Watch
                                <a href='https://www.youtube.com/watch?v=YDhXbJN2iBk' target='_blank'>Here</a>
                            </h4>
                            <br />
                            <br />
                            <p>
                                What if love wasn't just about emotional connection, sexual attraction
                                or sharing the same values... but an exchange of money?
                                <br /><br />
                                Some may call his matchmaking of male customers with Vietnamese women modern-day human trafficking.
                                We take a deeper dive into Mark's unshakeable belief in his booming trade,
                                who his customers are, and what they’re looking for in a life partner.
                            </p>

                        </motion.div>

                    </div>









                    {/*-------------------------------------------   4th Video ------------------------------------------*/}







                    {/*-------------------  4th Video Side-----------------*/}
                    <div className='video__data'>
                        <div className="video__side">

                            <video
                                className='video'
                                loop
                                muted
                                autoPlay
                                alt="All the devices"
                                src={video1}
                            />


                        </div>

                        {/*------------------- 4th Info side-----------------*/}

                        <motion.div
                            initial={{ y: '-10%' }}
                            whileInView={{ y: '0%' }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            exit={{ opacity: 1 }}
                            className="video__info">

                            <h3>
                                The Man and his Vietnamese Brides
                            </h3>
                            <br />
                            <br />
                            <span>
                                For Rice Media
                                <br />
                                PRODUCER, WRITER, DIRECTOR
                            </span>
                            <br />
                            <br />
                            <h4>
                                Watch
                                <a href='https://www.youtube.com/watch?v=YDhXbJN2iBk' target='_blank'>Here</a>
                            </h4>
                            <br />
                            <br />
                            <p>
                                What if love wasn't just about emotional connection, sexual attraction
                                or sharing the same values... but an exchange of money?
                                <br /><br />
                                Some may call his matchmaking of male customers with Vietnamese women modern-day human trafficking.
                                We take a deeper dive into Mark's unshakeable belief in his booming trade,
                                who his customers are, and what they’re looking for in a life partner.
                            </p>

                        </motion.div>

                    </div>







                    {/*-------------------------------------------   5th Video ------------------------------------------*/}







                    {/*------------------- 5th  Video Side-----------------*/}
                    <div className='video__data'>
                        <div className="video__side">

                            <video
                                className='video'
                                loop
                                muted
                                autoPlay
                                alt="All the devices"
                                src={video1}
                            />


                        </div>

                        {/*------------------- 5th Info side-----------------*/}

                        <motion.div
                            initial={{ y: '-10%' }}
                            whileInView={{ y: '0%' }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            exit={{ opacity: 1 }}
                            className="video__info">

                            <h3>
                                The Man and his Vietnamese Brides
                            </h3>
                            <br />
                            <br />
                            <span>
                                For Rice Media
                                <br />
                                PRODUCER, WRITER, DIRECTOR
                            </span>
                            <br />
                            <br />
                            <h4>
                                Watch
                                <a href='https://www.youtube.com/watch?v=YDhXbJN2iBk' target='_blank'>Here</a>
                            </h4>
                            <br />
                            <br />
                            <p>
                                What if love wasn't just about emotional connection, sexual attraction
                                or sharing the same values... but an exchange of money?
                                <br /><br />
                                Some may call his matchmaking of male customers with Vietnamese women modern-day human trafficking.
                                We take a deeper dive into Mark's unshakeable belief in his booming trade,
                                who his customers are, and what they’re looking for in a life partner.
                            </p>

                        </motion.div>

                    </div>







                    {/*-------------------------------------------   6th Video ------------------------------------------*/}







                    {/*-------------------  6th Video Side-----------------*/}
                    <div className='video__data'>
                        <div className="video__side">

                            <video
                                className='video'
                                loop
                                muted
                                autoPlay
                                alt="All the devices"
                                src={video1}
                            />


                        </div>

                        {/*------------------- 6th Info side-----------------*/}

                        <motion.div
                            initial={{ y: '-10%' }}
                            whileInView={{ y: '0%' }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            exit={{ opacity: 1 }}
                            className="video__info">
                            <h3>
                                The Man and his Vietnamese Brides
                            </h3>
                            <br />
                            <br />
                            <span>
                                For Rice Media
                                <br />
                                PRODUCER, WRITER, DIRECTOR
                            </span>
                            <br />
                            <br />
                            <h4>
                                Watch
                                <a href='https://www.youtube.com/watch?v=YDhXbJN2iBk' target='_blank'>here</a>
                            </h4>
                            <br />
                            <br />
                            <p>
                                What if love wasn't just about emotional connection, sexual attraction
                                or sharing the same values... but an exchange of money?
                                <br /><br />
                                Some may call his matchmaking of male customers with Vietnamese women modern-day human trafficking.
                                We take a deeper dive into Mark's unshakeable belief in his booming trade,
                                who his customers are, and what they’re looking for in a life partner.
                            </p>

                        </motion.div>



                    </div>



                    {/*------------------- End of Video section -----------------*/}

                </div>

                {/*-------------------End of Main Container-----------------*/}

            </motion.div>

            {/*-------------------Footer-----------------*/}

            <Footer />
        </>

    )
}
