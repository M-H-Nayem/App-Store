import React, { use } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../AuthProvider";

const Navbar = () => {
  let { user,logOut } = use(AuthContext)

  let links = (
    <>
      <li>
        <NavLink className={({ isActive }) =>
          isActive ? "text-red-500 underline" : "text-black"
        } to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) =>
          isActive ? "text-red-500 underline" : "text-black"
        } to="/recomended">Recomended</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) =>
          isActive ? "text-red-500 underline" : "text-black"
        } to="/popular">Popular</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) =>
          isActive ? "text-red-500 underline" : "text-black"
        } to="/productivity">Productivity</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) =>
          isActive ? "text-red-500 underline" : "text-black"
        } to="/education" >Education</NavLink>
       
      </li>
      <li>
        <NavLink className={({ isActive }) =>
          isActive ? "text-red-500 underline" : "text-black"
        } to="/health">Health</NavLink>
        
      </li>
      <li>
        <NavLink className={({ isActive }) =>
          isActive ? "text-red-500 underline" : "text-black"
        } to="/games" >Games</NavLink>
        
      </li>
      
    </>
  );

  let handleLogout = () => {
    console.log("logout");
    logOut().then(() => {
      // Sign-out successful.
      alert("LOGGED OUT")
          })
          .catch((error) => {
            // An error happened.
            console.log(error);
          });
  }
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm w-full px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[20px]"
            >
              {links}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <img
              className="lg:w-15 lg:h-15 w-7 h-7 "
              src="S.jpg"
              alt=""
            />
            <a className=" lg:text-3xl w-[150%] font-bold ">
              App <span className="text-blue-600">Store</span>
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[20px]">

            {links}
           
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
          <p>{user && user.email}</p>
          <p>{user && user.name}</p>
          
          <FaUserCircle size={30} fill="blue"/>
          <Link to="/login" ><button onClick={handleLogout} className="btn bg-blue-500 border-none rounded-xl w-[100px] text-white px-2 text-[18px]">{ user? "Log Out" : "Log In"}</button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
