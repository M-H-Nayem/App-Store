import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase.init";

export let AuthContext = createContext();

let dataPromise = fetch("AppData.jsx").then((res) => res.json());

const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);
  console.log(user);

  let createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  let logOut = () => {
    return signOut(auth);
  };
  let logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    let unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  let All = {
    dataPromise,
    user,
    setUser,
    createUser,
    logOut,
    logIn,
  };

  return <AuthContext value={All}>{children} </AuthContext>;
};

export default AuthProvider;
