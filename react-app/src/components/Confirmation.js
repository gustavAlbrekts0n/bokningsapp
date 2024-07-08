import React from "react";
import { Card } from "primereact/card";
import ButtonBook from "./ButtonBook";
import "./Calendar.css";

const Confirmation = ({
  getSelectionInfo,
  selectedDate,
  selectedTime,
  selectedUser,
  hasSelection,
  setData,
}) => {
  return (
    <div className="card confirmation2">
      <Card>
        <div className="confirmation-body">
          <div className="selection">{getSelectionInfo()}</div>
          <ButtonBook
            date={selectedDate}
            time={selectedTime}
            user={selectedUser}
            hasSelection={hasSelection}
            setData={setData}
          />
        </div>
      </Card>
    </div>
  );
};

export default Confirmation;
