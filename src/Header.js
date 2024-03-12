import React from 'react';
import './Header.css';

function HeaderCom() {
  return (

  <header className='Header-style'>
    <h1 style={{fontFamily:'trebuchet', fontStyle:'italic',color:'red'}}> E-Mart</h1>
    <nav>
        <ul >
            <li className='list-items'><a href="/">All</a></li>
            <li className='list-items'><a href="/bestsellers">Best Sellers</a></li>
            <li className='list-items'><a href="/mobiles">Mobiles</a></li>
            <li className='list-items'><a href="/accessories">Accessories</a></li>
            <li className='list-items'><a href="/laptops">Laptops</a></li>
            <li className='list-items'><a href="/todaysdeals">Today's Deals</a></li>
            <li ><input type="text" placeholder='E-mart' className='input'></input></li> 
            <li><button className='search-button'>search</button></li> 
        </ul>
    </nav>
     
    <div className="header-buttons">
          <button className="login">Login</button>
          <button className="signup">SignUp</button>
        </div>
   
  </header>
  )
}

export default HeaderCom