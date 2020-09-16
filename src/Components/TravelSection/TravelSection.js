import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { touristPlaces } from "../../travelInfo";
import { MyContext } from "../Home/Home";
import TravelArea from "../TravelArea/TravelArea";
const TravelSection = () => {
  const [showArea] = useContext(MyContext);
  return (
    <Grid container item xs={12} justify="space-between">
      <Grid item md={6} style={{padding:"20px"}}>
        <h1 style={{ color: "white", fontSize: "60px", textAlign: "center" }}>
          {showArea.title}
        </h1>
  <h5 style={{color:"white", textAlign:"center", fontWeight:"500"}}>{showArea.description}</h5>
      </Grid>
      <Grid
        container
        item
        md={6}
        justify="center"
        style={{ display: "flex", marginTop: "100px" }}
      >
        {touristPlaces.map((place) => {
          return <TravelArea key={place.id} place={place}></TravelArea>;
        })}
      </Grid>
    </Grid>
  );
};

export default TravelSection;
