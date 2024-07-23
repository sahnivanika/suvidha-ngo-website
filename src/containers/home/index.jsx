import React from 'react';
import './style.css';

const Home = () => {
  return (
    <div className="home-container">
     <div className="circle top-left"></div>
      <div className="circle top-right"></div>
      <div className="circle bottom-left"></div>
      <div className="circle bottom-right"></div>
      <h2 className="heading">Launch Your Overseas Education Journey: Get Started with Free Consultation</h2>
      <p className="subheading">Dream, Explore, Achieve: Your Journey to Global Education Begins with Us</p>
      <div className="image-container">
        <img src={`${process.env.PUBLIC_URL}/img 1.png`} alt="Description" className="home-image" />
        <div className="text-container">
          <h3 className="why-heading">Why Choose Suvidha?</h3>
          <p className="why-content">
            Welcome to Suvidha Overseas, your gateway to global education. We're dedicated to providing free consultation services to Indian students aiming for higher education in the US and Germany. Our experienced consultants offer personalized guidance at every step, from university exploration to application assistance, all at no cost. Empowering students and breaking barriers, Suvidha Overseas is your trusted partner for a transformative educational journey. Join us today and make your dreams of studying abroad a reality.
          </p>
          <ul className="bullet-points">
            <li>Expert Guidance</li>
            <li>Accessibility Advocates</li>
            <li>Free Consultation Services</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;

