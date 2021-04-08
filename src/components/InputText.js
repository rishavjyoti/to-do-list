import React from "react";
import { useField } from "formik";
import { TextField } from "@fluentui/react";

const InputText = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return <TextField label={label} {...field} {...meta} type={props.type} />;
};

export default InputText;
