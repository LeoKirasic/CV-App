import React from 'react';
import PropTypes from 'prop-types';
class EducationalExperience extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form className="educational-experience">
        EDUCATIONAL EXPERIENCE:
        <label>
          School name:
          <input
            id="school-name"
            type="text"
            onChange={(event) =>
              this.props.onSchoolNameChange(event.target.value)
            }
          />
        </label>
        <label>
          Title Of Study:
          <input
            id="title-of-study"
            type="text"
            onChange={(event) =>
              this.props.onTitleOfStudyChange(event.target.value)
            }
          />
        </label>
        <label>
          Date Of Study:
          <input
            id="date-of-study"
            type="date"
            onChange={(event) =>
              this.props.onDateOfStudyChange(event.target.value)
            }
          />
        </label>
        <input type="button" value="" />
      </form>
    );
  }
}

EducationalExperience.propTypes = {
  schoolName: PropTypes.string,
  onSchoolNameChange: PropTypes.func,
  onTitleOfStudyChange: PropTypes.func,
  onDateOfStudyChange: PropTypes.func,
};
export default EducationalExperience;
