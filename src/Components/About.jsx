import React from 'react';


function About(props) {
    return (
        <div>
            This is About page<br />
            <button onClick={() => {
                setTimeout(() => {
                    props.history.push('/')
                }, 5000)
            }}>Goto Home</button>
            <button onClick={() => { props.history.push('/Contact') }}>Goto Contact</button>
        </div>
    );
}


export default About;