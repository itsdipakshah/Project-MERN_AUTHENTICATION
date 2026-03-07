import React, { useContext } from "react";
import "../styles/Hero.css";
import heroImage from "../assets/homePhoto.png";
import { Context } from "../main";

const Hero = () => {
  const { user } = useContext(Context);
  return (
    <>
      <div className="hero-section">
        <img src={heroImage} alt="hero-image" />
        <h4>Hello, {user ? user.name : "Developer"}</h4>
        <h1>Welcome to MERN Auth WebPage</h1>
        <p>
          Project of MERN Authentication Developed By {user ? user.name :"Developer" } <br />
          MERN stack while learning OTP verification with Twilio and Nodemailer.
        </p>
      </div>
    </>
  );
};

export default Hero;
