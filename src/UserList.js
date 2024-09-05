import React from 'react';
import './App.css';
export default function UserList( {users, handleEdit, handleDelete}) {

    if (users.length > 0)
        return (
            <div>
            <table><tr><th>ID</th><th>Name</th><th>Address</th><th>Country</th><th>Action</th></tr>
            {
                users.map( user => {
                    return (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.address}</td>
                            <td>{user.country}</td>
                            <td><button type='button' onClick={()=>handleEdit(user.id)}>Edit</button>
                            <button type='button' onClick={()=>handleDelete(user.id)}>Delete</button></td>
                        </tr>
                    )
                })
            }
            </table>
            </div>    
        )
    else
        return (
            <div>
            </div>    
         )
}