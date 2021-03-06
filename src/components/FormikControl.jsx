import React from "react";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import Radio from "./Radio";
import Checkbox from "./Checkbox";
import Date from "./Date";

function FormikControl(props) {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    case "date":
      return <Date {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
