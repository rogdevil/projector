import React, {useState} from 'react';
import Button from './Button';
import {Link} from 'react-router-dom'




const Login = (props) => {



    return (
        <div className="login">
    	<h1 className="blue" style={{marginTop: "1em"}}>Welcome</h1>
    	<div>
    		<div className="form">
    			<input placeholder="Email"  type="email"/>
    			<input placeholder="Password" type="password" />
    			<Button name="Login" click={()=>{console.log('hello')}} />
    			<span className="blue" onClick={()=>console.log('hello')} style={{fontWeight: "bold"}}>OR</span>
    			<Button name="Register"  src="/register"/>
    			<span style={{fontSize: "0.7em", color: "var(--main-white)"}}>*<Link to="/termsandconditions" style={{color: "blue"}}> terms and conditions</Link> apply</span>
    		</div>
    		<div className="sidebar">
    			<img src={require('../images/login.svg')} alt="" style={{width: "520px"}} />
    		</div>
    	</div>
    </div>
    )
}

export default Login;