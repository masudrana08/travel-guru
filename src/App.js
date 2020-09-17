import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Booking from './Components/Booking/Booking';
import Hotels from './Components/Hotels/Hotels';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Auth from './Components/Auth/Auth';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import News from './Components/News/News'
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Destination from './Components/Destination/Destination';
export const MyContext=createContext()
firebase.initializeApp(firebaseConfig);
function App() {

  const [showArea,setShowArea]=useState(
    {
      id:1,
      title:"Cox's Bazar",
      description:"Why Cox's Bazar is a Great Tourist Attraction Cox's Bazar Review. Cox's Bazar is famous for its long natural sandy sea beach. ... Cox's Bazar has the world's largest unbroken sea beach which stretches more than 120 km. The entire beach is a stretch of golden sandy sea beach which is reachable by motorbike.",
      img:"https://i.ibb.co/p1Fm5yD/coxsbazar.png"
  }
  )

  const [loggedIn,setLoggedIn]=useState(false)

  return (
    <MyContext.Provider value={[showArea,setShowArea,loggedIn,setLoggedIn]}>
    <Router>
      <Switch>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/booking">
          <Booking></Booking>
        </Route>

        <Route path="/auth">
          <Auth></Auth>
        </Route>

        <PrivateRoute path="/see-hotel">
          <Hotels></Hotels>
        </PrivateRoute>

        <Route path="/news">
          <News></News>
        </Route>

        <Route path="/blog">
          <Blog></Blog>
        </Route>

        <Route path="/contact">
          <Contact></Contact>
        </Route>

        <Route path="/destination">
          <Destination></Destination>
        </Route>
      </Switch>
    </Router>
    </MyContext.Provider>
  );
}

export default App;
