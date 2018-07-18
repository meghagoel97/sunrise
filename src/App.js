import React, { Component } from 'react';
import SignUpForm from './SignUp'; 
import SettingsForm from './Settings'
import SignInForm from './SignIn'
import {BrowserRouter, Route, Switch, Link, NavLink, Redirect} from 'react-router-dom'

export default class App extends Component {
  render() {

    return (
      <div>
      <BrowserRouter>
        <div className="container">
          <h1> Sunrise </h1>
          <nav>
            <ul className='nav'>
              <li>
                <NavLink exact to='/' className="nav-link"> Home </NavLink>
              </li>
              <li>
                <NavLink to='/Settings' className="nav-link"> Settings </NavLink>
              </li>
              <li>
                <NavLink to='/SignIn' className="nav-link"> Sign-In </NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
              <Route exact path="/" component={SignUpForm} />
              <Route path="/Settings"  render= {(routerProps) => {
                return <SettingsForm {...routerProps} currentUser={this.props.currentUser} />
              }
              }/>
              <Route path="/SignIn" component={SignInForm}/>
          </Switch>

        </div>
      </BrowserRouter>
      
      {/* <div>
        <SignUpForm />
        <SignInForm/>
        <SettingsForm currentUser={this.props.currentUser}/>
      </div> */}
      </div>
    );
  }
}
