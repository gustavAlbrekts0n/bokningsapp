import React, { useState } from 'react';
import './App.css';
import Calendar from './components/calendar';
import TimePicker from './components/time-picker';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="app">
      <div className="app-header">
        <h2>
          Boka tvättid
        </h2>
        <h2>
          Brf Ripa
        </h2>
      </div>
      <Calendar onDateChange={handleDateChange} />
      <TimePicker selectedDate={selectedDate} />
    </div>
  );
}

export default App;