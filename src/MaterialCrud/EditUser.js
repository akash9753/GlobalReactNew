import React, { useState } from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import classNames from "classnames";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";

import { getUser, editUser } from "../server/Api";
import { useEffect } from "react";

// const initialValue = {
//   fname: "",
//   lname: "",
//   email: "",
//   mobile: "",
//   gender: "",
//   state: "",
// };

function EditUser() {
  const [user, setUser] = useState();

  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  // console.log(errors);

    useEffect(() => {
      getUserData();
    }, []);

  useEffect(() => {
    reset(user);
  }, [user]);

  const getUserData = async () => {
    console.log(id);
    let response = await getUser(id);
    console.log(response.data.data);
    setUser(response.data.data);
  };
  console.log(user);
  // console.log(user.data.fname);
  // console.log(user.data.lname);
  // console.log(user.data.gender);
  // console.log(user.data.email);
  // console.log(user.data.mobile);
  // console.log(user.data.state);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fname: user?.fname,
      lname: user?.lname,
      email: user?.email,
      mobile: user?.mobile,
      gender: user?.gender,
      state: user?.state,
    },
    mode: "onTouched",
  });

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (data) => {
    await editUser(data, id);
    toast.success("Information have been updated successfully.");
    console.log(data);
    setTimeout(() => {
      navigate("/allUsers");
    }, 1000);
  };

  return (
    <div className="">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 align="center">Edit User</h1>
            <div className="form-group" style={{ marginTop: 20 }}>
              <label htmlFor="fname">First Name</label>
              <input
                className={classNames("form-control", {
                  "is-invalid": errors.fname,
                })}
                type="text"
                id="fname"
                name="fname"
                {...register("fname", {
                  required: true,
                  minLength: 2,
                  pattern: /^[a-zA-Z ]{2,30}$/,
                })}
                onChange={(e) => onValueChange(e)}
              />

              {errors.fname?.type === "required" && (
                <div className="invalid-feedback">This field is required</div>
              )}

              {errors.fname?.type === "minLength" && (
                <div className="invalid-feedback">
                  Minimum 2 character required
                </div>
              )}
              {errors.fname?.type === "pattern" && (
                <div className="invalid-feedback">Only character allowed</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="lname">Last Name</label>
              <input
                className={classNames("form-control", {
                  "is-invalid": errors.lname,
                })}
                type="text"
                id="lname"
                name="lname"
                {...register("lname", {
                  required: true,
                  minLength: 2,
                  pattern: /^[a-zA-Z ]{2,30}$/,
                })}
                onChange={(e) => onValueChange(e)}
              />

              {errors.lname?.type === "required" && (
                <div className="invalid-feedback">This field is required</div>
              )}

              {errors.lname?.type === "minLength" && (
                <div className="invalid-feedback">
                  Minimum 2 character required
                </div>
              )}
              {errors.lname?.type === "pattern" && (
                <div className="invalid-feedback">Only character allowed</div>
              )}
            </div>

            <div className="form-group">
              <label>Gender</label>
              <br />
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="male"
                  value="male"
                  {...register("gender", { required: true })}
                  onChange={(e) => onValueChange(e)}
                />
                <label className="form-check-label" htmlFor="male">
                  male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="female"
                  value="female"
                  {...register("gender", { required: true })}
                  onChange={(e) => onValueChange(e)}
                />
                <label className="form-check-label" htmlFor="female">
                  female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="other"
                  value="other"
                  {...register("gender", { required: true })}
                  onChange={(e) => onValueChange(e)}
                />
                <label className="form-check-label" htmlFor="other">
                  other
                </label>
              </div>
              {errors.gender?.type === "required" && (
                <div className="form-text text-danger">
                  This field is required
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                className={classNames("form-control", {
                  "is-invalid": errors.mobile,
                })}
                {...register("mobile", {
                  required: true,
                  pattern: /^([0-9]{10,12})$/,
                })}
                onChange={(e) => onValueChange(e)}
              />
              {errors.mobile?.type === "required" && (
                <div className="invalid-feedback">This field is required</div>
              )}

              {errors.mobile?.type === "pattern" && (
                <div className="invalid-feedback">
                  Enter 10 digit valid mobile number
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className={classNames("form-control", {
                  "is-invalid": errors.email,
                })}
                id="email"
                name="email"
                {...register("email", {
                  required: true,
                  pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })}
                onChange={(e) => onValueChange(e)}
              />
              {errors.email?.type === "required" && (
                <div className="invalid-feedback">This field is required</div>
              )}

              {errors.email?.type === "pattern" && (
                <div className="invalid-feedback">
                  Enter a valid email address
                </div>
              )}
            </div>

            <div className="form-group">
              <label>Choose State</label>
              <select
                className={classNames("form-control", {
                  "is-invalid": errors.state,
                })}
                {...register("state", { required: true })}
                onChange={(e) => onValueChange(e)}
              >
                <option value="">Select your state</option>
                <option value="Delhi">Delhi</option>
                <option value="Punjab">Punjab</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Bihar">Bihar</option>
              </select>
              {errors.state?.type === "required" && (
                <div className="invalid-feedback">This field is required</div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: 4 }}
            >
              Edit
            </button>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default EditUser;
