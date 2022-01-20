import React from 'react';
import PropTypes from 'prop-types';
class EducationalExperience extends React.Component {
  constructor(props) {
    super(props);
  }
  onFocus(event) {
    event.currentTarget.type = 'date';
  }
  render() {
    return (
      <form className="educational-experience">
        <div className="educational-experience-header section-header">
          EDUCATIONAL EXPERIENCE
        </div>
        <label className="school-name-label">
          <input
            id="school-name"
            type="text"
            placeholder="School Name"
            onChange={(event) =>
              this.props.onSchoolNameChange(event.target.value)
            }
          />
        </label>{' '}
        <br />
        <label className="title-of-study-label">
          <input
            id="title-of-study"
            type="text"
            placeholder="Title"
            onChange={(event) =>
              this.props.onTitleOfStudyChange(event.target.value)
            }
          />
        </label>{' '}
        <br />
        <label className="start-date-of-study-label">
          <input
            id="start-date-of-study"
            type="text"
            onFocus={this.onFocus}
            placeholder="Starting Date"
            onChange={(event) =>
              this.props.onStartDateOfStudyChange(event.target.value)
            }
          />
        </label>{' '}
        <br />
        <label className="end-date-of-study-label">
          <input
            id="end-date-of-study"
            type="text"
            onFocus={this.onFocus}
            placeholder="Ending Date"
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
