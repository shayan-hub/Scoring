import React, {useState} from 'react';


const setValueOfTextBox = () => {
        
        //setName(document.getElementById("txtName").value())
}

function InputBox() {
    let [name,setName] = useState("")

  return (
    <div>
        {console.log({name})}
        <input type="text" 
               
                id="txtName"
                name="Name"
                onBlur={
                    (event) => {
                        console.log(event.target.value)
                        setName(event.target.value)
                    }

                }
                />
    </div>
  );
}

export default InputBox;
