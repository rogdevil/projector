import React from 'react';
import {Link} from 'react-router-dom'
import Hamburger from './Hamburger'

const Navbar = (props) => {
  return (
    <nav className="Navbar">
    	<div className="brand-logo">
    		<Link style={{textDecoration: "none"}} to="/">
	    		<h2>
	    			<span className="blue" style={{letterSpacing: "0.1em"}}>YES</span>
	    			<span className="white">crew</span>
	    		</h2>
    		</Link>
    	</div>

    	<div className="nav-items">
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

    	<Hamburger />
    </nav>
  )
}

export default Navbar;