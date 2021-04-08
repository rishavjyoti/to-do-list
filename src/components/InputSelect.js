import React from "react";
import { useField } from "formik";
import { Dropdown } from "@fluentui/react";

const InputSelect = ({ label, ...props }) => {
  const [field, meta, form] = useField(props);

  return (
    <Dropdown
      {...meta}
      {...field}
      defaultSelectedKey={field.value.key}
      onChange={(e, d) => form.setValue(d)}
      options={props.options}
      label={label}
    />
  );
};

export default InputSelect;
