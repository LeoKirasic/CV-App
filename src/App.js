import React from 'react';
import './App.css';
import InputSection from './components/InputSection';
import OutputSection from './components/OutputSection';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      schoolName: 'School',
      titleOfStudy: '',
      dateOfStudy: '',
      //   // companyName: '',
      //   // title: '',
      //   // startDate: '',
      //   // endDate: '',
    };
  }

  render() {
    return (
      <div id="main-container">
        <InputSection
          onSchoolNameChange={(value) => this.setState({ schoolName: value })}
          schoolName={this.state.schoolName}
          onTitleOfStudyChange={(value) =>
            this.setState({ titleOfStudy: value })
          }
          onDateOfStudyChange={(value) => this.setState({ dateOfStudy: value })}
          onNameChange={(value) => this.setState({ name: value })}
          onEmailChange={(value) => this.setState({ email: value })}
          onPhoneNumberChange={(value) => this.setState({ phoneNumber: value })}
        />
        <OutputSection
          schoolName={this.state.schoolName}
          titleOfStudy={this.state.titleOfStudy}
          dateOfStudy={this.state.dateOfStudy}
          name={this.state.name}
          email={this.state.email}
          phoneNumber={this.state.phoneNumber}
        />
      </div>
    );
  }
}

App.propTypes = {
  onSchoolNameChange: PropTypes.func,
  onTitleOfStudyChange: PropTypes.func,
  onDateOfStudyChange: PropTypes.func,
  onNameChange: PropTypes.func,
  onEmailChange: PropTypes.func,
  onPhoneNumberChange: PropTypes.func,
};
export default App;
