import React from 'react'
import Slider from '../slider/slider'
import { Link , Route, Switch} from 'react-router-dom'
import firebase from "../../config/firebase"
import { Suspense, lazy } from 'react';

import SocialLogin from '../social/sociallogin'
import RegisterMain from '../register/register'

class LoginForm extends React.Component{
    constructor(){
        super()
        this.state={
            email:"",
            password:"",
            check:null
        }
    }

    login=(e)=>{
        e.preventDefault()
        //if()
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
                    <label for="email">Email</label>
                    <input class="form-control" id="email" type="email" name="email" />
                </span>
                <span class="form-group has-float-label">
                    <label for="password">Password</label>
                    <input class="form-control" id="password" type="password" name="password" />
                </span>
                <div className="input-group" style={{fontSize:'14px',flexDirection:'row',alignItems:'center'}}>
                    <input onChange={this.check} type='checkbox' name='check' />
                    <label>Remember Me</label>
                </div>
                <div className="input-group" style={{flexDirection:'row',alignItems:'center'}}>
                    <Link style={{color:'white',fontFamily:'sans-serif',fontSize:'14px'}} to="/forgot-password">Forgot Password</Link>
                </div>
                <div className="input-group" style={{flexDirection:'row',alignItems:'center'}}>
                    <button name='login' onClick={this.login}>Login</button>
                </div>
            </form>
        )
    }
}

class LoginMain extends React.Component{
    render(){
        return(
            <div className="login-main">
                <h3>Login</h3>
                <LoginForm />
                <SocialLogin />
            </div>
        )
    }
}

class Login extends React.Component{
    render(){
        return(
            <div className="login-page">
                <Slider />
                <Switch>
                    <Route path="/login" component={LoginMain} exact/> 
                </Switch>
            </div>

        );
    }
}

export default Login