import React, { useRef } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";

// https://v9.primereact.org/inputtext/

const TextInput = ({ setAuthentication }) => {
  const formik = useFormik({
    initialValues: {
      value: "",
    },
    validate: (data) => {
      let errors = {};

      if (!data.value) {
        errors.value = "";
      }

      return errors;
    },
    onSubmit: () => {
      formik.resetForm();
      setAuthentication(true);
    },
  });

  const isFormFieldInvalid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name) => {
    return isFormFieldInvalid(name) ? (
      <small className="p-error">{formik.errors[name]}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  return (
    <div className="card flex justify-content-center">
      <form onSubmit={formik.handleSubmit} className="form">
        <span className="p-float-label">
          <InputText
            id="value"
            name="value"
            value={formik.values.value}
            onChange={(e) => {
              formik.setFieldValue("value", e.target.value);
            }}
            className={classNames({ "p-invalid": isFormFieldInvalid("value") })}
          />
          <label htmlFor="input_value">Användarnamn</label>
        </span>
        {getFormErrorMessage("value")}
        <Button type="submit" label="Bekräfta" />
      </form>
    </div>
  );
};

export default TextInput;
