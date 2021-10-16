import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../FormikForm/FormikControl";
import "./SignUp.css";

const initialValues = {
  email_id: "",
  password: "",
  contact_no: "",
  user_or_admin: "",
};

const validationSchema = Yup.object({
  email_id: Yup.string().email("Invalid Email Id").required("Required"),
  password: Yup.string().required("Required"),
  contact_no: Yup.string().required("Required"),
  user_or_admin: Yup.string().required("Required"),
});

const onSubmit = (v) => {
  console.log(v);
};

const user_or_admin = [
  { key: "Select Type", value: "" },
  { key: "Admin ", value: "admin" },
  { key: "User", value: "user" },
];

const SignUp = () => {
  return (
    <div className="signup-container">
      <span className="signup-title">Sign Up</span>
      <div className="signup-form-container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <FormikControl
                  control="input"
                  label="Email Id"
                  name="email_id"
                />
                <FormikControl
                  control="select"
                  label="User / Admin"
                  name="user_or_admin"
                  options={user_or_admin}
                />
                <FormikControl
                  control="input"
                  label="Contact Number"
                  name="contact_no"
                  type="number"
                />
                <FormikControl
                  control="input"
                  label="Password"
                  name="password"
                  type="password"
                />

                <button className="form-button" type="submit">
                  Sign Up
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
