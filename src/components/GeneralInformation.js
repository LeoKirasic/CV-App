import React from 'react';
import PropTypes from 'prop-types';

class GeneralInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="general-information-form">
        <div className="general-information-header">GENERAL INFORMATION</div>
        <label className="name-label">
          <div className="name-header">Name:</div>
          <input
            type="text"
            id="name"
            onChange={(event) => this.props.onNameChange(event.target.value)}
          />
        </label>
        <label className="email-label">
          <div className="email-heading">Email:</div>
          <input
            type="text"
            id="name"
            onChange={(event) => this.props.onEmailChange(event.target.value)}
          />
        </label>
        <label className="phone-number-label">
          <div className="phone-number-heading">Phone Number:</div>
          <input
            type="text"
            id="name"
            onChange={(event) =>
              this.props.onPhoneNumberChange(event.target.value)
            }
          />
        </label>
      </form>
    );
  }
}
GeneralInformation.propTypes = {
  onNameChange: PropTypes.func,
  onEmailChange: PropTypes.func,
  onPhoneNumberChange: PropTypes.func,
};
export default GeneralInformation;
