import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import logo from '../../images/Logo.png'
import { MyContext } from '../../App';
import { Button, FormGroup, Grid } from '@material-ui/core';
import './Booking.css'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import { useHistory } from 'react-router-dom';
const Booking = () => {
    const history = useHistory()
    const [showArea]=useContext(MyContext)
    const [from,setFrom]=useState(null)
    const [to,setTo]=useState(null)

    const formControler =(event)=>{
        event.preventDefault()
        history.push("/see-hotel")
    }
    return (
        <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${showArea.img})`,  height:"100vh", backgroundSize:"cover", padding:"0 30px"}}>

            <Header img={logo} color="white"></Header>
            
            <Grid container item xs={12} justify="space-around" style={{color:"white", textAlign:"center"}}> 

                <Grid item xs={12} md={6} style={{padding:"0 9%"}}>
                    <h1 style={{fontSize:"60px"}}>{showArea.title}</h1>
                    <h5 style={{fontWeight:"500"}}>{showArea.description}</h5>
                </Grid>

                <Grid item xs={12} md={6} style={{padding:"70px 8%"}}>
                    <form className="booking-form" style={{padding:"30px"}} onSubmit={formControler}>
                        <FormGroup className="form-group" >
                            <label htmlFor="origin">Origin</label>
                            <input id="origin" type="text" required/>

                            <label htmlFor="origin">Destination</label>
                            <input id="origin" type="text" required/>

                            <div style={{display:"flex"}}>
                                <div>
                                    <label htmlFor="origin">From</label>
                                    <DatePicker selected={from} onChange={date => setFrom(date)} required></DatePicker>
                                </div>

                                <div>
                                    <label htmlFor="origin">To</label>
                                    <DatePicker selected={to} onChange={date => setTo(date)}required></DatePicker>
                                </div>
                            </div>
                                <input type="submit" value="Start Booking"/>   
                        </FormGroup>
                    </form>
                </Grid>

            </Grid>
        </div>
    );
};

export default Booking;