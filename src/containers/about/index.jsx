import React from 'react';
import './style.css'; // Make sure to add styles in this file or inline

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-heading">Services We Are Offering</h1>
      <h2 className="services-subheading">
        At Suvidha Overseas, we offer a comprehensive range of free services to ensure your smooth transition to international education.
      </h2>
      <div className="services-cards">
        <div className="service-card">
          <div className="service-icon">
            <img src={`${process.env.PUBLIC_URL}/img 5.png`} alt="IELTS/Duolingo Tutoring" />
          </div>
          <h3 className="service-title">IELTS/Duolingo Tutoring</h3>
          <p className="service-description">Expert assistance to help you excel in language proficiency tests.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <img src={`${process.env.PUBLIC_URL}/img 6.png`} alt ="SOP/LOR Writing" />
          </div>
          <h3 className="service-title">SOP/LOR Writing</h3>
          <p className="service-description">Tailored support in crafting compelling statements of purpose and letters of recommendation.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <img src={`${process.env.PUBLIC_URL}/img 7.png`} alt="University Selection Guidance" />
          </div>
          <h3 className="service-title">University Selection Guidance</h3>
          <p className="service-description">Personalized advice to help you choose the right university for your academic and career goals.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <img src={`${process.env.PUBLIC_URL}/img 8.png`} alt="Country Selection Guidance" />
          </div>
          <h3 className="service-title">Country Selection Guidance</h3>
          <p className="service-description">Insightful recommendations to aid you in selecting the right country for your studies.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <img src={`${process.env.PUBLIC_URL}/img 9.png`} alt="Application Form Assistance" />
          </div>
          <h3 className="service-title">Application Form Assistance</h3>
          <p className="service-description">Step-by-step guidance through the application process.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <img src={`${process.env.PUBLIC_URL}/img 10.png`} alt="Visa Support" />
          </div>
          <h3 className="service-title">Visa Support</h3>
          <p className="service-description">Navigational assistance and resources to simplify your visa application process.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;

