import React from 'react';
import PropTypes from 'prop-types';

class OutputSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="output-section">
        <div className="general-information">
          GENERAL INFORMATION:
          <div className="name">Name: {this.props.name}</div>
          <div className="email">Email: {this.props.email}</div>
          <div className="phone-number">
            Phone Number: {this.props.phoneNumber}
          </div>
        </div>
        <div className="educational-experience">
          EDUCATIONAL EXPERIENCE:
          <div className="school-name">
            School Name: {this.props.schoolName}
          </div>
          <div className="title-of-study">
            Title Of Study: {this.props.titleOfStudy}
          </div>
          <div className="date-of-study">
            From: {this.props.startDateOfStudy} To: {this.props.endDateOfStudy}
          </div>
        </div>
        <div className="practical-experience">
          PRACTICAL EXPERIENCE:
          <div className="company-name">
            Company name: {this.props.companyName}
          </div>
          <div className="title">Title: {this.props.title}</div>
          <div className="start-date">Start Date: {this.props.startDate}</div>
          <div className="end-date">End Date: {this.props.endDate}</div>
          <div className="end-date">Tasks: {this.props.tasks}</div>
        </div>
      </div>
    );
  }
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
