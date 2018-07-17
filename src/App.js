import React, { Component } from 'react';
import SignUpForm from './SignUp'; 
import SettingsForm from './Settings'
import SignInForm from './SignIn'
import {BrowserRouter, Route, Switch, Link, NavLink, Redirect} from 'react-router-dom'

export default class App extends Component {
  render() {

    return (
      <div>
        <SignUpForm />
        <SignInForm/>
        <SettingsForm currentUser={this.props.currentUser}/>
      </div>
    );
  }
}
