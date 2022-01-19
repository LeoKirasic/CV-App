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
        <PracticalExperience
          onCompanyNameChange={this.props.onCompanyNameChange}
          onTitleChange={this.props.onTitleChange}
          onStartDateChange={this.props.onStartDateChange}
          onEndDateChange={this.props.onEndDateChange}
          onTasksChange={this.props.onTasksChange}
        />
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
  onCompanyNameChange: PropTypes.func,
  onTitleChange: PropTypes.func,
  onStartDateChange: PropTypes.func,
  onEndDateChange: PropTypes.func,
  onTasksChange: PropTypes.func,
};
export default InputSection;
