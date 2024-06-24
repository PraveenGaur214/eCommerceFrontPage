import React from "react";
import insta360 from "../assets/insta360-x3.jpeg";
import silvercycle from "../assets/cycle.jpeg";
import chair from "../assets/chair.jpeg";
function Treasure() {
  // const imgurl1='https://x.imastudent.com/content/0039536_insta360-x3-360-camera_500.jpeg';
  // const imgurl2='https://www.99bikes.com.au/media/catalog/product/n/o/norco_storm_5_27.5_22_mountain_bike_silver_black_2021_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width='

  return (
    <div className="treasure">

      <div className="col1">
        <div className="row1 brown">
        <img className="insta360" src={insta360} alt="Insta360" />
        </div>
        <div className="row2"></div>
      </div>
      <div className="col2">
          <h1><b>Our <br/> Latest</b><br/>Products<br/>
          <button>
            View All
          </button></h1>
      </div>
      
      <div className="col3">
      <div className="row1 brown">
      <img src={chair} className="imgrotate"  style={{
            height:'250px',
            width:'100%',
                  // objectFit:'cover',
                  // objectPosition:"-400px -20px",       
          }} alt="Insta360" />
      </div>
      <div className="row2">
      <img src={silvercycle} className="cycle imgrotate"  alt="Insta360" />
      </div>
      </div>

      <div className="col4">

      <div className="row2">
      <img src={silvercycle} className="cycle" alt="Insta360" />
      </div>

      <div className="row1 brown">
        <img className="insta360" src={insta360}  alt="Insta360" />
      </div>
      
      </div>
      
    </div>
  );
}

export default Treasure;
