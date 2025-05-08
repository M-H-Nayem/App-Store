import React, { use } from "react";
import { Link, Links, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider";

const LogIn = () => {
    let { logIn } = use(AuthContext);
    let navigate= useNavigate()

  let handleLogin = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    //   console.log(email, password);
      logIn(email, password);
      navigate("/")
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
            />
            <label className="label text-xl">Password</label>
            <input
              name="password"
              type="password"
              className="input  bg-gray-100 px-3"
              placeholder="Password"
            />
            <div>
              <Link>Forgot password?</Link>
            </div>
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
