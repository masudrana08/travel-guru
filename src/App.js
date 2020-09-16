import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';

export const MyContext=createContext()
function App() {
  const [backgroundImg, setBackgroundImg]=useState("https://i.ibb.co/p1Fm5yD/coxsbazar.png")

  return (
    <MyContext.Provider value={[backgroundImg,setBackgroundImg]}>
      <Home></Home>
    </MyContext.Provider>
  );
}

export default App;
