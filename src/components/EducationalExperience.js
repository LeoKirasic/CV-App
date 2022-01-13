import React from 'react';

class EducationalExperience extends React.Component {
  render() {
    return (
      <div className="educational-experience">
        <label>
          School name:
          <input id="school-name" type="text" />
        </label>
        <label>
          Title Of Study:
          <input id="title-of-study" type="text" />
        </label>
        <label>
          Date Of Study
          <input id="date-of-study" type="text" />
        </label>
      </div>
    );
  }
}

export default EducationalExperience;
