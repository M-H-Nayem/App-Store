import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthProvider";

const Register = () => {
  let { createUser, setUser } = use(AuthContext);

  let handleRegister = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let url = e.target.url.value;
    let email = e.target.email.value;
    let password = e.target.password.value;

    console.log(name, url, email, password);

    createUser(email, password)
      .then((result) => {
        let user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
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
            />
            <label className="label text-xl">Photo Url</label>
            <input
              name="url"
              type="text"
              className="input bg-gray-100 px-3 w-full"
              placeholder="Provide Photo Url"
            />
            <label className="label text-xl">Email</label>
            <input
              name="email"
              type="email"
              className="input bg-gray-100 px-3 w-full"
              placeholder="Email"
            />
            <label className="label text-xl">Password</label>
            <input
              name="password"
              type="password"
              className="input  bg-gray-100 px-3 w-full"
              placeholder="Password"
            />

            <button
              type="submit"
              className="btn text-xl bg-gray-200 mt-5 border-none "
            >
              Register
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
