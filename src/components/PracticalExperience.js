import React from 'react';

class PracticalExperience extends React.Component {
  render() {
    return (
      <div className="practical-experience">
        <label>
          Company name:
          <input id="company-name" type="text" />
        </label>
        <label>
          Title:
          <input id="title" type="text" />
        </label>
        <label>
          Start Date:
          <input id="start-month" type="month" />
        </label>
        <label>
          End Date:
          <input id="end-month" type="month" />
        </label>
      </div>
    );
  }
}

export default PracticalExperience;
