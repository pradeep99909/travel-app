import React from 'react'
import { Link } from 'react-router-dom'
import firebase from "../../config/firebase"

import SocialLogin from '../social/sociallogin'

class RegisterForm extends React.Component{
    constructor(){
        super()
        this.state={
            name:"",
            email:"",
            password:"",
            cpassword:'',
            check:null
        }
    }

    register=(e)=>{
        e.preventDefault()
        if(this.state.email!="" || this.state.name!="" || this.state.password!="" || this.state.cpassword){
                if(this.state.cpassword==this.state.password){
                    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(
                        (user)=>{
                            firebase.database().ref().child('users').child(user.uid).set(
                                {
                                    'email':user.email,
                                    'name':this.state.name
                                }
                            )
                        }
                    )
                }
            }
        }

    handlechange=(e)=>{
        this.setState(
            {
                [e.target.name]:e.target.value
            }
        )
    }

    check=(e)=>{
        this.setState(
            {
                [e.target.name]:e.target.checked
            }
        )
    }

    render(){
        return(
            <form>
                <span class="form-group has-float-label">
                    <label for="name">Name</label>
                    <input className="form-control is-invalid" id="name" type="text" name="name" />
                    <span className="form-name-error">Please correct the error</span>
                </span>
                <span className="form-group has-float-label">
                    <label for="email">Email</label>
                    <input className="form-control" id="email" type="email" name="email" />
                    <span className="form-name-error">Please correct the error</span>
                </span>
                <span className="form-group has-float-label">
                    <label for="password">Password</label>
                    <input className="form-control" id="password" type="password" name="password" />
                    <span className="form-name-error">Please correct the error</span>
                </span>
                <span className="form-group has-float-label">
                    <label for="cpassword">Confirm Password</label>
                    <input className="form-control" id="cpassword" type="password" name="cpassword" />
                    <span className="form-name-error">Please correct the error</span>
                </span>
                <div className="input-group" style={{fontSize:'14px',flexDirection:'row',alignItems:'center'}}>
                    <input onChange={this.check} type='checkbox' name='check' />
                    <label>Remember Me</label>
                </div>
                <div className="input-group" style={{flexDirection:'row',alignItems:'center'}}>
                    <Link style={{color:'white',fontFamily:'sans-serif',fontSize:'14px'}} to="/forgot-password">Forgot Password</Link>
                </div>
                <div className="input-group" style={{flexDirection:'row',alignItems:'center'}}>
                    <button name='login' onClick={this.register}>Register</button>
                </div>
            </form>
        )
    }
}

class RegisterMain extends React.Component{
    render(){
        return(
            <div className="login-main">
                <h3>Registeration</h3>
                <RegisterForm />
                <SocialLogin />
            </div>
        )
    }
}




export default RegisterMain