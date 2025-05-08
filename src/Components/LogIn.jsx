import React, { use, useState } from "react";
import { Link, Links, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider";

const LogIn = () => {
  let [error , setError]= useState("")
  let { logIn } = use(AuthContext);
  let navigate = useNavigate();
  let location = useLocation();
  console.log(location);

  let handleLogin = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    setError("")
    //   console.log(email, password);
    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(`${location.state?location.state:"/"}`)
      
      })
      
      .catch((error) => {
        console.log(error);
        // const errorCode = error.code;
    // const errorMessage = error.message;
        // alert("wrong pass")
        // setError(errorCode)
        setError("Invalid Email or Password")
      });

   
  };
  return (
    <>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto rounded-2xl mt-10 p-5">
        <h1 className="text-center text-3xl font-bold">Log In</h1>
        <div className="card-body  rounded-2xl">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label text-xl">Email</label>
            <input
              name="email"
              type="email"
              className="input bg-gray-100 px-3"
              placeholder="Email"
              required
            />
            <label className="label text-xl">Password</label>
            <input
              name="password"
              type="password"
              className="input  bg-gray-100 px-3"
              placeholder="Password"
              required
            />
            <div className="hover:underline">
              <Link >Forgot password?</Link>
            </div>
            {
              error && <p className="text-red-700">{ error}</p>
            }
            <button
              type="submit"
              className="btn text-xl bg-gray-100 mt-2 border-none "
            >
              Login
            </button>
            <p>
              New in this Website ? Please{" "}
              <Link className="underline text-blue-400" to="/register">
                Register
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
