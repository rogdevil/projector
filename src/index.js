import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import {FirebaseAppProvider, SuspenseWithPerf} from 'reactfire';

const configuration ={
	apiKey: "AIzaSyDi181hD6Swi3TbuP36eh7pVH6nqWBipe8",
  	authDomain: "yescrew-50fcd.firebaseapp.com",
  	databaseURL: "https://yescrew-50fcd.firebaseio.com",
	projectId: "yescrew-50fcd",
	storageBucket: "yescrew-50fcd.appspot.com",
	messagingSenderId: "585098199052",
	appId: "1:585098199052:web:754f9be01bf4ee78e12e29",
	measurementId: "G-7CX20JGZER"
};


ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={configuration}>
  <SuspenseWithPerf fallback={<h2>Loading....</h2>}>
  	<Router>
    	<App />
  	</Router>
  	</ SuspenseWithPerf>
  </ FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
