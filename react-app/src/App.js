import React, { useState, useEffect } from "react";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "./App.css";
import CalendarComponent from "./components/Calendar";
import ButtonBook from "./components/ButtonBook";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(" ");
  const [selectedTime, setSelectedTime] = useState(" ");
  const [selectedRow, setSelectedRow] = useState(-1);
  const [selectedColumn, setSelectedColumn] = useState(-1);
  const [data, setData] = useState([]);

  let hasSelection = selectedDate !== " ";

  const handleDateTimeChange = (date, time, rowIndex, columnIndex) => {
    setSelectedDate(date);
    setSelectedTime(time);
    setSelectedRow(rowIndex);
    setSelectedColumn(columnIndex);
  };

  useEffect(() => {
    // TODO: Turn into async function?
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) =>
        console.error("Error fetching data from server:", error)
      );
  }, []);

  const getSelectionComponent = () => {
    if (!hasSelection) {
      return <h2>Välj tid</h2>;
    }
    return (
      <>
        <h2>Vald tid:</h2>
        <p>{selectedDate}</p>
        <p>{selectedTime}</p>
      </>
    );
  };

  return (
    <div className="app">
      <div className="app-header">
        <h1>Boka Tvättid</h1>
        <h2>Lgh 104</h2>
      </div>

      <div className="app-body">
        <CalendarComponent
          onChange={handleDateTimeChange}
          bookings={data}
          selectedDate={selectedDate}
          selctedTime={selectedTime}
          selectedRow={selectedRow}
          selectedColumn={selectedColumn}
        />
        <div className="confirmation">
          <div className="selection">{getSelectionComponent()}</div>
          <ButtonBook
            date={selectedDate}
            time={selectedTime}
            hasSelection={hasSelection}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
