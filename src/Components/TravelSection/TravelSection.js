import { Grid } from '@material-ui/core';
import React from 'react';
import {touristPlaces} from '../../travelInfo' 
import TravelArea from '../TravelArea/TravelArea';
const TravelSection = () => {

    return (
        <Grid container item xs={12} justify="space-between">
            <Grid item md={6}>
                <h1>left</h1>
            </Grid>
            <Grid container item md={6} justify="center" style={{display:"flex", marginTop:"100px"}}>
                {
                    touristPlaces.map(place=>{
                        return(
                            <TravelArea key={place.id} place={place}></TravelArea>
                        )
                    })
                }
            </Grid>
        </Grid>
    );
};

export default TravelSection;