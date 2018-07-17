import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

export default class SignInForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            username: ''
        };
    }
    

    handleSignIn(){
        this.setState({errorMessage:null})
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)

    }

    handleSignOut(){
        this.setState({errorMessage:null})
        firebase.auth().signOut()
    }

    render(){

        return(



            <div className="container">
                <h1> Sign In </h1>
    
                <div className='form-group'>
                    <label>Enter Email Address: </label>
                    <input className="form-control" name="email" type= "text" value={this.state.email} onChange={(event) => {this.handleChange(event)}}/>
                </div>
    
                <div className='form-group'>
                    <label>Enter Password:</label>
                    <input type="password" className="form-control" name="password" value={this.state.password} onChange={(event) => {this.handleChange(event)}}/>  
                </div>
    
                <div className='form-group mb-5'>
                    <button className="btn btn-primary mr-2" onClick={() => this.handleSignUp()}> Sign In </button> 
                    <button className="btn btn-primary mr-2" onClick={() => this.handleSignOut()}> Sign Out </button> 
                </div>
            </div>
            
    
            
            
            );
    }
}