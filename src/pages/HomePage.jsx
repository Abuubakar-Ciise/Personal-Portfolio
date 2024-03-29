import React from "react";
import './HomePage.css'
import Button from "../components/Home-button";
import MY from '../Assets/WhatsApp Image 2024-03-23 at 19.16.51_d679109e.jpg'

import {FaStar}  from 'react-icons/fa';



const Home = ()=>{

    return(
        <div className="container"  id="home">
            <div className="Me">
                <h1>Hello, I'm Abuubakar</h1>
                <h2>A Full-Stack developer</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem explicabo sint vel voluptatibus, dolores facere excepturi <br /> id sit dolor, quas exercitationem autem provident vero aut, corporis possimus quis in nihil.</p>
                <button className="Contact">Contact Me</button>
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