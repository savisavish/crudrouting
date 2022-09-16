import React from 'react'
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            placeholder="Enter Your Full Name"
            {...register("fullname", { 
              required: "this is required",
              minLength:{
              value:5,
              message:"*Minimum length should be 5"
              },
               })}
            name="fullname"
          />
          {errors.fullname && <p className="form-text text-danger">{errors.fullname.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail Address</label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter Your E-mail Address"
            {...register('email', {
            required: 'this is required',
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Invalid email address',
            },
          })}
          />
          {errors.email && <p className="form-text text-danger">{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Enter Your Phone Number"
            {...register("phone", { required: true })}
            name="phone"
          />
          {errors.phone && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="form-control"
            id="password"
            placeholder="Enter Your Password"
            {...register("password", { required: true })}
            name="password"
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="state">Choose Your State</label>
          <select className="form-control" id="state" {...register("state", { required: true })} name="state">
            <option value="">--- Select Your State ---</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Assam">Assam</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Punjab">Punjab</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="mr-4">Choose Your Gender</label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="male"
              value="male"
              name="gender"
              {...register("male", { required: true })}
            />
            <label className="form-check-label" htmlFor="male">male</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="female"
              value="female"
              name="gender"
              {...register("female", { required: true })}
            />
            <label className="form-check-label" htmlFor="female">female</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="other"
              value="other"
              name="gender"
              {...register("other", { required: true })}
            />
            <label className="form-check-label" htmlFor="other">other</label>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input type="checkbox" className="form-check-input" id="tnc" {...register("tnc", { required: true })} name="tnc" />
            <label htmlFor="form-check-label">I agree all terms and condition</label>
          </div>
          {errors.tnc && <span>This field is required</span>}
        </div>
        <button className="btn btn-primary" type="submit">Create New Account</button>
      </form>
    </>
  )
};
export default SignUp;
