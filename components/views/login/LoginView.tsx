import React, { useEffect, useState } from "react";
import styles from "./login.module.scss";
import { MotionProvider } from "../../providers/MotionProvider";
import { LoginForm } from "../../organisms/Account/LoginForm/LoginForm";
import { SignupForm } from "../../organisms/Account/SignupForm/SignupForm";
import { useSelector } from "react-redux";
import { IStore } from "../../../types/store";
export const LoginView = () => {
  const [action, setAction] = useState("login");
  const { user } = useSelector((state: IStore) => state.firebase);
  useEffect(() => {
    console.log(user.uid);
  }, [user]);
  return (
    <>
      {user.uid ? (
        <>
          <p>You are logged</p>
        </>
      ) : (
        <>
          {" "}
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
