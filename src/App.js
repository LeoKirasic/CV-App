import React from 'react';
import './App.scss';
import InputSection from './components/InputSection';
import OutputSection from './components/OutputSection';
import Header from './components/Header';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phoneNumber: '',

      schoolName: '',
      titleOfStudy: '',
      startDateOfStudy: '',
      endDateOfStudy: '',

      companyName: '',
      title: '',
      startDate: '',
      endDate: '',
      tasks: '',
    };
  }

  render() {
    return (
      <div id="main-container">
        <Header />
        <InputSection
          onSchoolNameChange={(value) => this.setState({ schoolName: value })}
          schoolName={this.state.schoolName}
          onTitleOfStudyChange={(value) =>
            this.setState({ titleOfStudy: value })
          }
          onStartDateOfStudyChange={(value) =>
            this.setState({ startDateOfStudy: value })
          }
          onEndDateOfStudyChange={(value) =>
            this.setState({ endDateOfStudy: value })
          }
          onNameChange={(value) => this.setState({ name: value })}
          onEmailChange={(value) => this.setState({ email: value })}
          onPhoneNumberChange={(value) => this.setState({ phoneNumber: value })}
          onCompanyNameChange={(value) => this.setState({ companyName: value })}
          onTitleChange={(value) => this.setState({ title: value })}
          onStartDateChange={(value) => this.setState({ startDate: value })}
          onEndDateChange={(value) => this.setState({ endDate: value })}
          onTasksChange={(value) => this.setState({ tasks: value })}
        />
        <OutputSection
          schoolName={this.state.schoolName}
          titleOfStudy={this.state.titleOfStudy}
          startDateOfStudy={this.state.startDateOfStudy}
          endDateOfStudy={this.state.endDateOfStudy}
          name={this.state.name}
          email={this.state.email}
          phoneNumber={this.state.phoneNumber}
          companyName={this.state.companyName}
          title={this.state.title}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          tasks={this.state.tasks}
        />
      </div>
    );
  }
}

App.propTypes = {
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
};
export default App;
