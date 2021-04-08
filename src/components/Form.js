import React, { useContext, useState } from "react";
import Store from "../context";
import { Formik, Form } from "formik";
import { PrimaryButton, Stack } from "@fluentui/react";
import * as Yup from "yup";
import InputSelect from "./InputSelect";
import InputText from "./InputText";
import InputDate from "./InputDate";
import FormHeader from "./FormHeader";

export default function SimpleForm() {

  const { dispatch } = useContext(Store);

  // Creating a local state to have currently writing
  // todo item that will be sent to the global store.
  const [todo, setTodo] = useState("");


  ///////////////////////////////////////////////

  const validate = values => {
    const errors = {};
    if (!values.Title) {
      errors.Title = 'Required';
    } 
    if (!values.Description) {
      errors.Description = 'Required';
    } 
  
    return errors;
  };

  const onLoginFormSubmit = (values) => {
        if(validate(values).Title==="Required"){
      alert("Please Enter Title");
    }
    else if(validate(values).Description==="Required"){
      alert("Please Enter Description");
    }
    else{
      const string = JSON.stringify(values);
      dispatch({ type: "ADD_TODO", payload: string });
      setTodo("");
    }
  }

  const validationSchema = Yup.object().shape({
    Title: Yup.string().required,
    Description: Yup.string().required,
  });

  ///////////////////////////////////////////////
  return (
    <Stack as="div" horizontalAlign="center">
      <FormHeader/>
      <Formik
        //validationSchema={validationSchema}
        initialValues={{
          Title: "",
          Description: "",
          status: { key: "", text: "Status" },
          date: new Date()
        }}
        onSubmit={onLoginFormSubmit}
      >
        {({ errors }) => {
          return (
            <Form style={{width:"40%", background_color:""}}>
              <InputText name="Title" label="Title"/>
              <InputText name="Description" label="Description"/>
              <InputDate name="date" label="Due Date"/>
              <InputSelect
                name="status"
                label="Select"
                options={[
                  { key: "", text: "" },
                  { key: "0", text: "ToDo" },
                  { key: "1", text: "Ongoing" },
                  { key: "2", text: "Stalled" },
                  { key: "3", text: "Done" }
                ]}
              />
              <div style={{textAlign: "center"}}>
                <PrimaryButton text="Submit" type="submit" />
              </div>
            </Form>
          );
        }}
      </Formik>
    </Stack>
  );
}
