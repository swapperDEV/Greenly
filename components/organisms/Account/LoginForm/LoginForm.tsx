import React from "react";
import styles from "./loginform.module.scss";
import { Formik } from "formik";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../../store/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import plantGrow from "../../../../assets/growplant2.png";
import { IStore } from "../../../../types/store";
export const LoginForm = ({ setAction }: { setAction: Function }) => {
  const { auth } = useSelector((state: IStore) => state.firebase);
  const dispatch = useDispatch();
  const userLogin = (values: { email: string; password: string }) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        dispatch(updateUser(userCredential.user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className={styles.wrapper}>
      <Image src={plantGrow} width="500px" height="300px" />
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors: { email?: string } = {};

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            userLogin(values);
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
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
            <p>
              Forgot <a>password</a>?
            </p>
            <p>
              or <a onClick={() => setAction("signup")}>signup</a>
            </p>
          </form>
        )}
      </Formik>
    </div>
  );
};
