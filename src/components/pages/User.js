import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams,Link } from 'react-router-dom';

const User = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });
    const { name, username, email, phone, website } = user;
    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data)
        console.log(result.data)
    }
    useEffect(() => {
        loadUsers();
    }, []);
    return (
        <div>
            <h2>User Id : {id}</h2>
            <table className="table">
                <tr><td>Name</td><td>{user.name}</td></tr>
                <tr><td>UserName</td><td>{user.username}</td></tr>
                <tr><td>Email</td><td>{user.email}</td></tr>
                <tr><td>Phone</td><td>{user.phone}</td></tr>
                <tr><td>Website</td><td>{user.website}</td></tr>
            </table>
            <Link className="btn btn-primary" to="/">Back to Home</Link>
        </div>
    )
}
export default User;