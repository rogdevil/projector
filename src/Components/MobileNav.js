import React from 'react';
import {Link} from 'react-router-dom';

const MobileNav = (props) => {
    return (
        <div className="mobile-nav">
    		<ul>
    			<li>
    				<Link to="/">Home</Link>
    			</li>
    			<li>
    				<Link to="/aboutus">About Us</Link>
    			</li>
    			<li>
    				<Link to="/events">Events</Link>
    			</li>
    			<li>
    				<Link to="/contact">Contact Us</Link>
    			</li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
    		</ul>
    	</div>
    )
}

export default MobileNav;