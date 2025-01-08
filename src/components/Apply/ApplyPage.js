import React from "react";
import '../../css/main.css';

const ApplyPage = () => {
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSfBa4Jo_jN1BNf3HRZGnC5JyPGT_sfu1EGAc7V6rkDczt3CXQ/viewform"; // Replace with your form link

  return (
    <div className="apply-container">
      <h2 className="apply-title">Apply</h2>
        <p>
        Are you interested in joining our team? You can apply for one of the 
        open positions on our team by <b>following this three easy steps:</b>
        </p>
        
        <h3>Step 1: How to apply</h3>
        <p>To apply, <b>fill out the form</b> with all the required information by pressing the button at the end of this page, and our 
          team members will evaluate it and inform you about the next steps.
        </p>

        <h3>Step 2: The selection process</h3>
        <p>
        After submitting your application, our <b>recruitment team will review 
        your profile.</b> If deemed suitable, you will be contacted for an interview.
        </p>

        <h3>Step 3: What to expect in the interview</h3> 
        <p>The selection process involves <b>two interviews:</b> the first meeting 
          will focus on discussing your <b>skills</b>, <b>experiences</b>, and <b>motivations</b>.  
          It will also be an opportunity to ask questions about our team and 
          ongoing projects. Once you pass this initial phase, we will invite 
          you to <b>complete a task</b> related to your area of interest.
          </p>
        <p>
          We look forward to meeting you and discovering how you can contribute 
          to the success of our team!
        </p>

      <div className="apply-button-container">
        <a href={googleFormLink} target="_blank" rel="noopener noreferrer" className="apply-button">
          APPLY
        </a>
      </div>
      
    </div>
  );
};

export default ApplyPage;
