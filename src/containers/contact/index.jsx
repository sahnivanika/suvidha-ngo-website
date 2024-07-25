import React from 'react';
import './style.css'; // Import the CSS file for styling

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <div className="contact-us-box">
        <h2 className="contact-us-heading">Contact Us</h2>
        <p className="contact-us-info">
          <strong>Phone:</strong> +91-7020044091
        </p>
        <p className="contact-us-info">
          <strong>Email:</strong> info@suvidhaoverseas.org
        </p>
        <p className="contact-us-bottom-text">
          We are here to answer any questions you may have. Reach out to us and we'll respond as soon as we can.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
