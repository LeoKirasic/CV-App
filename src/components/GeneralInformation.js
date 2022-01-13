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
          <input type="email" name="" id="email" />
        </label>
        <label>
          Phone Number:
          <input id="phone-mumber" type="text" />
        </label>
      </div>
    );
  }
}

export default GeneralInformation;
