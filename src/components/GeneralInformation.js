import React from 'react';
import PropTypes from 'prop-types';

class GeneralInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        GENERAL INFORMATION:
        <label>
          Name:
          <input
            type="text"
            id="name"
            onChange={(event) => this.props.onNameChange(event.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            id="name"
            onChange={(event) => this.props.onEmailChange(event.target.value)}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            id="name"
            onChange={(event) =>
              this.props.onPhoneNumberChange(event.target.value)
            }
          />
        </label>
        <div></div>
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
