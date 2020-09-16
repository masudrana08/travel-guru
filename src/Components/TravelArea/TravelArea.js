import React, { useContext } from "react";
import { MyContext } from "../../App";

const TravelArea = (props) => {
  const [backgroundImage, setBackgroundImg] = useContext(MyContext);
  const { title, description, img } = props.place;
  return (
    <div
      onClick={() => setBackgroundImg(img)}
      style={{ backgroundImage: `url(${img})`, backgroundSize:"cover", backgroundPosition:"right top",backgroundRepeat:"no-repeat",backgroundOrigin:"border-box", width:"220px" }}
    >
      <h2 style={{ marginTop: "250px", textAlign:"center", color:"white" }}>{title}</h2>
    </div>
  );
};

export default TravelArea;
