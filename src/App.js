import React, { Component } from 'react';
import './App.css';
import EducationalExperience from './components/EducationalExperience';
import GeneralInformation from './components/GeneralInformation';
import PracticalExperience from './components/PracticalExperience';

class App extends React.Component {
  render() {
    return (
      <div>
        <GeneralInformation />
        <EducationalExperience />
        <PracticalExperience />
      </div>
    );
  }
}
export default App;
