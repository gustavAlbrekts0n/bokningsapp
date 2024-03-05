import React, { useState } from 'react';
import './App.css';
import Calendar from './components/calendar';
import TimePicker from './components/time-picker';

function App() {

  const calendarToday = new Date();
  let today = {
    year: calendarToday.getFullYear(),
    month: calendarToday.getMonth(),
    number: calendarToday.getDate(),
    weekday: calendarToday.getDay()
  }

  const [selectedDate, setSelectedDate] = useState(today);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="app">
      <div className="app-header">
        <h2>
          Boka tvättid
        </h2>
      </div>
      <Calendar onDateChange={handleDateChange} />
      <TimePicker selectedDate={selectedDate} />
    </div>
  );
}

export default App;