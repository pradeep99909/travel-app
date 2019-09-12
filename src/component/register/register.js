import React from 'react'
import { Link , withRouter } from 'react-router-dom'
import firebase from "../../config/firebase"

import SocialLogin from '../social/sociallogin'

import history from '../../history'

class RegisterForm extends React.Component{
    constructor(props){
        super(props)
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
        //const h={this.props}
        if(this.state.email!="" || this.state.name!="" || this.state.password!="" || this.state.cpassword){
                if(this.state.cpassword==this.state.password){
                    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(
                        (cred)=>{
                            firebase.database().ref().child('users').child(cred.user.uid).set(
                                {
                                    'email':cred.user.uid,
                                    'name':this.state.name
                                }
                            ).then(()=>{
                                history.push("/dashboard")
                            })
                            
                        }
                    ).catch(
                        (error)=>{
                            console.log(error.message)
                        }
                    )
                }
            }
            //this.props.history.push('/login')
        }

    handlechange=(e)=>{
        this.setState(
            {
                [e.target.name]:e.target.value
            }
        )
        console.log(this.state)
    }

    check=(e)=>{
        this.setState(
            {
                [e.target.name]:e.target.checked
            }
        )
    }

    noval=(e)=>{
        if(e.target.value==""){
            document.getElementById(e.target.name +"-error").innerHTML="Fill the Text"
            //console.log(e.target.name)
        }
        else{
            document.getElementById(e.target.name +"-error").innerHTML=""
        }
    }

    render(){
        return(
            <form>
                <span class="form-group has-float-label">
                    <label for="name">Name</label>
                    <input className="form-control is-invalid" onBlur={this.noval} id="name" type="text" name="name" onKeyUp={this.handlechange} />
                    <span className="form-name-error" id="name-error">Please correct the error</span>
                </span>
                <span className="form-group has-float-label">
                    <label for="email">Email</label>
                    <input className="form-control" id="email" type="email" name="email" onKeyUp={this.handlechange} />
                    <span className="form-email-error">Please correct the error</span>
                </span>
                <span className="form-group has-float-label">
                    <label for="password">Password</label>
                    <input className="form-control" id="password" type="password" name="password" onKeyUp={this.handlechange} />
                    <span className="form-pass-error">Please correct the error</span>
                </span>
                <span className="form-group has-float-label">
                    <label for="cpassword">Confirm Password</label>
                    <input className="form-control" id="cpassword" type="password" name="cpassword" onKeyUp={this.handlechange} />
                    <span className="form-cpass-error">Please correct the error</span>
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




export default withRouter(RegisterMain)