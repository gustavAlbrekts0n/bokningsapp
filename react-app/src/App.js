import React, { useState } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { MaterialSymbol } from 'react-material-symbols';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import './App.css';
import CalendarComponent from './components/calendar';
import ButtonBook from './components/buttonBook';

function App() {

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  }

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const [mainOffset, setMainOffset] = useState(0);

  const handleLeftClick = () => {
    setMainOffset(prevOffset => prevOffset - 1);
  };

  const handleRightClick = () => {
    setMainOffset(prevOffset => prevOffset + 1);
  };

  return (
    <div className="app">

      <div className="app-header">
        <h1>
          Boka Tvättid
        </h1>
        <h2>
          Lgh 104
        </h2>
      </div>

      <div className="app-body">
        
        <div className="week-picker">
          <div onClick={handleLeftClick}>
            <MaterialSymbol className="arrow" icon="chevron_left" size={32} />
          </div>
          <p>Måndag 1/6 - Fredag 5/6</p>
          <div onClick={handleRightClick}>
          <MaterialSymbol className="arrow" icon="chevron_right" size={32} />
          </div>
        </div>
        
        <CalendarComponent mainOffset={mainOffset} />

        <div className="confirmation">
          <div className="selection">
            <h2>Vald tid</h2>
            <p>Måndag 1/6</p>
            <p>11:00 - 14:00</p>
            {/*
            <p>{ JSON.stringify(selectedDate) }</p>
            <p>{ selectedTime.name }</p>
            */}
          </div>
          <ButtonBook date={selectedDate} time={selectedTime} />
        </div>
      
      </div>

      {/*
      <div className="datetime">
        
        <PrimeReactProvider>
          <Calendar onDateChange={handleDateChange} />
          <Times onTimeChange={handleTimeChange} date={selectedDate} />
        </PrimeReactProvider>
        
      </div>
      */}

    </div>
  );
}

export default App;