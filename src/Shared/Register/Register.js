import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import Menubar from "../Menubar/Menubar";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <Menubar />
      <div className="login" style={{ textAlign: "center", paddingTop: "15%", color: "white" }}>
        <div
          style={{
            margin: "0 auto",
            display: "inline-block",
            // border: "1px solid red",
            boxShadow: "inset 1px 1px 10px rgb(255,255,255,0.2)",
            padding: "50px 20px",
          }}
        >
          <h1>Register New Account</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Name" style={{ fontSize: "18px", padding: "10px" }} {...register("name")} type="text" />
            <input placeholder="Email" style={{ fontSize: "18px", padding: "10px" }} {...register("email")} type="email" />
            <input placeholder="Password" style={{ fontSize: "18px", padding: "10px" }} {...register("password")} type="password" />
            <input
              style={{ fontSize: "18px", padding: "10px", background: "#EC5990", border: "none", color: "white" }}
              value="CONTINUE"
              type="submit"
            />
          </form>

          <div>
            <p>
              Already have an account?
              <NavLink style={{ color: "#EC5990", textDecoration: "none" }} to="/login">
                {" "}
                Please Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
