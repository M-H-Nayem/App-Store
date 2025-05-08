import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase.init";


export let AuthContext = createContext();

let dataPromise = fetch("AppData.json").then((res) => res.json());

const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);
  // let [userInfo, setUserInfo] = useState(null);
  let [loading, setLoading] = useState(true);

  // console.log(userInfo);
const provider = new GoogleAuthProvider();


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
  
  let googleLogin = () => {
    return signInWithPopup(auth,provider)
  }

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
    googleLogin,
 
  };

  return <AuthContext value={All}>{children} </AuthContext>;
};

export default AuthProvider;
