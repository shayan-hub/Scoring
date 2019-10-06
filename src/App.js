import React, {useState} from 'react';
import './App.css';
import Login from './Components/Login/login';
import SignUp from './Components/SignUp/Signup';
import {BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import Router from './Components/Router'
import About from './Components/About'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Navigation from './Components/Navigation'



function App() {
 let [component, setComponent ] = useState("signin");

  return (
    <div className="App">

      <Router/>

    </div>



  );
  }








// return (
// {/* <BrowserRouter>
// <div>
//   <Navigation/>
//   <Route exact path="/" component={Home} /> 
//   <Route path="/About" component={About} /> 
//   <Route path="/Contact" component={Contact} />
//  <Redirect from="*" to="/" /> 
// </div>
// </BrowserRouter> */}

// );









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



export default App;
