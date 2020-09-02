import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import {AuthCheck, useAuth} from 'reactfire';
import Button from './Button';


const Navbar = (props) => {

	const auth = useAuth();

    const logout = () => {

    	auth.signOut().then(() => {
    		console.log("logout successful");
    	}).catch((error) => {
    		console.log(error.message);
    	})
	}
	
	useEffect(() => {
		console.log('login');
	})


  return (
    <nav className="Navbar">
    	<div className="brand-logo">
    		<Link style={{textDecoration: "none"}} to="/">
	    		<h2>
	    			<span className="blue" style={{letterSpacing: "0.1em"}}>Projector</span>
	    			<span className="white">Booker</span>
	    		</h2>
    		</Link>
    	</div>

    	<div className="nav-items">
    		<ul>
    			<li>
    				<Link to="/">Home</Link>
    			</li>
    			<li>
    				<Link to="/events">Booking</Link>
    			</li>
				<AuthCheck fallback={<li><Link to="/login">Login</Link></li>}>
					<Button name="Logout" click={logout} src="/"/>
				</AuthCheck>
    		</ul>
    	</div>
    </nav>
  )
}

export default Navbar;