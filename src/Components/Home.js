import React from 'react';
import CarouselHome from './Carousel';
import Button from './Button';
import {useAuth} from 'reactfire';

const Home = (props) => {
	const auth = useAuth();

    const logout = () => {

    	auth.signOut().then(() => {
    		console.log("logout successful");
    	}).catch((error) => {
    		console.log(error.message);
    	})
    }

    return (
        <div className="home-page">
        	<CarouselHome />


        	<div className="homepage-main-part">
        		<div className="homepage-main-part-content">
        			<h1>Youth Education and Support</h1>
        			<span>We are </span>
        		</div>
        		<div className="homepage-main-part-image"></div>
        	</div>

        	<Button name="Logout" click={logout} src="/"/>
   		</div>
    )
}

export default Home;