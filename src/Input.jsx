import React, {useState} from 'react';


const setValueOfTextBox = () => {
        
        //setName(document.getElementById("txtName").value())
}

function InputBox(props) {
    let [name,setName] = useState("")

  return (
    <div>
        {console.log({name})}
        <input type={props.type}
               
                id={props.Id}
                name={props.Name}
                />
    </div>
  );
}

export default InputBox;
