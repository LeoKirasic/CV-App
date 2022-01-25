import React from 'react';
import PropTypes from 'prop-types';

function OutputSection(props) {
  return (
    <div id="output-section">
      <div className="general-information">
        GENERAL INFORMATION
        <div className="name">Name: {props.name}</div>
        <div className="email">Email: {props.email}</div>
        <div className="phone-number">Phone Number: {props.phoneNumber}</div>
      </div>
      <div className="educational-experience">
        EDUCATIONAL EXPERIENCE
        <div className="school-name">School Name: {props.schoolName}</div>
        <div className="title-of-study">
          Title Of Study: {props.titleOfStudy}
        </div>
        <div className="date-of-study">
          From: {props.startDateOfStudy} To: {props.endDateOfStudy}
        </div>
      </div>
      <div className="practical-experience">
        PRACTICAL EXPERIENCE
        <div className="company-name">Company name: {props.companyName}</div>
        <div className="title">Title: {props.title}</div>
        <div className="start-date">Start Date: {props.startDate}</div>
        <div className="end-date">End Date: {props.endDate}</div>
        <div className="tasks">Tasks: {props.tasks}</div>
      </div>
    </div>
  );
}

OutputSection.propTypes = {
  schoolName: PropTypes.string,
  titleOfStudy: PropTypes.string,
  startDateOfStudy: PropTypes.string,
  endDateOfStudy: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  companyName: PropTypes.string,
  title: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  tasks: PropTypes.string,
};

export default OutputSection;
