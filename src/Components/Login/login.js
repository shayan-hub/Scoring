import React,{useState} from 'react';
import '../../App.css';
import Input from '../../Input'

function Login() {
  let[userName,setName] = useState('');
  let[userPassword,setPasssword] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <div className="BorderDiv">
            <table>
              <tbody>
                <tr>
                    <td>User Name</td>
                    <td>{<Input Id = "txtUserName" Name="usename" type="Text" onChange={(event) => {
                          setName(event.target.value)


                    }}/>}</td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>{<Input Id = "txtPassword" Name="usepassword" type="Password" onChange={(event) => {
                          setPasssword(event.target.value)


                    }}/>}</td>
                </tr>
                <tr>
                    <td><button type="button"> Sign In</button></td>
                </tr>
                </tbody>
            </table> 

        </div>
      </header>
    </div>
  );
}

export default Login;