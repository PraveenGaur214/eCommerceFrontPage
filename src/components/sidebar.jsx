// import React from "react";
import React, { useState } from "react";
import { Slider, Box } from '@mui/material';
import Cardimg from '../assets/cards.jpeg';

function valuetext(value) {
  return `${value}°C`;
}

function Sidebar() {

  
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    <div className="grid-container-order">
      <div className="sidebar">
        
        <ul> CATEGORIES <button>+</button>
          <li><a href="">Tables</a></li>
          <li><a href="">Lamps</a></li>
          <li><a href="">Chairs</a></li>
          <li><a href="">Sofas</a></li>
        </ul>
        <ul> FILTER BY <button>+</button>
        <li>Colors</li>
        <li className="color-palette">
            <input type="radio" id="color-red" name="color" value="Red" className="color-option color-red" />
            <label htmlFor="color-red"></label>
            
            <input type="radio" id="color-blue" name="color" value="Blue" className="color-option color-blue" />
            <label htmlFor="color-blue"></label>
            
            <input type="radio" id="color-green" name="color" value="Green" className="color-option color-green" />
            <label htmlFor="color-green"></label>
            
            <input type="radio" id="color-yellow" name="color" value="Yellow" className="color-option color-yellow" />
            <label htmlFor="color-yellow"></label>

            <input type="radio" id="color-olive" name="color" value="Olive" className="color-option color-olive" />
            <label htmlFor="color-olive"></label>

            <input type="radio" id="color-violet" name="color" value="Violet" className="color-option color-violet" />
            <label htmlFor="color-violet"></label>

            <input type="radio" id="color-brown" name="color" value="Brown" className="color-option color-brown" />
            <label htmlFor="color-brown"></label>
          </li>
        </ul>

        <ul> Price Range <button>+</button>
        <li className="price-range-selector">
        <Box sx={{ width: '80%' }}>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />

      </Box>
      </li>

        </ul>


        <ul> Others <button>+</button>
        <li>Colors</li>
        </ul>
      </div>

      <div className="cards">

        <div className="card">
        <img src={Cardimg} alt="kucchh bhi"/>
        <h4>amazon</h4>
        <h5 style={{textDecoration:'line-through',
        color:'green', fontWeight:'bold',  }}>$120</h5>
        <h5>$100</h5>
        <button className="blue">Add to cart</button>
        <button className="borderBlue">go to cart</button>
        </div>

        <div className="card">
        <img src={Cardimg} alt="kucchh bhi"/>
        <h4>amazon</h4>
        <h5 style={{textDecoration:'line-through',
        color:'green', fontWeight:'bold',  }}>$120</h5>
        <h5>$100</h5>
        <button className="blue">Add to cart</button>
        <button className="borderBlue">go to cart</button>        
        </div>
        
        <div className="card"><img src={Cardimg} alt="kucchh bhi"/>
        <h4>amazon</h4>
        <h5 style={{textDecoration:'line-through',
        color:'green', fontWeight:'bold',  }}>$120</h5>
        <h5>$100</h5>
        <button className="blue">Add to cart</button>
        <button className="borderBlue">go to cart</button>
        </div>
        
        <div className="card"><img src={Cardimg} alt="kucchh bhi"/>
        <h4>amazon</h4>
        <h5 style={{textDecoration:'line-through',
        color:'green', fontWeight:'bold',  }}>$120</h5>
        <h5>$100</h5>
        <button className="blue">Add to cart</button>
        <button className="borderBlue">go to cart</button>
        </div>
        
        <div className="card"><img src={Cardimg} alt="kucchh bhi"/>
        <h4>amazon</h4>
        <h5 style={{textDecoration:'line-through',
        color:'green', fontWeight:'bold',  }}>$120</h5>
        <h5>$100</h5>
        <button className="blue">Add to cart</button>
        <button className="borderBlue">go to cart</button>
        </div>
        
        <div className="card"><img src={Cardimg} alt="kucchh bhi"/>
        <h4>amazon</h4>
        <h5 style={{textDecoration:'line-through',
        color:'green', fontWeight:'bold',  }}>$120</h5>
        <h5>$100</h5>
        <button className="blue">Add to cart</button>
        <button className="borderBlue">go to cart</button>
        </div>

      </div>

    </div>
  );
}

export default Sidebar;
