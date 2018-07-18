import React, { Component } from 'react';
import News from './News'

export class App extends Component {
  render() {
    let newsSites = {
      0 : 'the-new-york-times',
      1 : 'reuters',
      2 : 'al-jazeera-english'
    }
    console.log(newsSites);
    return (
      <div>
        <News newsSources={newsSites}/>
      </div>
    );
  }
}


export default App;

// TO DO: 
  // 1. Attribution
  // 2. CSS
  // 3. name manipulation
  // 4. Source
  // 5. Date 