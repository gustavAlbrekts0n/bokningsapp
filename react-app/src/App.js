import React, { useState, useEffect } from "react";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-teal/theme.css";
import "primeicons/primeicons.css";
import "./App.css";
import Login from "./components/Login";
import NavigationBar from "./components/NavigationBar";
import CalendarComponent from "./components/Calendar";
import ButtonBook from "./components/ButtonBook";

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

  const getSelectionComponent = () => {
    if (!hasSelection) {
      return <h2>Ingen vald tid</h2>;
    }
    return (
      <>
        <h2>Vald tid ({selectedUser.name}):</h2>
        <p>{selectedDate}</p>
        <p>{selectedTime}</p>
      </>
    );
  };

  if (!isAuthenticated)
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
          <div className="confirmation">
            <div className="confirmation-content">
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
      </div>
    );
};

export default App;
