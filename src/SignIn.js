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
        .catch((error) => {
            console.log(error);
            this.setState({errorMessage: error.message});
        })

    }

    handleSignOut(){
        this.setState({errorMessage:null})
        firebase.auth().signOut()
        .catch((err) => {
            console.log(err);
            this.setState({errorMessage: err.message})
        })
    }

    handleChange(event){
        let field = event.target.name;
        let value = event.target.value;

        let changes = {};
        changes[field] = value;
        this.setState(changes);
    }


    render(){

        let userMessage= null;
        if(this.state.user){
            console.log('hi')
            userMessage = <div className="alert alert-success"> <h3>Logged in as: {this.state.user}</h3></div>;
        }

        return(
            <div className="container">
                <h1> Sign In </h1>
                {this.state.errorMessage && 
                <p class="alert alert-danger"> {this.state.errorMessage}</p>}

                {userMessage}
                <div className='form-group'>
                    <label>Enter Email Address: </label>
                    <input className="form-control" name="email" type= "text" value={this.state.email} onChange={(event) => {this.handleChange(event)}}/>
                </div>
    
                <div className='form-group'>
                    <label>Enter Password:</label>
                    <input type="password" className="form-control" name="password" value={this.state.password} onChange={(event) => {this.handleChange(event)}}/>  
                </div>
    
                <div className='form-group mb-5'>
                    <button className="btn btn-primary mr-2" onClick={() => this.handleSignIn()}> Sign In </button> 
                    <button className="btn btn-primary mr-2" onClick={() => this.handleSignOut()}> Sign Out </button> 
                </div>
            </div> 
            );
    }
}