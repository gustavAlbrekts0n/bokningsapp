import React, { useState } from 'react';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import './App.css';
import CalendarComponent from './components/Calendar';
import ButtonBook from './components/ButtonBook';

const App = () => {

  const [selectedDate, setSelectedDate] = useState(" ");
  const [selectedTime, setSelectedTime] = useState("Ingen tid vald");

  const handleDateTimeChange = (date, time) => {
    setSelectedDate(date);
    setSelectedTime(time);
  }

  return (
    <div className="app">

      <div className="app-header">
        <h1>Boka Tvättid</h1>
        <h2>Lgh 104</h2>
      </div>

      <div className="app-body">
        <CalendarComponent onChange={handleDateTimeChange} />
        <div className="confirmation">
          <div className="selection">
            <h2>Vald tid</h2>
            <p>{selectedDate}</p>
            <p>{selectedTime}</p>
          </div>
          <ButtonBook date={selectedDate} time={selectedTime} />
        </div>
      </div>
    </div>
  );
}

export default App;
