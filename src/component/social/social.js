import React from 'react'
//import 
class Social extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div style ={{backgroundColor:this.props.color}} className="social">
                <a href="#" onClick={(e)=>e.preventDefault()} className={this.props.name}></a>
                <div style ={{fontFamily:"sans-serif",backgroundColor:this.props.color}} className="social-text">
                    Login using {this.props.s_text}
                </div>
            </div>
        )
    }
}

export default Social