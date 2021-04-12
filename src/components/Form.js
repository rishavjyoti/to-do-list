import React from "react";

import { Formik, Form } from "formik";

import { PrimaryButton, Stack } from "@fluentui/react";
import InputSelect from "./InputSelect";
import InputText from "./InputText";
import InputDate from "./InputDate";
import FormHeader from "./FormHeader";

import { addItems } from '../actions';
import { connect } from 'react-redux';

function SimpleForm({dispatch}){

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
      //const string = JSON.stringify(values);
      console.log(values);
      dispatch(addItems(values));
      values='';
    }
  }

  ///////////////////////////////////////////////
  return (
    <Stack as="div" horizontalAlign="center">
      <FormHeader/>
      <Formik
        initialValues={{
          Title: "",
          Description: "",
          status: { key: "", text: "" },
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

export default connect()(SimpleForm)