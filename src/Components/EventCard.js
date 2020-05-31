import React from 'react';
import Button from './Button';
import '../App.css'; 

const EventCard = (props) => {
  return (
    <div className="event-card">
    	<img src={require("../logo.svg")} alt="" />
    	<span className="white"  style={{margin: "0.5em"}}>Dolore adipisicing nostrud ullamco dolore culpa aute quis dolore occaecat laboris eu dolor sed officia non tempor laborum id irure ut nisi.</span>
    	<Button name="About" src="/" />
    </div>
  )
}

export default EventCard;