import React from 'react';
import './calendar.css';

function CalendarComponent({ mainOffset = 0 }) {

    function getDateByOffset(offset) {
        const today = new Date();
        const newDate = new Date(today);
        newDate.setDate(today.getDate() + offset + mainOffset);
        const day   = newDate.getDate();
        const month = newDate.getMonth() + 1;
        const weekday = weekdays[newDate.getDay()];

        return (`${weekday} ${day}/${month}`);
    }

    const weekdays = ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"];
    const days = Array.from({ length: 5 }, (_, index) => getDateByOffset(index));
    const times = ['07 - 11', '11 - 14', '14 - 17', '17 - 21'];

    return (
        <div className="calendar">
            <div className="calendar-header">
                {days.map(day => (
                    <div key={day} className="header-cell">{day}</div>
                ))}
            </div>
            <div className="body">
                {days.map((_, index) => (
                    <div key={index} className="day-column">
                        {times.map((time, index) => (
                            <div key={index} className="time-slot">{time}</div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CalendarComponent;
