import React, {useState} from 'react';
import './App.css';

function App() {

let [counter, setCounter ] = useState(0);
let [obj, setObj ] = useState({name :"",age:10});


const updateMyFunction =()  =>{

    const newObj = {...obj};
    newObj.name = "Salman";
    newObj.age = 5;
    newObj.Class = "O Levels";
    setObj(newObj);
}


//let [ variable, function] 
  return (
    <div className="App">
      {counter}<br/>
      {"My name is "+obj.name}<br/>
      {"My age is " +obj.age}<br/>
      {"I study in " +obj.Class}<br/>


      <button onClick={() => setCounter(counter + 10)}>Counter</button><br/>
      <button onClick={() => setObj({name : "Mussaib", age: 5})}>Object</button>

      <button onClick={updateMyFunction}>new obj</button>


    </div>
  );
}

export default App;
