import React, { useContext, useState } from 'react';
import { MyContext } from '../../App';
import Header from '../Header/Header';
import TravelSection from '../TravelSection/TravelSection';
import './Home.css'
const Home = () => {
    const [backgroundImg]=useContext(MyContext)


    return (
        <div style={{backgroundImage: `url(${backgroundImg})`,  height:"100vh", backgroundSize:"cover"}}>

            <Header></Header>
            <TravelSection></TravelSection>
            
        </div>
    );
};

export default Home;