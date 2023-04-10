import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", username: "", email: "", phone: "", website: "" });
    const { name, username, email, phone, website } = user;
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const errorStyle = `${formErrors.name ? "alert alert-primary" : ""},
                    ${formErrors.username ? "alert alert-primary" : ""},
                    ${formErrors.email ? "alert alert-primary" : ""}`;
    const onInputChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    const onSubmit = async e => {
        e.preventDefault();
        setFormErrors(validate(user));
        setIsSubmit(true);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            alert(1)
            await axios.post('http://localhost:3002/users', user); 
            navigate("/")
        }
    };
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) { }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            errors.name = "Name is required!";
        }
        if (!values.username) {
            errors.username = "UserName is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        }else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
          }
        if (!values.phone) {
            errors.phone = "Phone is required!";
        }
        return errors;
    };
    return (
        <div>
        {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(user, undefined, 2)}</pre>
      )} */}
            <h2>Add user</h2>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={user.name} onChange={e => onInputChange(e)} />
                </div>
                <p className={errorStyle}>{formErrors.name}</p>
                <div className="form-group">
                    <label htmlFor="username">UserName</label>
                    <input type="text" className="form-control" id="username" name="username" value={user.username} onChange={e => onInputChange(e)} />
                </div>
                <p className={errorStyle}>{formErrors.username}</p>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="text" className="form-control" id="email" name="email" value={user.email} onChange={e => onInputChange(e)} />
                </div>
                <p className={errorStyle}>{formErrors.email}</p>
                <div className="form-group">
                    <label htmlFor="tel">Phone</label>
                    <input type="tel" className="form-control" id="phone" name="phone" value={user.phone} onChange={e => onInputChange(e)} />
                </div>
                <p className={errorStyle}>{formErrors.phone}</p>
                <div className="form-group">
                    <label htmlFor="website">WebSite</label>
                    <input type="text" className="form-control" id="website" name="website" value={user.website} onChange={e => onInputChange(e)} />
                </div>
                <p>{formErrors.website}</p>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default AddUser;