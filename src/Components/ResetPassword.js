import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import { useAuth } from 'reactfire';

const ResetPassword = (props) => {

    const [Email, setEmail] = React.useState();
    const auth = useAuth();

    var actionCodeSettings = {
        url: 'http://localhost:3000/',
      };

      const reset = () => {
        auth.sendPasswordResetEmail(
            Email, actionCodeSettings)
            .then(function() {
              // Password reset email sent.
              console.log("email sent successfully");
            })
            .catch(function(error) {
              // Error occurred. Inspect error.code.
              console.log(error, 'unable to send email');
            });
  
      }
      
    return(
        <div className="login">
            <h1 className="blue" style={{marginTop: "1em"}}>Welcome</h1>
            <div>
                <div className="form">
                    <input placeholder="Email" value={Email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <Button name="Reset" click={reset} src={"/"} />
                    <span style={{fontSize: "0.7em", color: "var(--main-white)"}}>*<Link to="/termsandconditions" style={{color: "blue"}}> terms and conditions</Link> apply</span>
                </div>
                <div className="sidebar">
                    <img src={require('../images/login.svg')} alt="" style={{width: "520px"}} />
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;