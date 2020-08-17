import React,{useState,useEffect} from 'react';
import axios from "axios";
import './UserList.css'

function UserList() {
    const [users, setUsers] = useState([])
    useEffect(() => {
     axios.get("https://jsonplaceholder.typicode.com/users")
     .then(res=> {
         console.log(res)
         setUsers(res.data)
     })
     .catch(err=> {
         console.log(err)
     })
    },[])
    return (
        
            <div className="classUsers">
               {
                   users.map(user => (
                       <div key={user.id} className="userkey">
                           
                       <div className="usersInfo"><h2>Name</h2>{user.name}</div>
                       <div className="usersInfo"><h2>UserName</h2>{user.username}</div>
                       <div className="usersInfo"><h2>Email</h2>{user.email}</div>
                       <h2>Address:</h2>
                       <div className="usersInfo"><h3>Street</h3>{user.address.street}</div>
                       <div className="usersInfo"><h3>Suite</h3>{user.address.suite}</div>
                       <div className="usersInfo"><h3>City</h3>{user.address.city}</div>
                       <div className="usersInfo"><h3>ZipCode</h3>{user.address.zipcode}</div>
                       <div className="usersInfo"><h3>Geo Lateral</h3>{user.address.geo.lat}</div>
                       <div className="usersInfo"><h3>Geo Longitudinal</h3>{user.address.geo.lng}</div>
                       <div className="usersInfo"><h2>Phone</h2>{user.phone}</div>
                       <div className="usersInfo"><h2>Website</h2>{user.website}</div>
                       <h2>Company:</h2>
                       <div className="usersInfo"><h3>CompanyName</h3>{user.company.name}</div>
                       <div className="usersInfo"><h3>CatchPhrase</h3>{user.company.catchPhrase}</div>
                       <div className="usersInfo"><h3>BS</h3>{user.company.bs}</div>
                       </div>
                       
                   ) )} 
                   
            </div>
        
    )
}

export default UserList
