import React from "react";
// Abuubakar Ciise
import './HomePage.css'
import Button from "../components/Home-button";
// c1210122
import MY from '../Assets/WhatsApp Image 2024-03-23 at 19.16.51_d679109e.jpg'

import {FaStar}  from 'react-icons/fa';



const Home = ()=>{

    return(
        <div className="container"  id="home">
            <div className="Me">
                <h1>Hello, I'm Abuubakar</h1>
                <h2>A Full-Stack developer</h2>
           <button className="Contact"><a href="#Contact">Contact Me</a></button>
            </div>
            <div className="img">
            <i class="icon"><FaStar size={20} color="white" /></i>
            {/* <i class="icon"><FaStar size={20} color="white" /></i> */}
                <img src={MY} alt="" />
            </div>
        </div>
    )
}
export default Home
