import React, {useState} from 'react';
import './App.css';
import Login from './Components/Login/login';
import SignUp from './Components/SignUp/Signup';
import {BrowserRouter, Route, Link, Redirect } from 'react-router-dom';

import About from './Components/About'
import Home from './Components/Home'
import Contact from './Components/Contact'

function App() {

return (
<BrowserRouter>
<div>
  <Link to="/">Home</Link> <br/> 
  <Link to="/About">About</Link> <br/> 
  <Link to="/Contact" >Contact</Link>
  <hr/> 
  <Route exact path="/" component={Home} /> 
  <Route path="/About" component={About} /> 
  <Route path="/Contact" component={Contact} />
 <Redirect from="*" to="/" /> 
</div>
</BrowserRouter>

);









// let [counter, setCounter ] = useState(0);
// let [obj, setObj ] = useState({name :"",age:10});
// let [component, setComponent ] = useState("signin");


// const updateMyFunction =()  =>{

//     const newObj = {...obj};
//     newObj.name = "Salman";
//     newObj.age = 5;
//     newObj.Class = "O Levels";
//     setObj(newObj);
// }


//let [ variable, function] 
  // return (
  //   // <div className="App">

  //   // <header>

  //   //   <div onClick={() => setComponent("signin")}>Sign In</div><br/>
  //   //   <div onClick={() => setComponent("signup")}>Sign Up</div>
  //   // </header>

  //   // <section>
  //   //   {component === "signin" ? <Login/> : <SignUp/>}
  //   // </section>

  //   // </div>



  // );
}

export default App;
