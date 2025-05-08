import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase.init";


export let AuthContext = createContext();

let dataPromise = fetch("AppData.json").then((res) => res.json());

const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);
  let [loading, setLoading] = useState(true);

  let createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  let logOut = () => {
    return signOut(auth);
  };
  let logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    let unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
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
    setLoading,
    loading,
  };

  return <AuthContext value={All}>{children} </AuthContext>;
};

export default AuthProvider;
