import React from 'react';
import PropTypes from 'prop-types';

class PracticalExperience extends React.Component {
  onFocus(event) {
    event.currentTarget.type = 'date';
  }
  render() {
    return (
      <form className="practical-experience-form">
        <header className="practical-experience-header section-header">
          PRACTICAL EXPERIENCE
        </header>
        <label className="company-name-label">
          <input
            id="company-name"
            type="text"
            placeholder="Company Name"
            onChange={(event) =>
              this.props.onCompanyNameChange(event.target.value)
            }
          />
        </label>{' '}
        <br />
        <label className="title-label">
          <input
            id="title"
            type="text"
            placeholder="Title"
            onChange={(event) => this.props.onTitleChange(event.target.value)}
          />
        </label>{' '}
        <br />
        <label className="start-date-label">
          <input
            id="start-date"
            type="text"
            placeholder="Start Date"
            onFocus={this.onFocus}
            onChange={(event) =>
              this.props.onStartDateChange(event.target.value)
            }
          />
        </label>{' '}
        <br />
        <label className="end-date-label">
          <input
            id="end-date"
            type="text"
            placeholder="End Date"
            onFocus={this.onFocus}
            onChange={(event) => this.props.onEndDateChange(event.target.value)}
          />
        </label>{' '}
        <br />
        <label className="tasks-label">
          <textarea
            id="tasks"
            type="text"
            placeholder="Tasks"
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
