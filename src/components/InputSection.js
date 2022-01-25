import React from 'react';
import EducationalExperience from './EducationalExperience';
import GeneralInformation from './GeneralInformation';
import PracticalExperience from './PracticalExperience';
import PropTypes from 'prop-types';

function InputSection(props) {
  return (
    <div id="input-container">
      <GeneralInformation
        onNameChange={props.onNameChange}
        onEmailChange={props.onEmailChange}
        onPhoneNumberChange={props.onPhoneNumberChange}
      />
      <EducationalExperience
        onSchoolNameChange={props.onSchoolNameChange}
        onTitleOfStudyChange={props.onTitleOfStudyChange}
        onStartDateOfStudyChange={props.onStartDateOfStudyChange}
        onEndDateOfStudyChange={props.onEndDateOfStudyChange}
      />
      <PracticalExperience
        onCompanyNameChange={props.onCompanyNameChange}
        onTitleChange={props.onTitleChange}
        onStartDateChange={props.onStartDateChange}
        onEndDateChange={props.onEndDateChange}
        onTasksChange={props.onTasksChange}
      />
    </div>
  );
}
InputSection.propTypes = {
  onSchoolNameChange: PropTypes.func,
  onTitleOfStudyChange: PropTypes.func,
  onStartDateOfStudyChange: PropTypes.func,
  onEndDateOfStudyChange: PropTypes.func,
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
