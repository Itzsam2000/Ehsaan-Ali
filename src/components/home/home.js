import React from 'react'
import "../home/home.css"
import "../footer/footer"
import { motion } from "framer-motion"
import home from "../assets/home/home.jpg"
import Footer from '../footer/footer'
export default function Home() {
    return (
        <>
            <motion.div
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                exit={{ opacity: 0 }}


                className='home__container'>
                <div className="img__section">
                    <img src={home} alt="a couple  walking on beach" className='home__img' />
                </div>
            </motion.div>
            <Footer />
        </>
    )
}
