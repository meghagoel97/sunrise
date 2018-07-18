import React, { Component } from 'react';
import Weather from './Weather.js'

class App extends Component {
  render() {
    return (
      <Weather city={this.props.city} country={this.props.country}/>
    );
  }
}

export default App;

