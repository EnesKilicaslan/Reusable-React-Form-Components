import React from "react";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import Radio from "./Radio";

function FormikControl(props) {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "checkbox":
      return <div>checkbox</div>;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
