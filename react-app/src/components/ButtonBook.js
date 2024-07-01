import React, { useRef } from "react";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";

const ButtonBook = (props) => {
  const toast = useRef(null);

  const postData = (date, time) => {
    const data = {
      date,
      time,
      isBooked: true,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("/api", options);
  };

  const accept = () => {
    toast.current.show({
      severity: "info",
      summary: "Bokning genomförd",
      detail: "Tiden har bokats",
      life: 3000,
    });
    postData(props.date, props.time);
    console.log("Bokning genomförd.", props.date, props.time);
  };

  const reject = () => {
    toast.current.show({
      severity: "warn",
      summary: "Bokning avbruten",
      detail: "Tiden har inte bokats",
      life: 3000,
    });
    console.log("Bokning avbruten.", props.date, props.time);
  };

  const showTemplate = () => {
    confirmDialog({
      group: "bookingConfirmation",
      header: "Bekräftelse",
      message: (
        <div className="flex flex-column align-items-center w-full gap-3 border-bottom-1 surface-border">
          <span>Är du säker på att du vill boka vald tid?</span>
        </div>
      ),
      accept,
      reject,
    });
  };

  return (
    <>
      <Toast ref={toast} />
      <ConfirmDialog
        group="bookingConfirmation"
        acceptLabel="Ja"
        rejectLabel="Nej"
      />
      <div className="card flex justify-content-center">
        <Button
          onClick={() => showTemplate()}
          className="button-book"
          label="Boka"
          raised
        />
      </div>
    </>
  );
};

export default ButtonBook;
