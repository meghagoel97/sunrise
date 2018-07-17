import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export default class SettingsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newUsername: '',
            newPassword: '',
            weatherLocations: [],
            newsSites: [],
            googleCalCreds: []
        }
    }


    handleSubmit() {
        console.log(this.state.username);
        console.log(this.state.password);
        console.log(this.state.weatherLocations);

    }


    handleChange(event) {
        let field = event.target.name;
        let value = event.target.value;

        let changes = {};
        changes[field] = value;
        this.setState(changes);
    }

    render() {

        return (
            <div className="container">
                <h1> Settings </h1>

                <div className='form-group'>
                    <h2> User Settings </h2>
                    <label>Change Username: </label>
                    <input className="form-control" name="newUsername" type="text" value={this.state.newUsername} onChange={(event) => { this.handleChange(event) }} />
                </div>

                <div className='form-group'>
                    <label>Change Password:</label>
                    <input type="password" className="form-control" name="newPassword" value={this.state.newPassword} onChange={(event) => { this.handleChange(event) }} />
                </div>


                <div className='form-group'>
                    <h2> Weather Settings </h2>
                    <label>Set Primary Weather Location:</label>
                    <input className="form-control" name="firstWeatherLocation" value={this.state.weatherLocations[0]} onChange={(event) => { this.handleChange(event) }} />
                </div>

                <div className='form-group'>
                    <label>Set Secondary Weather Location (optional):</label>
                    <input className="form-control" name="secondWeatherLocation" value={this.state.weatherLocations[1]} onChange={(event) => { this.handleChange(event) }} />
                </div>

                <div className='form-group'>
                    <h2>News Sources</h2>
                    <h3>Select Preferred News Sources (minimum 2, maximum 5):</h3>
                    <ul>
                        <li>
                            <label>news source 1 </label>
                            <input type='checkbox' className="form-control" name="news source 1" value={this.state.newsSites} onChange={(event) => { this.handleChange(event) }} />
                        </li>
                        <li>
                            <label>news source 2 </label>
                            <input type='checkbox' className="form-control" name="news source 2" value={this.state.newsSites} onChange={(event) => { this.handleChange(event) }} />
                        </li>
                        <li>
                            <label>news source 3 </label>
                            <input type='checkbox' className="form-control" name="news source 3" value={this.state.newsSites} onChange={(event) => { this.handleChange(event) }} />
                        </li>
                        <li>
                            <label>news source 4 </label>
                            <input type='checkbox' className="form-control" name="news source 4" value={this.state.newsSites} onChange={(event) => { this.handleChange(event) }} />
                        </li>
                        <li>
                            <label>news source 5 </label>
                            <input type='checkbox' className="form-control" name="news source 5" value={this.state.newsSites} onChange={(event) => { this.handleChange(event) }} />
                        </li>
                        <li>
                            <label>news source 6 </label>
                            <input type='checkbox' className="form-control" name="news source 6" value={this.state.newsSites} onChange={(event) => { this.handleChange(event) }} />
                        </li>
                        <li>
                            <label>news source 7 </label>
                            <input type='checkbox' className="form-control" name="news source 7" value={this.state.newsSites} onChange={(event) => { this.handleChange(event) }} />
                        </li>
                    </ul>
                </div>



                <div className='form-group mb-5'>
                    <button className="btn btn-primary mr-2" onClick={() => this.handleSubmit()}> Submit Changes </button>
                </div>
            </div>

        )
    }
}

//Values to set:

//Prefered news sites: checkboxes, can have at least 3? max? only 3?

//Username input box


//Weather locations
//up to 3? more?

//Google Calendar credentials??

//SUbmit button!!!
