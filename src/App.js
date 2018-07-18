import React, { Component } from 'react';
import SignUpForm from './SignUp'; 
import SettingsForm from './Settings'
import SignInForm from './SignIn'
import {BrowserRouter, Route, Switch, Link, NavLink, Redirect} from 'react-router-dom'
import Weather from './Weather.js'

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
              <li>
                <NavLink to='/Weather' className="nav-link"> Weather </NavLink>
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

             <Route path="/Weather"  render= {(routerProps) => {
                return <Weather {...routerProps} currentUser={this.props.currentUser} primaryWeather={this.props.userInfo.primaryWeatherLocation} secondaryWeather={this.props.userInfo.secondaryWeatherLocation} thirdWeather={this.props.userInfo.thirdWeatherLocation} />
              }
              }/>
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





//       <Weather city={this.props.city} country={this.props.country}/>
//     );
//   }
// }


