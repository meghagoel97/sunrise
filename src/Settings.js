import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

export default class SettingsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newUsername: '',
            primaryWeatherLocation: '',
            secondaryWeatherLocation: '',
            newsSites: [],
            gmail: ''
        }
    }


    handleSubmit() {
        console.log(firebase.auth().currentUser)
        console.log(this.state.newUsername);
        console.log(this.state.primaryWeatherLocation);
        console.log(this.state.secondaryWeatherLocation);
        console.log(this.state.newsSites);
        console.log(this.state.gmail)
        console.log(this.state.gmailPassword)

        let currentUser = this.props.currentUser
        //let currentUser = firebase.auth().currentUser
        console.log(currentUser)

        if(this.state.newUsername){
            currentUser.updateProfile({displayName: this.state.username})
        }

        
        let userPrefRef = firebase.database().ref('UserPrefs').child(currentUser.uid)

        userPrefRef.update({
            username: this.state.newUsername,
            primaryWeatherLocation: this.state.primaryWeatherLocation,
            secondaryWeatherLocation: this.state.secondaryWeatherLocation,
            newsSites: this.state.newsSites,
            gmail: this.state.gmail
        })
    }


    handleChange(event) {
        let field = event.target.name;
        let value = event.target.value;

        let changes = {};
        changes[field] = value;
        this.setState(changes);
    }

    newsSourcesChanged(newValues){

        console.log(newValues)
        this.setState({newsSites: newValues})
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
                    <h2> Weather Settings </h2>
                    <label>Set Primary Weather Location:</label>
                    <input className="form-control" name="primaryWeatherLocation" value={this.state.primaryWeatherLocation} onChange={(event) => { this.handleChange(event) }} />
                </div>

                <div className='form-group'>
                    <label>Set Secondary Weather Location (optional):</label>
                    <input className="form-control" name="secondaryWeatherLocation" value={this.state.secondaryWeatherLocation} onChange={(event) => { this.handleChange(event) }} />
                </div>


                <div className='form-group'>
                    <h2>News Sources</h2>
                    <h3>Select Preferred News Sources (minimum 2, maximum 5):</h3>

                    <CheckboxGroup name="newSources" onChange={(event) => { this.newsSourcesChanged(event) }}>

                                <Checkbox value="abc"/>
                                <label>ABC </label>

                                <Checkbox value="fox"/>
                                <label>FOX </label>

                                <Checkbox value="bbc"/>
                                <label>BBC </label>

                                <Checkbox value="cnn"/>
                                <label>CNN </label>

                                <Checkbox value="NY_Times"/>
                                <label>NY Times </label>

                                <Checkbox value="Washington_Post"/>
                                <label>Washington Post </label>


                    </CheckboxGroup>
                </div>

                <div className="form-group">
                    <h2> Google Calender Log-in </h2>
                    <label> Gmail: </label>
                    <input className="form-control" name='gmail' value={this.state.gmail} onChange={(event) => { this.handleChange(event) }} />
                </div>

                <div className='form-group mb-5'>
                    <button className="btn btn-primary mr-2" onClick={() => this.handleSubmit()}> Submit Changes </button>
                </div>
            </div>

        )
    }
}


