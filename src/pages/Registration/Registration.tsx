import React from "react";
import { Formik, FormikErrors } from "formik";

import * as SC from "./Registration.styled";

interface FormValues {
  email: string;
  password: string;
}

const Registration = () => {
  const initialValues: FormValues = { email: "", password: "" };

  return (
    <SC.Wrapper>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          let errors: FormikErrors<FormValues> = {};

          if (!values.email) {
            errors.email = "Email is required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.password) {
            errors.password = "A password is required";
          } else if (values.password.length < 6) {
            errors.password = "Password must be 6 characters";
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          touched,
          errors,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <SC.Form onSubmit={handleSubmit}>
            <SC.Label>
              Email *
              {touched.email && errors.email && (
                <SC.Text color="red">{errors.email}</SC.Text>
              )}
              <SC.Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                // border={touched.email && errors.email && "1px solid red"}
                type="text"
                name="email"
                placeholder="Email"
              />
            </SC.Label>
            <SC.Label>
              Password *
              {touched.password && errors.password && (
                <SC.Text color="red">{errors.password}</SC.Text>
              )}
              <SC.Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                border={touched.password && errors.password && "1px solid red"}
                type="password"
                name="password"
                placeholder="Password"
              />
            </SC.Label>
            <SC.Button type="submit">Submit</SC.Button>
          </SC.Form>
        )}
      </Formik>
    </SC.Wrapper>
  );
};

export default Registration;
