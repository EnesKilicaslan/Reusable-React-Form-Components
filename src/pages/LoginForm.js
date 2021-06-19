import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../components/FormikControl";

const LoginForm = () => {
  const initalValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log("values: ", values);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
  });

  return (
    <div>
      <Formik
        initialValues={initalValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnMount={true}
      >
        {(formik) => {
          return (
            <Form className="form-control">
              <FormikControl
                control="input"
                type="email"
                name="email"
                label="Email"
              />
              <FormikControl
                control="input"
                type="password"
                name="password"
                label="Password"
              />

              <button type="submit" disabled={!formik.isValid}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginForm;
