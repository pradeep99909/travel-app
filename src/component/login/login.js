import React from 'react'
import Slider from '../slider/slider'
import { Link } from 'react-router-dom'

import SocialLogin from '../social/sociallogin'

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
                    <input class="form-control" id="email" type="email" />
                    <label for="email">Email</label>
                </span>
                <span class="form-group has-float-label">
                    <input class="form-control" id="password" type="password" />
                    <label for="email">Password</label>
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
                <LoginMain />
            </div>

        );
    }
}

export default Login