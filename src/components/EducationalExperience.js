import React from 'react';

class EducationalExperience extends React.Component {
  render() {
    return (
      <div className="educational-experience">
        <label>
          School name:
          <input id="school-name" type="text" />
        </label>
        <input id="title-of-study" type="text" />
        <input id="date-of-study" type="text" />
      </div>
    );
  }
}

export default EducationalExperience;
