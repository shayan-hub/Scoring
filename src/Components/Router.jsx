


import React, {useState} from 'react';
import {BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import Details from './Details';
import Contact from './Contact';
import About from './About';
import Home from './Home';

function Router() {
 let [component, setComponent ] = useState("signin");

  return (
    <BrowserRouter>
    <header>
    <Route exact path="/" component={Home} /> 
     <Route path="/About" component={About} /> 
     <Route path="/Contact" component={Contact} />
     <Route path="/Details/:id" component={Details} />

    </header>
    </BrowserRouter>
  );
}

export default Router;
