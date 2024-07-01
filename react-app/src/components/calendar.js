import React, { useState } from "react";
import { MaterialSymbol } from "react-material-symbols";
import TimeSlot from "./TimeSlot.js";
import "./Calendar.css";

const CalendarComponent = ({
  bookings,
  selectedDate,
  selectedTime,
  onChange,
  selectedRow,
  selectedColumn,
}) => {
  const [mainOffset, setMainOffset] = useState(0);

  const handleLeftClick = () => {
    setMainOffset((prevOffset) => prevOffset - 1);
  };

  const handleRightClick = () => {
    setMainOffset((prevOffset) => prevOffset + 1);
  };

  const getDateByOffset = (offset) => {
    const today = new Date();
    const newDate = new Date(today);
    newDate.setDate(today.getDate() + offset + mainOffset);

    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const weekday = weekdays[newDate.getDay()];

    const dateString = `${weekday} ${day}/${month}`;
    return { dateString, date: newDate };
  };

  const printDebug = (date, time) => {
    console.log(`${date} : ${time}`);
  };

  const times = ["07 - 11", "11 - 14", "14 - 17", "17 - 21"];
  const timesDetailed = [
    "07:00-11:00",
    "11:00-14:00",
    "14:00-17:00",
    "17:00-21:00",
  ];
  const weekdays = ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"];
  const days = Array.from({ length: 5 }, (_, index) => getDateByOffset(index));
  const dayFrom = days[0];
  const dayTo = days[days.length - 1];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isBooked = (dateString, timeSlot) => {
    return bookings.some(
      (booking) => booking.date === dateString && booking.time === timeSlot
    );
  };

  return (
    <div className="calendar">
      <p>{selectedTime}</p>
      <div className="week-picker">
        <div onClick={handleLeftClick}>
          <MaterialSymbol className="arrow" icon="chevron_left" size={32} />
        </div>
        <p>{`${dayFrom.dateString} - ${dayTo.dateString}`}</p>
        <div onClick={handleRightClick}>
          <MaterialSymbol className="arrow" icon="chevron_right" size={32} />
        </div>
      </div>
      <div className="calendar-header">
        {days.map(({ dateString }) => (
          <div key={dateString} className="header-cell">
            {dateString}
          </div>
        ))}
      </div>
      <div className="body">
        {days.map(({ dateString, date }, columnIndex) => (
          <div key={columnIndex} className="day-column">
            {times.map((time, rowIndex) => (
              <TimeSlot
                key={columnIndex + rowIndex}
                rowIndex={rowIndex}
                selectedRow={selectedRow}
                columnIndex={columnIndex}
                selectedColumn={selectedColumn}
                date={date}
                dateString={dateString}
                time={time}
                timeDetailed={timesDetailed[rowIndex]}
                isBooked={isBooked(dateString, timesDetailed[rowIndex])}
                today={today}
                onTimeSlotClick={onChange}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarComponent;
