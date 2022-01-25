import React, { useState } from 'react';
import './App.scss';
import InputSection from './components/InputSection';
import OutputSection from './components/OutputSection';
import Header from './components/Header';
import PropTypes from 'prop-types';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [titleOfStudy, SetTitleOfStudy] = useState('');
  const [startDateOfStudy, setStartDateOfStudy] = useState('');
  const [endDateOfStudy, setEndDateOfStudy] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [tasks, setTasks] = useState('');

  return (
    <div id="main-container">
      <Header />
      <InputSection
        onSchoolNameChange={(value) => setSchoolName(value)}
        onTitleOfStudyChange={(value) => SetTitleOfStudy(value)}
        onStartDateOfStudyChange={(value) => setStartDateOfStudy(value)}
        onEndDateOfStudyChange={(value) => setEndDateOfStudy(value)}
        onNameChange={(value) => setName(value)}
        onEmailChange={(value) => setEmail(value)}
        onPhoneNumberChange={(value) => setPhoneNumber(value)}
        onCompanyNameChange={(value) => setCompanyName(value)}
        onTitleChange={(value) => setTitle(value)}
        onStartDateChange={(value) => setStartDate(value)}
        onEndDateChange={(value) => setEndDate(value)}
        onTasksChange={(value) => setTasks(value)}
      />
      <OutputSection
        schoolName={schoolName}
        titleOfStudy={titleOfStudy}
        startDateOfStudy={startDateOfStudy}
        endDateOfStudy={endDateOfStudy}
        name={name}
        email={email}
        phoneNumber={phoneNumber}
        companyName={companyName}
        title={title}
        startDate={startDate}
        endDate={endDate}
        tasks={tasks}
      />
    </div>
  );
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
