import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const EditUser = () => {
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
    const onInputChange = e => {
        setUser({...user,[e.target.name]:e.target.value})
    };
    const onSubmit = async e =>{
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user); 
        navigate("/")
    };
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
            <h2>Edit user</h2>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={name} onChange={ e => onInputChange(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="username">UserName</label>
                    <input type="text" className="form-control" id="username" name="username" value={username} onChange={ e => onInputChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={email} onChange={ e => onInputChange(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" className="form-control" id="phone" name="phone" value={phone} onChange={ e => onInputChange(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="website">WebSite</label>
                    <input type="text" className="form-control" id="website" name="website" value={website} onChange={ e => onInputChange(e)}/>
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    )
}
export default EditUser;