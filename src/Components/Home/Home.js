import React, { useState } from 'react';
import Header from '../Header/Header';
import coxsbazar from '../../images/image/coxsbazar.png'
const Home = () => {
    const [choosenBackground, setChoosenBackground]=useState(coxsbazar)
    return (
        <div style={{backgroundImage: `url(${choosenBackground})`}}>
            <Header></Header>
        </div>
    );
};

export default Home;