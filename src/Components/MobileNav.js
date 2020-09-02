import React from 'react';
import {Link} from 'react-router-dom';
import {AuthCheck, useAuth} from 'reactfire';
import Button from './Button';

const MobileNav = (props) => {
	const auth = useAuth();

    const logout = () => {

    	auth.signOut().then(() => {
    		console.log("logout successful");
    	}).catch((error) => {
    		console.log(error.message);
    	})
	}
	

    return (
        <div className="mobile-nav">
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
    )
}

export default MobileNav;