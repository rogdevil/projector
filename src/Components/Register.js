import React from 'react';
import Button from './Button';
import {Link} from 'react-router-dom';
import {useAuth} from 'reactfire';

const Register = (props) => {

	const [Password, setPassword] = React.useState();
	const [Email, setEmail] = React.useState();
	const [Name, setName] = React.useState();
	let auth = useAuth();

	const register = () => {
		console.log("mic testing 1 2 3 ")
		auth.createUserWithEmailAndPassword(Email, Password)
		.catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			if (errorCode === 'auth/weak-password') {
				alert('The password is too weak.');
			} else {
				alert(errorMessage);
				console.log(Name)
			}
			console.log(error);
		});
	} 

    return (
        <div className="login">
    	<h1 className="blue" style={{marginTop: "1em"}}>Welcome</h1>
    	<div>
    		<div className="form">
                <input placeholder="Full Name" onChange={event => setName(event.target.value)} type="text" />
    			<input placeholder="Email" onChange={event => setEmail(event.target.value)}  type="email"/>
    			<input placeholder="Password" onChange={event => setPassword(event.target.value)} type="password" />
    			<Button name="Register" click={register} src="/" />
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