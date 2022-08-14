import React from "react";
import { FirebaseContext } from "../../store/firebase-context";
import "firebase/firestore";
import { User } from "@firebase/auth-types";
import { useFirebase } from "../../core/hooks/useFirebase";
import { Puff } from "react-loader-spinner";
import styles from "./styles/auth.module.scss";

type FirebaseProps = {
  children: JSX.Element;
};
export const AuthProvider = ({ children }: FirebaseProps) => {
  const { currentUser, setCurrentUser, canLogged, auth, app, signOutUser } =
    useFirebase();
  return (
    <>
      <FirebaseContext.Provider
        value={{
          canLogged: canLogged,
          auth: auth,
          app: app,
          currentUser: currentUser,
          setCurrentUser: (x: User) => setCurrentUser(x),
          signOutUser: () => signOutUser(),
        }}
      >
        {canLogged ? (
          <>{children}</>
        ) : (
          <div className={styles.wrapper}>
            <Puff width="220" color="grey" ariaLabel="loading" />
          </div>
        )}
      </FirebaseContext.Provider>
    </>
  );
};
