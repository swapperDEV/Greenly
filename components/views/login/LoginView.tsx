import React, { useContext, useEffect, useState } from "react";
import styles from "./login.module.scss";
import { MotionProvider } from "../../providers/MotionProvider";
import { LoginForm } from "../../organisms/Account/LoginForm/LoginForm";
import { SignupForm } from "../../organisms/Account/SignupForm/SignupForm";
import { useSelector } from "react-redux";
import { IStore } from "../../../types/store";
import { FirebaseContext } from "../../../store/firebase-context";
export const LoginView = () => {
  const [action, setAction] = useState("login");
  const FirebaseCtx = useContext(FirebaseContext);
  const { currentUser } = FirebaseCtx;
  return (
    <>
      {currentUser && currentUser.uid ? (
        <>
          <p>You are logged</p>
        </>
      ) : (
        <>
          {action === "login" && (
            <MotionProvider classes={styles.wrapper}>
              <LoginForm setAction={setAction} />
            </MotionProvider>
          )}
          {action === "signup" && (
            <MotionProvider classes={styles.wrapper}>
              <SignupForm setAction={setAction} />
            </MotionProvider>
          )}
        </>
      )}
    </>
  );
};
