// Exams.jsx
import React from 'react';
import './style.css'; // Make sure to create and include this CSS file

const Exams = () => {
  return (
    <div className="exams-section">
      <h1 className="exams-heading">Exams We Are Offering</h1>
      <h2 className="exams-subheading">At Suvidha Overseas, we offer a comprehensive range of free services to ensure your smooth transition to international education</h2>
      <div className="exams-container">
        {examData.map((exam, index) => (
          <div key={index} className="exam-box">
            <div className="exam-content">
              <h3 className="exam-title">{exam.title}</h3>
              <p className="exam-description">{exam.description}</p>
            </div>
            <div className="exam-buttons">
            <a href={exam.knowMoreLink} className="btn know-more">Know more</a>
              <a href={exam.enquireNowLink} className="btn enquire-now">Enquire Now</a>
              <a href={exam.bookSeatLink} className="btn book-seat">Book Your Seat</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const examData = [
  { title: "IELTS", description: "The International English Language Testing System (IELTS) is a standardized test that measures the English language proficiency of non-native speakers who wish to study, work, or migrate to English-speaking countries.It is recognized and accepted by educational institutions, employers, and governments worldwide.The scores are graded on a unique 9-band scale to clearly identify levels of proficiency, from non-user (band score 1) through to expert (band score 9).",
    knowMoreLink: "https://suvidhaoverseas.org/ielts.php",
    enquireNowLink: "https://docs.google.com/forms/d/e/1FAIpQLSf9Mz4HpahdtjFaEmR20JC1D-pRELSUXGjrr2IsxlpUZtYYMg/viewform",
    bookSeatLink: "https://ielts.org/",
  },
  // Add more exam objects as needed
  { title: "DUOLINGO", description:"Duolingo is a popular language-learning platform that offers courses in multiple languages for speakers of various base languages. It is accessible via a website and mobile app, making it convenient for users on the go. Duolingo uses a gamified approach to education, presenting lessons in small, manageable chunks and rewarding users with points and badges to encourage consistent study habits" },
];

export default Exams;
