import React from 'react';

class PracticalExperience extends React.Component {
  render() {
    return (
      <div className="practical-experience">
        <label>
          Company name:
          <input type="text" />
        </label>
        <label>
          Title:
          <input type="text" />
        </label>
        <label>
          Start Date:
          <input type="month" />
        </label>
        <label>
          End Date:
          <input type="month" />
        </label>
      </div>
    );
  }
}

export default PracticalExperience;
