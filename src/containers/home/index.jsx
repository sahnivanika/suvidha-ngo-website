import React from 'react';
import './style.css';

const Home = () => {
  return (
    <div className="home-container">
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
      <div className="success-container">
        <h3 className="success-message">Your Success in International Education Starts Here</h3>
        <div className="success-content">
          <p className="success-paragraph">
            Cultivating Dreams, Empowering Futures: Your Trustworthy Partner in Global Education. Get guided support for a seamless application process. We will guide you through deadlines, program options, standardized testing, and visa requirements. Receive application essay and interview prep tips to stand out for the competitive Fall intake.
          </p>
          <div className="success-images">
            <img src={`${process.env.PUBLIC_URL}/img 2.png`} alt="Success Image 1" className="success-image success-image-top" />
            <img src={`${process.env.PUBLIC_URL}/img 3.png`} alt="Success Image 2" className="success-image success-image-bottom" />
          </div>
        </div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSf9Mz4HpahdtjFaEmR20JC1D-pRELSUXGjrr2IsxlpUZtYYMg/viewform" target="_blank" rel="noopener noreferrer" className="cta-button">
        Start Your Journey for Free
        </a>
      </div>
    </div>
  );
};

export default Home;


