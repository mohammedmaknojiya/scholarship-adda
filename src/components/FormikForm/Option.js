import React from "react";
import { Field, ErrorMessage } from "formik";

const Option = (props) => {
  const { label, name, options, ...rest } = props;

  return (
    <div className="label-and-input">
      <label className="form-label">{label}</label>
      <Field as="select" className="select-input" name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} />
    </div>
  );
};

export default Option;
