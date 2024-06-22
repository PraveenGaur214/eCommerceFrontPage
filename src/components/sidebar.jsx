import React from "react";
import Cardimg from '../assets/cards.jpeg';

function sidebar() {
  return (
    <div className="grid-container-order">
      <div className="sidebar">sidebar</div>

      <div className="cards">

        <div className="card">
        <img src={Cardimg} alt="kucchh bhi"/>
        <h4>amazon</h4>
        <h5 style={{textDecoration:'line-through',
        color:'green', fontWeight:'bold',  }}>$120</h5>
        <h5>$100</h5>
        <button>Add to cart</button>
        <button>go to cart</button>
        </div>

        <div className="card">
        <img src={Cardimg} alt="kucchh bhi"/>
        <h4>amazon</h4>
        <h5 style={{textDecoration:'line-through',
        color:'green', fontWeight:'bold',  }}>$120</h5>
        <h5>$100</h5>
        <button>Add to cart</button>
        <button>go to cart</button>        
        </div>
        
        <div className="card"><img src={Cardimg} alt="kucchh bhi"/>
        <h4>amazon</h4>
        <h5 style={{textDecoration:'line-through',
        color:'green', fontWeight:'bold',  }}>$120</h5>
        <h5>$100</h5>
        <button>Add to cart</button>
        <button>go to cart</button>
        </div>
        
        <div className="card"><img src={Cardimg} alt="kucchh bhi"/>
        <h4>amazon</h4>
        <h5 style={{textDecoration:'line-through',
        color:'green', fontWeight:'bold',  }}>$120</h5>
        <h5>$100</h5>
        <button>Add to cart</button>
        <button>go to cart</button>
        </div>
        
        <div className="card"><img src={Cardimg} alt="kucchh bhi"/>
        <h4>amazon</h4>
        <h5 style={{textDecoration:'line-through',
        color:'green', fontWeight:'bold',  }}>$120</h5>
        <h5>$100</h5>
        <button>Add to cart</button>
        <button>go to cart</button>
        </div>
        
        <div className="card"><img src={Cardimg} alt="kucchh bhi"/>
        <h4>amazon</h4>
        <h5 style={{textDecoration:'line-through',
        color:'green', fontWeight:'bold',  }}>$120</h5>
        <h5>$100</h5>
        <button>Add to cart</button>
        <button>go to cart</button>
        </div>

      </div>

    </div>
  );
}

export default sidebar;
