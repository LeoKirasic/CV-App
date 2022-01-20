import React from 'react';
import PropTypes from 'prop-types';
class EducationalExperience extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form className="educational-experience">
        <div className="educational-experience-header">
          EDUCATIONAL EXPERIENCE
        </div>
        <label className="school-name-label">
          <div className="school-name-header">School name:</div>
          <input
            id="school-name"
            type="text"
            onChange={(event) =>
              this.props.onSchoolNameChange(event.target.value)
            }
          />
        </label>
        <label className="title-of-study-label">
          <div className="title-of-study-header">Title of study:</div>
          <input
            id="title-of-study"
            type="text"
            onChange={(event) =>
              this.props.onTitleOfStudyChange(event.target.value)
            }
          />
        </label>
        <label className="start-date-of-study-label">
          <div className="start-date-of-study-header">From:</div>
          <input
            id="start-date-of-study"
            type="date"
            onChange={(event) =>
              this.props.onStartDateOfStudyChange(event.target.value)
            }
          />
        </label>
        <label className="end-date-of-study-label">
          <div className="end-date-of-study-header">To:</div>
          <input
            id="end-date-of-study"
            type="date"
            onChange={(event) =>
              this.props.onEndDateOfStudyChange(event.target.value)
            }
          />
        </label>
      </form>
    );
  }
}

EducationalExperience.propTypes = {
  schoolName: PropTypes.string,
  onSchoolNameChange: PropTypes.func,
  onTitleOfStudyChange: PropTypes.func,
  onStartDateOfStudyChange: PropTypes.func,
  onEndDateOfStudyChange: PropTypes.func,
};
export default EducationalExperience;
