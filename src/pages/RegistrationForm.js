import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "../components/FormikControl";
import * as Yup from "yup";

const RegistrationForm = () => {
  const modeOptions = [
    { key: "Email", value: "email" },
    { key: "Phone", value: "phone" },
  ];
  const onSubmit = (values) => {
    console.log("values: ", values);
  };

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "email",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Email is not valid"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), ""],
      "Password does not match"
    ),
    modeOfContact: Yup.string().required(),
    phone: Yup.string().when("modeOfContact", {
      is: "phone",
      then: Yup.string().required("Phone is required"),
    }),
  });

  return (
    <div className="form-control">
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnMount={true}
        validateOnChange={false}
        validateOnBlur={true}
      >
        {(formik) => {
          console.log("formik: ", formik);
          return (
            <Form
              onChange={async (event) => {
                console.log("1");
                console.log("2", event);
                //formik.setFieldValue("modeOfContact", event.target.value);
                await formik.handleChange(event);
                //formik.onChange(event);
                if (event.target.name === "modeOfContact") {
                  console.log("3");
                  console.log("values", formik.values);

                  if (event.target.value === "phone") {
                    formik.setFieldTouched("phone");
                    formik.validateForm();
                  }
                }
              }}
            >
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
                id="email"
              />
              <FormikControl
                control="input"
                type="password"
                label="Password"
                name="password"
                id="password"
              />
              <FormikControl
                control="input"
                type="password"
                label="Confirm Password"
                name="confirmPassword"
                id="confirmPassword"
              />
              <FormikControl
                control="radio"
                id="modeOfContact"
                name="modeOfContact"
                label="Mode of Contact"
                options={modeOptions}
              />
              <FormikControl
                control="input"
                id="phone"
                type="text"
                label="Phone Number"
                name="phone"
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

export default RegistrationForm;
