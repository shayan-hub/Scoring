import React, {useState} from 'react';
import './App.css';

function Array() {

let [counter, setCounter ] = useState(0);
let [obj, setObj ] = useState({name :"",age:10});
let[items,setArray] = useState([]);
let[itemsObj,setArrayOfObject] = useState([]);



const updateMyFunction =()  =>{

    const newObj = {...obj};
    newObj.name = "Salman";
    newObj.age = 5;
    newObj.Class = "O Levels";
    setObj(newObj);
}

const AddItem =() =>{
const newItems = [...items];
newItems.push(2);
setArray(newItems);

const newitemObj = [...itemsObj]
newitemObj.push({
    name : "Salman",
    age : 22,
    class : "Alpha"
})
    setArrayOfObject(newitemObj)
}

const RemoveItem =() =>{
    const newItems = [...items];

    newItems.pop();
    setArray(newItems);

    const newitemObj = [...itemsObj];
    newitemObj.pop();
    setArrayOfObject(newitemObj);


}


//let [ variable, function] 
  return (
    <div className="App">
      <button onClick={AddItem}>Add Item</button>
      <button onClick={RemoveItem}>Remove Item</button>
         <ul>
            {
                items.map((item,index) => {

                    return <li key={index}>{item}</li>
    
    
                    }  )
            }
             
        </ul>

        <ul>
            {
                itemsObj.map((item,index) =>{

                    return <li key = {index}>{item.name} - {item.age} - {item.class} </li>

                })

            }    
            
        </ul>       



    </div>
  );
}

export default Array;
