import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const dropDownOptions = [
    { key: "Select an option", value: "" },
    { key: "Ip range 1", value: "ip1" },
    { key: "Ip range 2", value: "ip2" },
    { key: "Ip range 3", value: "ip3" },
  ];

  const radioOptions = [
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];

  const checkOptions = [
    { key: "cOption 1", value: "cOption1" },
    { key: "cOption 2", value: "cOption2" },
    { key: "cOption 3", value: "cOption3" },
  ];

  const initialValues = {
    email: "",
    description: "",
    ipOptions: "",
    radioOptions: "",
    checkOptions: [],
  };

  const onSubmit = (values) => console.log("Submitted values: ", values);
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Required"),
    description: Yup.string().required("Required"),
    ipOptions: Yup.string().required("Required"),
    radioOptions: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnBlur={false}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              label="Email"
              type="email"
              id="email"
              name="email"
            />
            <FormikControl
              control="textarea"
              label="description"
              name="description"
              id="description"
            />
            <FormikControl
              control="select"
              label="Ip options"
              name="ipOptions"
              id="ipOptions"
              options={dropDownOptions}
            />
            <FormikControl
              control="radio"
              label="Select an option"
              name="radioOptions"
              options={radioOptions}
            />
            <FormikControl
              control="textarea"
              label="description"
              name="description2"
              id="description"
            />

            <FormikControl
              control="checkbox"
              label="check options"
              name="checkOptions"
              options={checkOptions}
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikContainer;
