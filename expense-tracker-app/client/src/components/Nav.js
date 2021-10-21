import React from 'react';
import {Link} from 'react-router-dom'


function Nav() {
  const navStyle = {
    color : 'white'
  };



    return (
     <nav className="nav-bar">
       <Link style={navStyle}  to="/">
       <h3>Expense-Tracker-App</h3>
       </Link>
       

       <ul className='nav-links'>

       </ul>
     </nav>
    );
  }
  
  export default Nav;