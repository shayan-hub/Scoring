import React from 'react';

const data = [{
id :1,
name : "Mussaib",
class:"Class A"
},
{
    id :2,
    name : "Shayan",
    class:"Class A"
    }
    ,{
        id :3,
        name : "Mussaib",
        class:"Class A"
        }


];


function Home(props) {

 
    const showUserDetail = id => {
        props.history.push(`/Details/` + id);
      };

      
    return (
        <table>
            <thead>
            <td>Id</td>
            <td>Name</td>
            <td>Class</td>
            <td/>

            </thead>
            <tbody>
            {

             data.map((user,index) => {

                return <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.class}</td>
                            <td>                 <button onClick={() => showUserDetail(user.id)}>
                  show details
                  </button></td>    
                         </tr>


                }  )
            }





            </tbody>



        </table>
      );    
}

export default Home;