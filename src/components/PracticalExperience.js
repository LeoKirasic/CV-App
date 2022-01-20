import React from 'react';
import PropTypes from 'prop-types';

class PracticalExperience extends React.Component {
  render() {
    return (
      <form className="practical-experience-form">
        <header className="practical-experience-header">
          PRACTICAL EXPERIENCE
        </header>
        <label className="company-name-label">
          <div className="company-name-header">Company Name:</div>
          <input
            id="company-name"
            type="text"
            onChange={(event) =>
              this.props.onCompanyNameChange(event.target.value)
            }
          />
        </label>
        <label className="title-label">
          <div className="title-header">Title:</div>
          <input
            id="title"
            type="text"
            onChange={(event) => this.props.onTitleChange(event.target.value)}
          />
        </label>
        <label className="start-date-label">
          <div className="start-date-header">Start Date:</div>
          <input
            id="start-date"
            type="date"
            onChange={(event) =>
              this.props.onStartDateChange(event.target.value)
            }
          />
        </label>
        <label className="end-date-label">
          <div className="end-date-header">End Date:</div>
          <input
            id="end-date"
            type="date"
            onChange={(event) => this.props.onEndDateChange(event.target.value)}
          />
        </label>
        <label className="tasks-label">
          <div className="tasks-header">Tasks:</div>
          <textarea
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
