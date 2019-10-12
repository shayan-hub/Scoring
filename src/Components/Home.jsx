import React from 'react';
import {data} from '../Services'
import {Button,Table} from 'react-bootstrap'


function Home(props) {

 
    const showUserDetail = user => {
        props.history.push(`/Details/${user.id}/${user.name}`);
      };

      
    return (
        <Table>
            <thead>
            <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Class</td>
            <td/>
            </tr>
            </thead>
            <tbody>
            {

             data.map((user,index) => {

                return <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.class}</td>
                            <td>                 <Button onClick={() => showUserDetail(user)}>
                  show details
                  </Button></td>    
                         </tr>


                }  )
            }





            </tbody>



        </Table>
      );    
}

export default Home;