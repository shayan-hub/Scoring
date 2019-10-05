import React from 'react';
import '../../App.css';

function SignUp() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="BorderDiv">
            <table>
              <tbody>
                <tr>
                    <td>User Name</td>
                    <td><input type="text" name="fname"/></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="password" name="password"/></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td><input type="Email" name="Email"/></td>
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

export default SignUp;