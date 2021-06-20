import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "../components/FormikControl";

const CourseEnrollmentForm = () => {
  const courseOptions = [
    { key: "React", value: "react" },
    { key: "Vue", value: "vue" },
    { key: "Angular", value: "angular" },
  ];

  const skillSet = [
    { key: "HTML", value: "html" },
    { key: "css", value: "css" },
    { key: "JS", value: "js" },
  ];

  const initialValues = {
    email: "",
    bio: "",
    course: "vue",
    skills: [],
    date: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Wrong email format"),
    bio: Yup.string().required("Biography is required"),
    course: Yup.string().required("Select Course"),
    //skills: Yup.string().nullable(),
    date: Yup.string("").required("Specify the date").nullable(),
  });

  const onSubmit = (values) => {
    console.log("values", values);
  };
  return (
    <div className="form-control">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form>
              <FormikControl
                control="input"
                name="email"
                type="email"
                label="Email"
                id="email"
              />

              <FormikControl
                control="textarea"
                name="bio"
                label="Bio"
                id="textarea"
              />

              <FormikControl
                control="select"
                name="course"
                label="Course"
                id="course"
                options={courseOptions}
              />
              <FormikControl
                control="checkbox"
                name="skills"
                id="skills"
                options={skillSet}
              />

              <FormikControl
                control="date"
                name="date"
                id="date"
                label="Date"
              />
              <button type="submit" disabled={!formik.isValid}>
                Enroll
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CourseEnrollmentForm;
