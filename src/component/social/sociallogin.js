import React from 'react'
import Social from './social'
class SocialLogin extends React.Component{
    render(){
        return (
            <div className="social-auth">
                <Social s_text="Facebook" name="fa fa-facebook" color="#3b5998" />
                <Social s_text="Google" name="fa fa-google" color="#CC3333" />
            </div>
        )
    }
}

export default SocialLogin