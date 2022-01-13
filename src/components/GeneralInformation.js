import React, { Component } from 'react';

class GeneralInformation extends React.Component {
  render() {
    return (
      <div className="general-information">
        <label>
          Name:
          <input id="name" type="text" />
        </label>
        <label>
          Email:
          <input type="email" name="" id="" />
        </label>
        <label>
          Phone Number:
          <input type="text" />
        </label>
      </div>
    );
  }
}

export default GeneralInformation;
