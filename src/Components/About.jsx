import React from 'react';


function About(props) {
    return (
        <div>
            This is About page<br/>
            <button onClick={() =>{props.history.push('/') }}>Goto Home</button>
            <button onClick={() =>{props.history.push('/Contact') }}>Goto Contact</button>
        </div>
      );
    }
    

export default About;