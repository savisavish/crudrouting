import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, NavLink } from "react-router-dom";

const Home = () => {
    const mystyle = {
        fontSize:"28px",
        marginLeft:"15px"
      };
    const [users, setUser] = useState([]);
    const loadUsers = async () => {
        const result = await axios.get('http://localhost:3000/users');
        setUser(result.data.reverse())
    }
    useEffect(() => {
        loadUsers();
    }, []);
    const deleteUser = async id =>{
        await axios.delete(`http://localhost:3003/users/${id}`); 
        loadUsers();
    };
    return (
        <div>
            <h2>List of Users</h2>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((userList, index) => (
                        <tr key={userList.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{userList.name}</td>
                            <td>{userList.username}</td>
                            <td>{userList.email}</td>
                            <td>
                                <Link className="fa fa-eye" to={`/user/${userList.id}`} style={mystyle}></Link>
                                <Link className="fa fa-edit" to={`/users/edit/${userList.id}`} style={mystyle}></Link>
                            <Link className="fa fa-trash-o" to="/" style={mystyle} onClick={() => deleteUser(userList.id)}></Link>
                            </td>
                        </tr>))}
                </tbody>
            </table>
        </div>
    )
}
export default Home;
