import React from "react";
import './Contact.css';
import { AiOutlineWhatsApp, AiFillGithub, AiFillFacebook } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contact-container" id="Contact">
      <div className="contact-info">
        <h3>Get in Touch</h3>
        <p>Feel free to send me a message or connect on social media.</p>
        <div className="social-links">
          <a href="https://wa.me/610736551" target="_blank" rel="noreferrer">
            <AiOutlineWhatsApp color="green" size={40}  />
          </a>
          <a href="https://github.com/Abuubakar-Ciise" target="_blank" rel="noreferrer">
            <AiFillGithub color="black" size={40} />
          </a>
          <a href="https://www.facebook.com/abuubakar.ciise.14?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
            <AiFillFacebook color="blue" size={40}  />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
