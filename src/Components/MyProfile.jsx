import React, { use } from "react";
import { AuthContext } from "../AuthProvider";

const MyProfile = () => {
  let { user } = use(AuthContext);
  console.log(user);
  return (
      <>
          {
              user ?  <div className="h-[500px] flex flex-col justify-center items-center gap-3 bg-gray-400 w-5/12 mx-auto p-10 rounded-3xl mt-10">
              <img className="w-15 h-15 rounded-full" src={user.photoURL} alt="Profile" />
          <p className="text-2xl font-bold">{user.displayName }</p>
          <p className="text-xl font-semibold">{ user.email }</p>
        </div> : <p className="text-center mt-10 text-2xl font-bold">No User Logged in</p>
      }
      </>
  );
};

export default MyProfile;
