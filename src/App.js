import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Booking from './Components/Booking/Booking';
import Header from './Components/Header/Header';
function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/booking">
          <Booking></Booking>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
