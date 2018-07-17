import React, { Component } from 'react';

import SignUpForm from './SignUp'; 
import SettingsForm from './Settings'
import SignInForm from './SignIn'
class App extends Component {
  render() {
    return (
      <div>
        <SignUpForm />
        <SignInForm/>
        <SettingsForm/>
      </div>
    );
  }
}

export default App;
