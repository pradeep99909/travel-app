import React from 'react'
import Slider from '../slider/slider'
import { Link } from 'react-router-dom'

class LoginForm extends React.Component{
    constructor(){
        super()
        this.state={
            email:"",
            password:"",
            check:null
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
                <div className="input-group">
                    <input type='email' onChange={this.handlechange} name='email' />
                    <label>Email</label>
                </div>
                <div className="input-group">
                    <input type='password' onChange={this.handlechange} name='password' />
                    <label>Password</label>
                </div>
                <div className="input-group" style={{fontSize:'14px',flexDirection:'row',alignItems:'center'}}>
                    <input onChange={this.check} type='checkbox' name='check' />
                    <label>Remember Me</label>
                </div>
                <div className="input-group" style={{flexDirection:'row',alignItems:'center'}}>
                    <Link style={{color:'white',fontFamily:'sans-serif',fontSize:'14px'}} to="/forgot-password">Forgot Password</Link>
                </div>
                <div className="input-group" style={{flexDirection:'row',alignItems:'center'}}>
                    <button name='login'>Login</button>
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