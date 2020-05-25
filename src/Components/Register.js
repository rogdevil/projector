import React from 'react';
import Button from './Button';
import {Link} from 'react-router-dom'

const Register = (props) => {
    return (
        <div className="login">
    	<h1 className="blue" style={{marginTop: "1em"}}>Welcome</h1>
    	<div>
    		<div className="form">
                <input placeholder="Full Name" type="text" />
    			<input placeholder="Email"  type="email"/>
    			<input placeholder="Password" type="password" />
    			<Button name="Register" src="/register"/>
    			<span style={{fontSize: "0.7em", color: "var(--main-white)"}}>*<Link> terms and conditions</Link> apply</span>
    		</div>
    		<div className="sidebar">
    			<img src={require('../images/login.svg')} alt="" style={{width: "520px"}} />
    		</div>
    	</div>
    </div>
    )
}

export default Register;