import React, { useState } from 'react';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import './App.css';
import Calendar from './components/Calendar';
import Times from './components/Times';
import TimePicker from './components/time-picker';

function App() {

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  }

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="app">

      <div className="app-header">
        <h2>
          Boka tvättid
        </h2>
      </div>

      <div>
        <PrimeReactProvider>
          <Calendar onDateChange={handleDateChange} />
          <Times onTimeChange={handleTimeChange} />
        </PrimeReactProvider>
      </div>
      
      <div>
        <p>Selected date: { JSON.stringify(selectedDate) }</p>
        <p>Selected time: { selectedTime.name }</p>
      </div>

    </div>
  );
}

export default App;