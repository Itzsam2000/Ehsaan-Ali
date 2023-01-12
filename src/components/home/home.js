import React from 'react'
import "../home/home.css"
import "../footer/footer"
import home from "../assets/home/home.jpg"
import Footer from '../footer/footer'
export default function Home() {
    return (
        <>
            <div className='home__container'>
                <div className="img__section">
                    <img src={home} alt="a couple  walking on beach" className='home__img' />
                </div>
            </div>
            <Footer />
        </>
    )
}
