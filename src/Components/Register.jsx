import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider";

const Register = () => {
  let navigate = useNavigate();
  let { createUser, setUser, googleLogin, setUserInfo } = use(AuthContext);

  let [nameError, setNameError] = useState("");
  // let [emailError, setEmailError] = useState("");
  let [passwordError, setPasswordError] = useState("");

  let handleRegister = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let url = e.target.url.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    // setUserInfo({
    //   name,
    //   url,
    //   email,
    // });

    console.log(url);
    if (name.length < 5) {
      setNameError("Name should be more then 5 charecter");
      return;
    } else {
      setNameError("");
    }

    if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
      setPasswordError(
        "Must contain at least 6 characters, one uppercase, one lowercase"
      );
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
      .then((result) => {
        let user = result.user;
        console.log(user);
        setUser(user);
        alert("done");
        navigate("/");
      })
      .catch(() => {});
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
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl mx-auto rounded-2xl mt-10 p-5">
        <h1 className="text-center text-3xl font-bold">Please Register</h1>
        <div className="card-body  rounded-2xl">
          <form onSubmit={handleRegister} className="fieldset">
            <label className=" text-xl w-full">Name</label>
            <input
              name="name"
              type="text"
              className="input bg-gray-100 px-3 w-full"
              placeholder="Name"
              required
            />
            {nameError && <p className="text-red-700">{nameError}</p>}
            <label className="label text-xl">Photo Url</label>
            <input
              name="url"
              type="text"
              className="input bg-gray-100 px-3 w-full"
              placeholder="Provide Photo Url"
              required
            />
            <label className="label text-xl">Email</label>
            <input
              name="email"
              type="email"
              className="input bg-gray-100 px-3 w-full"
              placeholder="Email"
              required
            />
            <label className="label text-xl">Password</label>
            <input
              name="password"
              type="password"
              className="input  bg-gray-100 px-3 w-full"
              placeholder="Password"
              required
            />
            {passwordError && <p className="text-red-700">{passwordError}</p>}
            <button
              type="submit"
              className="btn text-xl bg-gray-200 mt-5 border-none "
            >
              Register
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
              Register with Google
            </button>
            <p>
              Already Have an Account ? Please{" "}
              <Link className="underline text-blue-400" to="/login">
                Log In
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
