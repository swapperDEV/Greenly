import React from "react";
import styles from "./signupform.module.scss";
import { Formik } from "formik";
import Image from "next/image";
import plantGrow from "../../../../assets/growplant2.png";
export const SignupForm = ({ setAction }: { setAction: Function }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Image src={plantGrow} width="500px" height="300px" />
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
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
              alert(JSON.stringify(values, null, 2));

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
