import React, { useState } from 'react';
import '../App.css';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUesrContext } from '../context/userContext';

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onTouched"
  });
  const {logIn} = useUesrContext(); 
  console.log(errors);
  const [uName, setuName] = useState("");
  const [password, setPassword] = useState("");
  
  const onSubmit = (data) => {
    logIn(data.uName)
    toast.success('Information have been saved successfully.');
    console.log(data);
    setuName(data.uName)
    setPassword(data.password)
    console.log(uName);
    console.log(password);
  }
  return (
    <div className="">
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className='form-group'>
              <label htmlFor="uName">User Name</label>
              <input className={classNames("form-control", { "is-invalid": errors.uName })}
                type="text" id='uName'
                {...register("uName", { required: true, minLength: 2, pattern: /^[a-zA-Z ]{2,30}$/ })} />

              {errors.uName?.type === "required" && (
                <div className="invalid-feedback">This field is required</div>
              )}

              {errors.uName?.type === "minLength" && (
                <div className="invalid-feedback">Minimum 2 character required</div>
              )}
              {errors.uName?.type === "pattern" && (
                <div className="invalid-feedback">Only character allowed</div>
              )}
            </div>



            <div className='form-group'>
              <label htmlFor="password">Password</label>
              <input type="password" className={classNames("form-control", { "is-invalid": errors.password })}
                {...register("password", { required: true, pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$/ })} />
              {errors.password?.type === "required" && (
                <div className="invalid-feedback">This field is required</div>
              )}
              {errors.password?.type === "pattern" && (
                <div className="invalid-feedback">Password length must be 8-16 character and contain upper case, lower case, numbers and special characters</div>
              )}
            </div>


            <button type='submit' className='btn btn-primary' style={{ marginTop: 4 }}>Submit</button>
          </form>


        </div>
        <div className='col-md-4'></div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LoginForm;