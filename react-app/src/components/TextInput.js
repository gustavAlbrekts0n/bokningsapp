import React from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";

// https://v9.primereact.org/inputtext/

const TextInput = ({ setAuthentication }) => {
  const postData = (password) => {
    const data = {
      password,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch("/api/login", options)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Network response error");
        }
        return response.json();
      })
      .then((result) => {
        if (result.status === 200) {
          console.log("Authentication successful");
          setAuthentication(true);
        }
      })
      .catch((error) => {
        console.error("There was a problem with fetching the data", error);
      });
  };

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
      postData(formik.values.value);
      formik.resetForm();
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
            maxLength={64}
            onChange={(e) => {
              formik.setFieldValue("value", e.target.value);
            }}
            className={classNames({ "p-invalid": isFormFieldInvalid("value") })}
          />
          <label htmlFor="input_value">Lösenord</label>
        </span>
        {getFormErrorMessage("value")}
        <Button type="submit" label="Bekräfta" />
      </form>
    </div>
  );
};

export default TextInput;
