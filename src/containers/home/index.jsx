import React from 'react';
import './style.css'; // Ensure you include the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
     <div className="image-container">
     <img src={`${process.env.PUBLIC_URL}/img 1.png`} alt="Description" className="home-image" />

      </div>
      <h2 className="heading">Launch Your Overseas Education Journey: Get Started with Free Consultation</h2>
      <p className="subheading">Dream, Explore, Achieve: Your Journey to Global Education Begins with Us</p>
    </div>
  );
}

export default Home;


