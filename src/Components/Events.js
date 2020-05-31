import React from 'react';
import EventCard from './EventCard';
import QuizCard from './QuizCard';

const Events = (props) => {
  return (
    <div className="events">
    	<EventCard />
    	<QuizCard />
    	<EventCard />
    </div>
  )
}

export default Events;