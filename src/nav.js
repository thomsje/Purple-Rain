import React, { Component } from 'react';
import {
Link
}from 'react-router-dom';
class Nav extends Component {
  render() {
    return (
      <header>


          <div id="navigate">
<nav>
  <ul>

     <li className="first">
     <Link to="/Dsb">Don't Stop Believin'</Link>
     </li>
     <li>
     <Link to="/Magic">He went to Paris</Link>
     </li>
     <li>
     <Link to="/Nirvana">Pennyroyal Tea</Link>
     </li>


  </ul>
</nav>

  
   </div>
      </header>
    );
  }
}

export default Nav;
