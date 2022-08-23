import React, { useContext, useState } from "react";
import styles from "./signupform.module.scss";
import { Formik } from "formik";
import Image from "next/image";
import plantGrow from "../../../../assets/growplant2.png";
import { FirebaseContext } from "../../../../store/firebase-context";
import { createUserWithEmailAndPassword } from "firebase/auth";
export const SignupForm = ({ setAction }: { setAction: Function }) => {
  const FirebaseCtx = useContext(FirebaseContext);
  const [error, setError] = useState<string | null>(null);
  const { auth } = FirebaseCtx;
  const userSignup = (values: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setError(null);
      })
      .catch((error) => {
        if (error.Code === "auth/email-already-in-use") {
          setError("Email is already in use!");
        }
      });
  };
  return (
    <>
      <div className={styles.wrapper}>
        <Image src={plantGrow} width="500px" height="300px" />
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          validate={(values) => {
            const errors: { email?: string; password?: string } = {};

            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (values.password.length < 7) {
              errors.password = "Too short password!";
            }

            if (values.password !== values.confirmPassword) {
              errors.password = "Passwords dont match!";
            }

            if (errors.password || errors.email) {
              if (errors.email) {
                setError(errors.email);
              } else if (errors.password) {
                setError(errors.password);
              }
            } else {
              setError(null);
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              userSignup(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className={styles.form}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={errors.email && styles.errorInput}
              />
              <label>Password</label>
              <input
                type="password"
                className={errors.password && styles.errorInput}
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <label>Confirm Password</label>
              <input
                type="password"
                className={errors.confirmPassword && styles.errorInput}
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              <p className={styles.error}>
                {typeof error === "string" && error}
              </p>
              <button type="submit" disabled={isSubmitting}>
                Signup
              </button>
              <p>
                or <a onClick={() => setAction("login")}>login</a> if you have
                account.
              </p>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};
