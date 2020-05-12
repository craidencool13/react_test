import React from "react";
import { Field } from "formik";

const InputField = ({
  label,
  name,
  error = null,
  touched = null,
  ...props
}) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <Field
        {...{ name, ...props }}
        className={`form-control py-3 ${error && touched ? "is-invalid" : ""}`}
      />
      {error && touched && <div className="errorText text-danger">{error}</div>}
    </div>
  );
};

export default InputField;
