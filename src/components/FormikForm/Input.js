import React from "react";
import { Field, ErrorMessage } from "formik";

const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="label-and-input">
      <label className="form-label">{label}</label>
      <Field className="input-field" name={name} {...rest} />
      <ErrorMessage name={name} />
    </div>
  );
};

export default Input;
