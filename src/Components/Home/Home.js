import React, { createContext, useState } from 'react';
import Header from '../Header/Header';
import TravelSection from '../TravelSection/TravelSection';
import './Home.css'

export const MyContext=createContext()
const Home = () => {
    const [showArea,setShowArea ]=useState(
        {
          id:1,
          title:"Cox's Bazar",
          description:"Why Cox's Bazar is a Great Tourist Attraction Cox's Bazar Review. Cox's Bazar is famous for its long natural sandy sea beach. ... Cox's Bazar has the world's largest unbroken sea beach which stretches more than 120 km. The entire beach is a stretch of golden sandy sea beach which is reachable by motorbike.",
          img:"https://i.ibb.co/p1Fm5yD/coxsbazar.png"
      }
      )


    return (
        <MyContext.Provider value={[showArea,setShowArea]}>
            <div className="home-container" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${showArea.img})`,  height:"100vh", backgroundSize:"cover"}}>
            <Header color="white"></Header>
            <TravelSection></TravelSection>

</div>
        </MyContext.Provider>
    );
};

export default Home;