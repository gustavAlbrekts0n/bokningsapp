import React, { useRef } from "react";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";

const ButtonBook = ({ date, time, hasSelection }) => {
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
    fetch("/api", options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response not ok");
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        window.location.reload(); // TODO: Better solution than reloading the entire page?
      })
      .catch((error) => {
        console.error("There was a problem with fetching the data");
      });
  };

  const accept = () => {
    toast.current.show({
      severity: "info",
      summary: "Bokning genomförd",
      detail: "Tiden har bokats",
      life: 3000,
    });
    postData(date, time);
    console.log("Bokning genomförd.", date, time);
  };

  const reject = () => {
    toast.current.show({
      severity: "warn",
      summary: "Bokning avbruten",
      detail: "Tiden har inte bokats",
      life: 3000,
    });
    console.log("Bokning avbruten.", date, time);
  };

  const warningNoSelection = () => {
    toast.current.show({
      severity: "warn",
      summary: "Ingen tid vald",
      detail: "Välj en tid först",
      life: 3000,
    });
    console.log("Bokning ej genomförd, saknar vald tid.");
  };

  const showTemplate = () => {
    if (!hasSelection) {
      warningNoSelection();
      return;
    }
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
          className={`button-book ${
            !hasSelection ? "unbookable-not-used" : ""
          }`}
          label="Boka"
          raised
          disabled={!hasSelection}
        />
      </div>
    </>
  );
};

export default ButtonBook;
