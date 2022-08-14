import React from "react";
import styles from "./deliveryform.module.scss";
import { Input } from "../Input/Input";
import { Formik } from "formik";
import { GreenButton } from "../Buttons/GreenButton/GreenButton";
export const DeliveryForm = ({
  redirectToPayment,
}: {
  redirectToPayment: Function;
}) => {
  return (
    <div className={styles.wrapper}>
      <Formik
        initialValues={{
          address: "",
          country: "",
          postalcode: "",
          city: "",
          firstname: "",
          lastname: "",
          email: "",
        }}
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
            console.log("submit");
            redirectToPayment(values);
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
          <form className={styles.form}>
            <div className={styles.names}>
              <Input
                type="text"
                name="firstname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstname}
              />
              <Input
                type="text"
                name="lastname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastname}
              />
            </div>
            <div className={styles.email}>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
            <div className={styles.addressCity}>
              <Input
                type="text"
                name="city"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
              />
              <Input
                type="text"
                name="country"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.country}
              />
              <Input
                type="text"
                name="postalcode"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.postalcode}
              />
            </div>
            <div className={styles.address}>
              <Input
                type="text"
                name="address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
              />
            </div>
            <div className={styles.comButton}>
              <GreenButton
                text="Save and continue"
                onClick={() => handleSubmit()}
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
