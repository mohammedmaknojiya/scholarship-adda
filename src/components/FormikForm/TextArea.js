import React from "react";
import { Field, ErrorMessage } from "formik";

const TextArea = (props) => {
  const { label, name, ...rest } = props;

  return (
    <div className="label-and-input">
      <label className="form-label">{label}</label>
      <Field
        className="text-area"
        as="textarea"
        cols="40"
        rows="5"
        name={name}
        {...rest}
      />
      <ErrorMessage name={name} />
    </div>
  );
};

export default TextArea;
