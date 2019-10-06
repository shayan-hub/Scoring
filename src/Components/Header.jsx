import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Header() {
 let [component, setComponent ] = useState("signin");

  return (
    
    <div>
    <Link to="/">Login</Link> 
    <Link to="/SignUp">SignUp</Link>
    </div>
    );
}

export default Header;
