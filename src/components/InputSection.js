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
        <GeneralInformation />
        <EducationalExperience
          onChange={this.props.onChange}
          schoolName={this.props.schoolName}
        />
        <PracticalExperience />
        <button type="submit">Main button</button>
      </div>
    );
  }
}
InputSection.propTypes = {
  schoolName: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  onChange: PropTypes.func,
};
export default InputSection;
