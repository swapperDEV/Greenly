import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";
import "firebase/firestore";
import { User } from "@firebase/auth-types";
import { firebaseConfig } from "../../assets/configs/firebaseConfig";

type CurrentUser = User;

export const useFirebase = () => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [canLogged, setCanLogged] = useState(false);
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const signOutUser = () => {
    return signOut(auth);
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user as User);
      setCanLogged(true);
    });
  });
  return {
    currentUser,
    setCurrentUser,
    canLogged,
    auth,
    app,
    signOutUser,
  };
};
