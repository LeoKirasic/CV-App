import React from 'react';
import PropTypes from 'prop-types';
class EducationalExperience extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form className="educational-experience">
        <label>
          School name:
          <input
            id="school-name"
            type="text"
            onChange={(event) => this.props.onChange(event.target.value)}
          />
        </label>
        <label>
          Title Of Study:
          <input id="title-of-study" type="text" />
        </label>
        <label>
          Date Of Study
          <input id="date-of-study" type="text" />
        </label>
        <input type="button" value="" />
      </form>
    );
  }
}

EducationalExperience.propTypes = {
  schoolName: PropTypes.string,
  onChange: PropTypes.func,
};
export default EducationalExperience;
