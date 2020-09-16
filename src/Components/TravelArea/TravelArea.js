import React, { useContext } from "react";
import { MyContext } from "../Home/Home";



const TravelArea = (props) => {
  const [showArea,setShowArea] = useContext(MyContext);
  const { title, description, img } = props.place;

  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "right top",
    backgroundRepeat: "no-repeat",
    backgroundOrigin: "border-box",
    width: "215px",
    border:"3px solid #ff9100",
    borderRadius:"10px",
    marginRight:"2px"
  };
  
  return (
    <div onClick={() => setShowArea(props.place)} style={backgroundImageStyle}>
      <h2 style={{ marginTop: "250px", textAlign: "center", color: "white" }}>
        {title}
      </h2>
    </div>
  );
};

export default TravelArea;
