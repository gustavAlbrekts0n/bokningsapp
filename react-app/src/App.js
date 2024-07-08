import React, { useState, useEffect, useRef } from "react";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-teal/theme.css";
import "primeicons/primeicons.css";
import "./App.css";
import Login from "./components/Login";
import NavigationBar from "./components/NavigationBar";
import CalendarComponent from "./components/Calendar";
import Confirmation from "./components/Confirmation";
import ButtonBook from "./components/ButtonBook";

const App = () => {
  const confirmationRef = useRef(null);

  const [isAuthenticated, setAuthentication] = useState(false);
  const [selectedDate, setSelectedDate] = useState(" ");
  const [selectedTime, setSelectedTime] = useState(" ");
  const [selectedRow, setSelectedRow] = useState(-1);
  const [selectedColumn, setSelectedColumn] = useState(-1);
  const [selectedUser, setSelectedUser] = useState({ name: "Test" });
  const [data, setData] = useState([]);

  let hasSelection = selectedDate !== " ";

  const handleDateTimeChange = (date, time, rowIndex, columnIndex) => {
    setSelectedDate(date);
    setSelectedTime(time);
    setSelectedRow(rowIndex);
    setSelectedColumn(columnIndex);

    confirmationRef.current.scrollIntoView();
  };

  useEffect(() => {
    // TODO: Turn into async function?
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data from server:");
        console.log(data);
        /*const filteredData = data.filter(
          (item) => item.user && item.user.name === selectedUser.name
        );*/
        setData(data);
      })
      .catch((error) =>
        console.error("Error fetching data from server:", error)
      );
  }, []);

  const getSelectionInfo = () => {
    if (!hasSelection) {
      return (
        <>
          <h3>Vald tid</h3>
          <div className="selection-text">
            <p>{"—"}</p>
            <p>{"—"}</p>
          </div>
        </>
      );
    }
    return (
      <>
        <h3>Vald tid</h3>
        <div className="selection-text">
          <p>{selectedDate}</p>
          <p>{selectedTime}</p>
        </div>
      </>
    );
  };

  if (!true)
    //!isAuthenticated
    return (
      <Login
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        setAuthentication={setAuthentication}
      />
    );
  else
    return (
      <div className="app">
        <div className="app-header">
          <div className="app-header-content">
            <NavigationBar />
            {/*<h1>Boka Tvättid</h1>
            <h2>Bertil Bertilsson</h2>*/}
          </div>
        </div>

        <div className="app-body">
          <CalendarComponent
            onChange={handleDateTimeChange}
            bookings={data}
            selectedUser={selectedUser}
            selectedDate={selectedDate}
            selctedTime={selectedTime}
            selectedRow={selectedRow}
            selectedColumn={selectedColumn}
          />
          <div ref={confirmationRef}>
            <Confirmation
              getSelectionInfo={getSelectionInfo}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              selectedUser={selectedUser}
              hasSelection={hasSelection}
              setData={setData}
            />
          </div>
          {/*
            <div className="confirmation">
              <div className="confirmation-content">
                <div className="selection">{getSelectionInfo()}</div>
                <ButtonBook
                  date={selectedDate}
                  time={selectedTime}
                  user={selectedUser}
                  hasSelection={hasSelection}
                  setData={setData}
                />
              </div>
            </div>
          */}
        </div>
      </div>
    );
};

export default App;
