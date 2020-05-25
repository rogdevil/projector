import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import MobileNav from './Components/MobileNav';
import Login from './Components/Login';
import Register from './Components/Register';
import {Switch, Route} from 'react-router-dom';

function App() {
    return (
        <React.Fragment>
      <Navbar />
      <MobileNav />
      <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/events">
            <h1>events</h1>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
    </React.Fragment>
    );
}

export default App;