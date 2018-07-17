import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
 
export default class SignUpForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSignUp(){
        this.setState({errorMessage:null});
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            

    }

    handleChange(event){
        let field = event.target.name;
        let value = event.target.value;

        let changes = {};
        changes[field] = value;
        this.setState(changes);
    }

    render(){


        return(



        <div className="container">
            <h1> Sign Up </h1>

            <div className='form-group'>
                <label>Enter Email Address: </label>
                <input className="form-control" name="email" type= "text" value={this.state.email} onChange={(event) => {this.handleChange(event)}}/>
            </div>

            <div className='form-group'>
                <label>Enter Password:</label>
                <input type="password" className="form-control" name="password" value={this.state.password} onChange={(event) => {this.handleChange(event)}}/>
                
                
            </div>

            <div className='form-group mb-5'>
                <button className="btn btn-primary mr-2" onClick={() => this.handleSignUp()}> Create Account </button> 
            </div>
        </div>
        

        
        
        );
    }
}