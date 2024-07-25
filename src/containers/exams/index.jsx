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
  { title: "IELTS", description: "The International English Language Testing System (IELTS) is a standardized test that measures the English language proficiency of non-native speakers who wish to study, work, or migrate to English-speaking countries.It is recognized and accepted by educational institutions, employers, and governments worldwide.The scores are graded on a unique 9-band scale to clearly identify levels of proficiency, from non-user (band score 1) through to expert (band score 9).A strong IELTS score is often a crucial requirement for admission to these institutions, making it either recommended or mandatory for prospective students.It is widely recognized by universities in English-speaking countries such as the UK, USA, Canada, Australia, and New Zealand.",
    knowMoreLink: "https://suvidhaoverseas.org/ielts.php",
    enquireNowLink: "https://docs.google.com/forms/d/e/1FAIpQLSf9Mz4HpahdtjFaEmR20JC1D-pRELSUXGjrr2IsxlpUZtYYMg/viewform",
    bookSeatLink: "https://ielts.org/",
  },
  // Add more exam objects as needed
  { title: "DUOLINGO", description:"Duolingo is a popular language-learning platform that offers courses in multiple languages for speakers of various base languages. It is accessible via a website and mobile app, making it convenient for users on the go. Duolingo uses a gamified approach to education, presenting lessons in small, manageable chunks and rewarding users with points and badges to encourage consistent study habits.It is well-suited for beginners and intermediate learners looking to build foundational language skills.Duolingo also offers a proficiency test called the Duolingo English Test, which is accepted by a number of educational institutions worldwide as evidence of English language proficiency.",
  knowMoreLink: "https://www.suvidhaoverseas.org/duolingo.php",
  enquireNowLink: "https://docs.google.com/forms/d/e/1FAIpQLSf9Mz4HpahdtjFaEmR20JC1D-pRELSUXGjrr2IsxlpUZtYYMg/viewform",
  bookSeatLink: "https://www.duolingo.com/",
  },
    { title: "GRE", description:"The Graduate Record Examination (GRE) is a standardized test that is an admissions requirement for many graduate schools primarily in the United States and Canada. It assesses the potential of applicants for advanced study in various fields and is used to supplement undergraduate records and other qualifications for graduate-level study. The test evaluates analytical writing, quantitative reasoning, and verbal reasoning skills. Administered by the Educational Testing Service (ETS), the GRE is available at testing centers worldwide or through a home testing option.Scores from the GRE are used by admissions panels to compare applicants from diverse backgrounds on a common measure.",
  knowMoreLink: "https://www.suvidhaoverseas.org/duolingo.php",
  enquireNowLink: "https://docs.google.com/forms/d/e/1FAIpQLSf9Mz4HpahdtjFaEmR20JC1D-pRELSUXGjrr2IsxlpUZtYYMg/viewform",
  bookSeatLink: "https://www.ets.org/gre.html"
   },
   {
title:"GMAT",description:"The Graduate Management Admission Test (GMAT) is a standardized test designed primarily for admission to graduate business programs, such as MBA programs globally. It is developed and administered by the Graduate Management Admission Council (GMAC) and is used by over 2,300 business schools worldwide. The GMAT assesses analytical writing, quantitative problem-solving, verbal reasoning, and integrated reasoning skills.The test is structured into four main sections: Analytical Writing Assessment, Integrated Reasoning, Quantitative, and Verbal sections.This feature helps to accurately measure an individual's ability level. GMAT scores are a crucial part of the admissions process, offering business schools a standardized measure of applicants' preparedness for the rigors of graduate business study.",
knowMoreLink: "https://www.suvidhaoverseas.org/gmat.php",
enquireNowLink: "https://docs.google.com/forms/d/e/1FAIpQLSf9Mz4HpahdtjFaEmR20JC1D-pRELSUXGjrr2IsxlpUZtYYMg/viewform",
  bookSeatLink:"https://www.mba.com/exams/gmat-exam?utm_campaign=sas_IN_Dec_gfocus_cenarm_gmat-focus-edition&utm_source=google&utm_medium=paidsearch&gad_source=1&gclid=CjwKCAjww_iwBhApEiwAuG6ccN9r0G8z18hy65yroNgpwZq5AXWpKARg1yWiYYv5TPq2026yLd-OuhoCGhMQAvD_BwE"
},
{
    title:"TOEFL",description:"The Test of English as a Foreign Language (TOEFL) is a standardized test that measures the English language ability of non-native speakers wishing to enroll in English-speaking universities. The test is accepted by many academic and professional institutions in English-speaking countries, making it one of the most recognized English proficiency exams.TOEFL assesses the test taker's ability in four key language areas: reading, listening, speaking, and writing. It is designed to test how well an individual uses and understands English at the university level.The test format includes tasks that require integrating multiple skills to respond, mimicking the kind of tasks encountered in academic settings.Scores from TOEFL are crucial for admissions decisions, especially for applicants whose native language is not English. ",
    knowMoreLink: "https://www.suvidhaoverseas.org/toefl.php",
    enquireNowLink: "https://docs.google.com/forms/d/e/1FAIpQLSf9Mz4HpahdtjFaEmR20JC1D-pRELSUXGjrr2IsxlpUZtYYMg/viewform",
    bookSeatLink:"https://www.etsindia.org/toefl-ibt/"
},
{
    title:"PTE",description:"The Pearson Test of English Academic (PTE Academic) is a computer-based academic English language test aimed at non-native English speakers who wish to study abroad. It tests reading, writing, listening, and speaking skills. PTE Academic is known for its fast processing times, typically delivering results within five business days, making it a popular choice among students and professionals seeking quick turnaround times for their language proficiency results.The test is widely recognized by universities, colleges, and governments around the world. PTE Academic offers a unique testing environment as all test takers answer questions by speaking into a microphone, typing on a computer, and reading and listening through headphones, ensuring an integrated and comprehensive assessment of their English language abilities. ",
    knowMoreLink: "https://www.suvidhaoverseas.org/pte.php",
    enquireNowLink: "https://docs.google.com/forms/d/e/1FAIpQLSf9Mz4HpahdtjFaEmR20JC1D-pRELSUXGjrr2IsxlpUZtYYMg/viewform",
    bookSeatLink:"https://www.pearsonpte.com/"
}

];

export default Exams;
