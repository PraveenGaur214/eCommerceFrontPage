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
        <img src={insta360} style={{
            height:"250px",
            width:"150px",
                  objectFit:"cover",
                  objectPosition:"5px 102px",       
          }} alt="Insta360" />
        </div>
        <div className="row2">hii</div>
      </div>
      <div className="col2"></div>
      <div className="col3">
      <div className="row1 brown">hii</div>
      <div className="row2">hii</div>
      </div>
      <div className="col4">
      <div className="row2">
      
      <img src={silvercycle} style={{
            height:'150px',
            // width:'100%',
                  objectFit:'cover',
                  objectPosition:"-170px 80px",       
          }} alt="Insta360" />
      </div>

      <div className="row1 brown"><img src={insta360} style={{
            height:"250px",
            width:"150px",
            marginLeft:'70px',
                  objectFit:"cover",
                  objectPosition:"5px 100px",       
          }} alt="Insta360" /></div>
      </div>

{/* <div class="item">
        <div className="brown">
          <img src={insta360} style={{
            height:"200px",
            width:"200px",
                  objectFit:"cover",
                  objectPosition:"8000% 10%",       
          }} alt="Insta360" />
        </div>
        <div>2</div>
      </div> */}
    </div>
  );
}

export default Treasure;
