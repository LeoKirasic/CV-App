import React from 'react';
import PropTypes from 'prop-types';

class PracticalExperience extends React.Component {
  render() {
    return (
      <form className="practical-experience">
        <label>
          Company name:
          <input
            id="company-name"
            type="text"
            onChange={(event) =>
              this.props.onCompanyNameChange(event.target.value)
            }
          />
        </label>
        <label>
          Title:
          <input
            id="title"
            type="text"
            onChange={(event) => this.props.onTitleChange(event.target.value)}
          />
        </label>
        <label>
          Start Date:
          <input
            id="start-date"
            type="text"
            onChange={(event) =>
              this.props.onStartDateChange(event.target.value)
            }
          />
        </label>
        <label>
          End Date:
          <input
            id="end-date"
            type="text"
            onChange={(event) => this.props.onEndDateChange(event.target.value)}
          />
        </label>
        <label>
          Tasks:
          <input
            id="tasks"
            type="text"
            onChange={(event) => this.props.onTasksChange(event.target.value)}
          />
        </label>
      </form>
    );
  }
}

PracticalExperience.propTypes = {
  onCompanyNameChange: PropTypes.func,
  onTitleChange: PropTypes.func,
  onStartDateChange: PropTypes.func,
  onEndDateChange: PropTypes.func,
  onTasksChange: PropTypes.func,
};

export default PracticalExperience;
