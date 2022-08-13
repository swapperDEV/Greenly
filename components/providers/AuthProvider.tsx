import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAuth, updateUser } from "../../store/firebase";
import { IStore } from "../../types/store";
import { getAuth } from "firebase/auth";
export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const dispatch = useDispatch();
  const { auth, app, user } = useSelector((state: IStore) => state.firebase);
  dispatch(updateAuth(getAuth(app)));
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(updateUser(user));
    }
  });
  useEffect(() => {
    console.log(user.uid);
  }, [user]);
  return <>{children}</>;
};
