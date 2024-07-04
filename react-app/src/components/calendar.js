import React, { useState } from "react";
import { Card } from "primereact/card";
import TimeSlot from "./TimeSlot.js";
import "./Calendar.css";

const CalendarComponent = ({
  bookings,
  selectedUser,
  selectedDate,
  selectedTime,
  onChange,
  selectedRow,
  selectedColumn,
}) => {
  const [mainOffset, setMainOffset] = useState(0);

  const handleLeftClick = () => {
    setMainOffset((prevOffset) => prevOffset - 1);
    deselect();
  };

  const handleRightClick = () => {
    setMainOffset((prevOffset) => prevOffset + 1);
    deselect();
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

  const isBookedByUser = (dateString, timeSlot) => {
    return bookings.some(
      (booking) =>
        booking.user.name === selectedUser.name &&
        booking.date === dateString &&
        booking.time === timeSlot
    );
  };

  const deselect = () => {
    // Deselect selected time slot (date, time, rowindex, columnindex)
    onChange(" ", " ", -1, -1);
  };

  return (
    <div className="card">
      <Card title="Boka Tid" subTitle={"Lägenhet " + selectedUser.name}>
        <div className="calendar">
          <div className="week-picker">
            <div onClick={handleLeftClick}>
              <i
                className="arrow pi pi-chevron-left"
                style={{ fontSize: "1rem" }}
              ></i>
            </div>
            <p>{`${dayFrom.dateString} - ${dayTo.dateString}`}</p>
            <div onClick={handleRightClick}>
              <i
                className="arrow pi pi-chevron-right"
                style={{ fontSize: "1rem" }}
              ></i>
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
                    isBookedByUser={isBookedByUser(
                      dateString,
                      timesDetailed[rowIndex]
                    )}
                    today={today}
                    onTimeSlotClick={onChange}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CalendarComponent;
