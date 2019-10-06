import React, {useState} from 'react';

import {Link } from 'react-router-dom';

function Navigation() {

return (
<div>
  <Link to="/">Home</Link> <br/> 
  <Link to="/About">About</Link> <br/> 
  <Link to="/Contact" >Contact</Link>
  <hr/> 
</div>

);
}

export default Navigation;
