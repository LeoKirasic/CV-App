import React from 'react';
import EducationalExperience from './EducationalExperience';
import GeneralInformation from './GeneralInformation';
import PracticalExperience from './PracticalExperience';
import PropTypes from 'prop-types';

class InputSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('input section props', this.props);
    return (
      <div id="input-container">
        <GeneralInformation
          onNameChange={this.props.onNameChange}
          onEmailChange={this.props.onEmailChange}
          onPhoneNumberChange={this.props.onPhoneNumberChange}
        />
        <EducationalExperience
          onSchoolNameChange={this.props.onSchoolNameChange}
          onTitleOfStudyChange={this.props.onTitleOfStudyChange}
          onDateOfStudyChange={this.props.onDateOfStudyChange}
        />
        <PracticalExperience />
        <button type="submit">Main button</button>
      </div>
    );
  }
}
InputSection.propTypes = {
  onSchoolNameChange: PropTypes.func,
  onTitleOfStudyChange: PropTypes.func,
  onDateOfStudyChange: PropTypes.func,
  onNameChange: PropTypes.func,
  onEmailChange: PropTypes.func,
  onPhoneNumberChange: PropTypes.func,
};
export default InputSection;
