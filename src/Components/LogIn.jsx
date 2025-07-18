import React, { use, useState } from "react";
import { Link, Links, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider";

const LogIn = () => {
  let [error, setError] = useState("");
  let { logIn, googleLogin } = use(AuthContext);
  let navigate = useNavigate();
  let location = useLocation();
  console.log(location);

  let handleLogin = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    setError("");
    //   console.log(email, password);
    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(`${location.state ? location.state : "/"}`);
      })

      .catch((error) => {
        console.log(error);

        setError("Invalid Email or Password");
      });
  };
  let handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
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
              <Link>Forgot password?</Link>
            </div>
            {error && <p className="text-red-700">{error}</p>}
            <button
              type="submit"
              className="btn text-xl bg-gray-100 mt-2 border-none "
            >
              Login
            </button>
            <button
              onClick={handleGoogleLogin}
              className="btn bg-white text-black border-[#e5e5e5] text-[17px]"
            >
              <svg
                aria-label="Google logo"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
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
