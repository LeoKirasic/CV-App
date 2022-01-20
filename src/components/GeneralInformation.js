import React from 'react';
import PropTypes from 'prop-types';

class GeneralInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="general-information-form">
        <div className="general-information-header section-header">
          GENERAL INFORMATION
        </div>
        <label className="name-label">
          <input
            type="text"
            id="name"
            placeholder="Name"
            onChange={(event) => this.props.onNameChange(event.target.value)}
          />
        </label>{' '}
        <br />
        <label className="email-label">
          <input
            type="text"
            id="email"
            placeholder="Email"
            onChange={(event) => this.props.onEmailChange(event.target.value)}
          />
        </label>{' '}
        <br />
        <label className="phone-number-label">
          <input
            type="text"
            id="phone-number"
            placeholder="Phone Number"
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
