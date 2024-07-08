import React, { useRef } from "react";
import { useFormik } from "formik";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { classNames } from "primereact/utils";

// https://v9.primereact.org/inputtext/

const InputPassword = ({ selectedUser, setAuthentication }) => {
  const toast = useRef(null);

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
        } else {
          toast.current.show({
            severity: "error",
            summary: "Inloggningsfel",
            detail: "Felaktigt lösenord",
            life: 3000,
          });
        }
      })
      .catch((error) => {
        console.error("There was a problem with fetching the data", error);
        toast.current.show({
          severity: "error",
          summary: "Nätverksfel",
          detail: "Försök igen senare",
          life: 3000,
        });
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
      if (selectedUser) {
        postData(formik.values.value);
        formik.resetForm();
      } else {
        toast.current.show({
          severity: "error",
          summary: "Ingen lägenhet vald",
          detail: "Vänligen välj lägenhet",
          life: 3000,
        });
      }
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
      <Toast ref={toast} />
      <form onSubmit={formik.handleSubmit} className="form">
        <span className="p-float-label">
          <Password
            id="value"
            name="value"
            value={formik.values.value}
            maxLength={64}
            feedback={false}
            toggleMask
            onChange={(e) => {
              formik.setFieldValue("value", e.target.value);
            }}
            className={classNames({ "p-invalid": isFormFieldInvalid("value") })}
          />
          <label htmlFor="input_value">Lösenord</label>
        </span>
        {getFormErrorMessage("value")}
        <Button type="submit" label="Logga in" />
      </form>
    </div>
  );
};

export default InputPassword;
