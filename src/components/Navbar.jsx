import React from 'react';
// import './Navbar.css'; // Ensure you have a CSS file for styling

const Navbar = () => {
  return (
    <div>
      <nav className='navbar-container'>
        <ul className='navbar-list'>
          <li className='navbar-item'>
            <a href="https://www.google.com">Electronics</a>
          </li>
          <li className='navbar-item'>
            <a href="https://www.google.com">Home</a>
          </li>
          <li className='navbar-item'>
            <a href="https://www.google.com">Sports</a>
          </li>
          <li className='navbar-item'>
            <a href="https://www.google.com">Vehicle</a>
          </li>
          <li className='navbar-item'>
            <a href="https://www.google.com">Books</a>
          </li>
          <li className='navbar-item'>
            <a href="https://www.google.com">Clothes</a>
          </li>
          <li className='navbar-item'>
            <a href="https://www.google.com">Bed & Bath</a>
          </li>
          <li className='navbar-item'>
            <a href="https://www.google.com">Furniture</a>
          </li>
          <li className='navbar-item'>
            <a href="https://www.google.com">Tabletop</a>
          </li>
          <li className='navbar-item'>
            <a href="https://www.google.com">New Arrivals</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar
