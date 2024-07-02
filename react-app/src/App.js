import React, { useState, useEffect } from "react";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "./App.css";
import CalendarComponent from "./components/Calendar";
import ButtonBook from "./components/ButtonBook";
import DropdownComponent from "./components/Dropdown";
import TextInput from "./components/TextInput";

const App = () => {
  const [isAuthenticated, setAuthentication] = useState(false);
  const [selectedDate, setSelectedDate] = useState(" ");
  const [selectedTime, setSelectedTime] = useState(" ");
  const [selectedRow, setSelectedRow] = useState(-1);
  const [selectedColumn, setSelectedColumn] = useState(-1);
  const [selectedUser, setSelectedUser] = useState(null);
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
      return <h2>Ingen vald tid</h2>;
    }
    return (
      <>
        <h2>Vald tid:</h2>
        <p>{selectedDate}</p>
        <p>{selectedTime}</p>
      </>
    );
  };

  if (!isAuthenticated)
    return (
      <div className="app">
        <div className="login">
          <h2>Logga in</h2>
          <TextInput setAuthentication={setAuthentication} />
        </div>
      </div>
    );
  else
    return (
      <div className="app">
        <div className="app-header">
          <h1>Boka Tvättid</h1>
          <h2>Lgh 104</h2>
        </div>

        <div className="app-body">
          <DropdownComponent
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
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
              user={selectedUser}
              hasSelection={hasSelection}
            />
          </div>
        </div>
      </div>
    );
};

export default App;
