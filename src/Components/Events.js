import React from 'react';
import {AuthCheck} from 'reactfire';
import Login from './Login';
import Button from './Button';
import {useRouteMatch, Switch, Route} from 'react-router-dom';
import Schedule from './Schedule';
import Book from './Book';

const Events = (props) => {
	const {path, url} = useRouteMatch()
  return (
  	<AuthCheck fallback={<Login />}>
		<div className="events">
			<div className="booking-page-nav">
				<Button src={`${url}/book`} name="Book" />
				<Button src={`${url}/schedule`} name="Schedule" />
			</div>
		</div>
		<Switch>
			<Route path={`${path}/book`}>
				<Book />
			</Route>

			<Route path={`${path}/schedule`}>
				<Schedule />
			</Route>
		</Switch>
    </AuthCheck>
  )
}

export default Events;