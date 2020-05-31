import React from 'react';
import CarouselHome from './Carousel';

const Home = (props) => {

    const sources = ['../images/login.svg', '../logo.svg']

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
   		</div>
    )
}

export default Home;