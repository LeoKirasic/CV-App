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
      //   // titleOfStudy: '',
      //   // dateOfStudy: '',
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
          onChange={(value) => this.setState({ schoolName: value })}
          schoolName={this.state.schoolName}
        />
        <OutputSection schoolName={this.state.schoolName} />
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  SchoolName: PropTypes.string,
  onChange: PropTypes.func,
};
export default App;
