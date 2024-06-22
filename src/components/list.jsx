import React from 'react'
import logo1 from '../assets/Magento.jpg';
import logo2 from '../assets/big.png';
import logo3 from '../assets/helpscout.png';
import logo4 from '../assets/shopify.png';
import logo5 from '../assets/zapier.png';
import logo6 from '../assets/woo.png';


function list() {
  return (
    <div className='list'>

      <div><img src={logo1} alt='kuchh bhi'style={{
        backgroundColor:'lightgray',
      }}/></div>
      <div><img src={logo3} alt='kuchh bhi'style={{
        backgroundColor:'lightgray',
      }}/></div>
      <div><img src={logo4} alt='kuchh bhi'style={{
        backgroundColor:'lightgray',
      }}/></div>
      <div><img src={logo2} alt='kuchh bhi' style={{
        backgroundColor:'lightgray',
      }}/></div>
      <div><img src={logo6} alt='kuchh bhi'style={{
        backgroundColor:'lightgray',
      }}/></div>
      <div><img src={logo5} alt='kuchh bhi'style={{
        backgroundColor:'lightgray',
      }}/></div>
      <div><img src={logo3} alt='kuchh bhi'style={{
        backgroundColor:'lightgray',
      }}/></div>
      <div><img src={logo4} alt='kuchh bhi'style={{
        backgroundColor:'lightgray',
      }}/></div>

    </div>
  )
}

export default list