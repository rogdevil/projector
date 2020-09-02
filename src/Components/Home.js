import React from 'react';

const Home = (props) => {

    return (
        <div className="home-page">
        	<div className="homepage-main-part">
        		<div className="homepage-main-part-content">
        			<h1>Projector Booker</h1>
        			<span>A webapp to book projector sessions during college. You can check the booking and book your session accordingly. </span>
        		</div>
        		<div className="homepage-main-part-image"><img src={require('../images/login.svg')} alt="student" /></div>
        	</div>
   		</div>
    )
}

export default Home;