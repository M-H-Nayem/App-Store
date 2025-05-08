import React, { use } from "react";
import { AuthContext } from "../AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const MyProfile = () => {
  let { user } = use(AuthContext);
  console.log(user);
  return (
      <>
          {
              user ?  <div className="h-fit flex flex-col justify-center items-center gap-3 shadow-2xl bg-gray-100 w-fit mx-auto p-10 rounded-3xl mt-10">
              <FaUserCircle size={50} fill="#eb41a0" />
          <p className="text-2xl font-bold">{user.displayName }</p>
          <p className="text-xl font-semibold">{ user.email }</p>
        </div> : <p className="text-center mt-10 text-2xl font-bold">No User Logged in</p>
      }
      </>
  );
};

export default MyProfile;
