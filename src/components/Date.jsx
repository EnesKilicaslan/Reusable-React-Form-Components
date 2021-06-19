import React from "react";
import DatePicker from "react-datepicker";
import TextError from "./TextError";

import { Field, ErrorMessage } from "formik";
import "react-datepicker/dist/react-datepicker.css";

function Date(props) {
  const { label, name, ...rest } = props;

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>

      <Field name={name} {...rest}>
        {({ form, field }) => {
          const { value } = field;
          const { setFieldValue } = form;
          //   console.log("field:", field);
          //   console.log("form:", form);
          return (
            <DatePicker
              selected={value}
              onChange={(date) => setFieldValue(name, date)}
            />
          );
        }}
      </Field>

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Date;
