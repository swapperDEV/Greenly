import React, { useEffect, useState } from "react";
import styles from "./deliveryform.module.scss";
import { Input } from "../Input/Input";
import { Formik } from "formik";
import { GreenButton } from "../Buttons/GreenButton/GreenButton";
export const DeliveryForm = ({
  redirectToPayment,
  address,
}: {
  redirectToPayment: Function;
  address: null | {
    address: string;
    country: string;
    postalcode: string;
    city: string;
    firstname: string;
    lastname: string;
    email: string;
  };
}) => {
  const [error, setError] = useState<null | string>(null);
  const [rendered, setRendered] = useState(false);
  const [initialValues, setInitialValues] = useState({
    address: "",
    country: "",
    postalcode: "",
    city: "",
    firstname: "",
    lastname: "",
    email: "",
  });
  useEffect(() => {
    if (address !== null) {
      console.log("settings");
      setInitialValues(address);
    } else {
      console.log(" error settings ");
    }
    setRendered(true);
  }, []);
  return (
    <div className={styles.wrapper}>
      {rendered && (
        <>
          <Formik
            initialValues={initialValues}
            validate={(values) => {
              const errors: { email?: string; postalcode?: string } = {};

              if (
                !values.email ||
                !values.country ||
                !values.address ||
                !values.city ||
                !values.firstname ||
                !values.lastname ||
                !values.postalcode
              ) {
                errors.email = "Fill all form";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }

              if (!values.postalcode.match(/^\d\d-\d\d\d$/)) {
                errors.postalcode = "Uncorrect postal code";
              }

              if (errors.email) {
                setError(errors.email);
              } else if (errors.postalcode) {
                setError(errors.postalcode);
              } else {
                setError(null);
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
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
              <form onSubmit={handleSubmit} className={styles.form}>
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
                  <p className={styles.error}>
                    {typeof error === "string" && error}
                  </p>
                  <GreenButton text="Save and continue" />
                </div>
              </form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
};
