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
            Date Of Study: {this.props.dateOfStudy}
          </div>
        </div>
      </div>
    );
  }
}

OutputSection.propTypes = {
  schoolName: PropTypes.string,
  titleOfStudy: PropTypes.string,
  dateOfStudy: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
};

export default OutputSection;
