import React from 'react';
import EventCard from './EventCard';
import QuizCard from './QuizCard';
import {AuthCheck} from 'reactfire';
import Login from './Login';

const Events = (props) => {
  return (
  	<AuthCheck fallback={<Login />}>
    <div className="events">
    	<EventCard />
    	<QuizCard />
    	<EventCard />
    </div>
    </AuthCheck>
  )
}

export default Events;