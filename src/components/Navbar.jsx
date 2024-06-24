import React from 'react';
// import './Navbar.css'; // Ensure you have a CSS file for styling

const Navbar = () => {
  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
  <div className="topnav" id="myTopnav">
  <a href="https://www.google.com">Electronics</a>
<a href="https://www.google.com">Home</a>
<a href="https://www.google.com">Sports</a>
<a href="https://www.google.com">Vehicle</a>
<a href="https://www.google.com">Books</a>
<a href="https://www.google.com">Clothes</a>
<a href="https://www.google.com">Bed & Bath</a>
<a href="https://www.google.com">Furniture</a>
<a href="https://www.google.com">Tabletop</a>
<a href="https://www.google.com">New Arrivals</a>
  <a  className="icon" onClick={myFunction}>
    <i className="fa fa-bars"></i>
  </a>
</div>
  );
}

export default Navbar
